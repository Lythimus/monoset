const { src, dest, watch, series, parallel } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();
const gulpLoadPlugins = require('gulp-load-plugins');
const $ = gulpLoadPlugins();

// Error notifications
const reportError = function(error) {
  $.notify({
    title: 'Gulp Task Error',
    message: 'Check the console.'
  }).write(error);
  console.log(error.toString());
  this.emit('end');
};

// Sass processing
function styles() {
  return src('scss/**/*.scss')
    .pipe($.sourcemaps.init())
    .pipe(sass({
      outputStyle: 'expanded'
    }).on('error', sass.logError))
    .pipe($.autoprefixer())
    .pipe($.sourcemaps.write('.'))
    .pipe(dest('styles'))
    .pipe(browserSync.stream());
}

// Process JS files
function scripts() {
  return src('scripts/**/*.js')
    .pipe($.sourcemaps.init())
    .pipe($.uglify())
    .pipe($.rename({ extname: '.min.js' }))
    .pipe($.sourcemaps.write('.'))
    .pipe(dest('scripts'));
}

// Optimize Images
function images() {
  return src('images/**/*')
    .pipe($.imagemin([
      $.imagemin.gifsicle({ interlaced: true }),
      $.imagemin.mozjpeg({ progressive: true }),
      $.imagemin.optipng({ optimizationLevel: 5 }),
      $.imagemin.svgo({
        plugins: [
          { removeViewBox: false },
          { cleanupIDs: false }
        ]
      })
    ]))
    .pipe(dest('images'));
}

// BrowserSync
function serve(done) {
  browserSync.init({
    proxy: "drupal-8-project.ddev.site",
    open: false,
    notify: false
  });
  done();
}

// Watch task
function watchFiles(done) {
  // Watch .scss files
  watch('scss/**/*.scss', styles);
  
  // Watch .js files
  watch('scripts/**/*.js', scripts);
  
  // Watch image files
  watch('images/**/*', images);
  
  // Watch template files
  watch('templates/**/*.twig').on('change', browserSync.reload);
  
  done();
}

// Define complex tasks
const build = parallel(styles, scripts, images);
const dev = series(build, serve, watchFiles);

// Export tasks
exports.styles = styles;
exports.scripts = scripts;
exports.images = images;
exports.build = build;
exports.default = dev;