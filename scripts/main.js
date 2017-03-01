(function ($, Drupal) {

  Drupal.behaviors.customTweaks = {
    attach: function (context, settings) {

      /*
      if ($('.node--type-book')) {
        $(window).resize(function(ev) {
          if ($(window).width() > 1400) {
            $('.comic-garden-tall-wrapper').show();
          } else {
            $('.comic-garden-tall-wrapper').hide();           
          }
        });
      }
      */
      $(window).trigger('resize');
      // Header Tweaks
      $(window).scroll(function () {
        var scr = $(this).scrollTop();
        if (scr > 1) {
          $('.header-main').addClass("sticky");
        }
        else {
          $('.header-main').removeClass("sticky");
        }
        //if (scr < jQuery('article.node--type-book, .region-front-one').offset().top + jQuery('article.node--type-book, .region-front-one').outerHeight()) {
        //  $('.comic-garden-tall-wrapper .ComicGarden').addClass("sticky");
        //}
        //else {
        //  $('.comic-garden-tall-wrapper .ComicGarden').removeClass("sticky");
        //}
      });

      // Smooth Scroll to Anchor Links
      $(function () {
        $('a[href*="#"]:not([href="#"])').click(function () {
          if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var headerHeight = $('.header-main').outerHeight();
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
              $('html,body').animate({
                scrollTop: target.offset().top - headerHeight
              }, 500);
              return false;
            }
          }
        });
      });

      // SVG Injector
      // For testing in IE8
      if (!window.console) {
        console = {
          log: function () {}
        };
      }

      // Elements to inject
      var mySVGsToInject = document.querySelectorAll('.inject-svg');

      // Options
      var injectorOptions = {
        evalScripts: 'once',
        each: function (svg) {}
      };

      // Trigger the injection
      SVGInjector(mySVGsToInject, injectorOptions, function (totalSVGsInjected) {});

      $('footer .request-headline').bigtext({
          childSelector: 'div'
      });

      // Fit Text Plugin for Main Header
      $("h1").fitText(
          1.2, {
              minFontSize: '35px',
              maxFontSize: '65px'
          }
      );

      $('#block-buykara h2, #block-aboutbeccahillburn .becca-intro, #block-letmeknowwhatyouthinkofkara h2, #block-buykara-2 h2, #block-aboutbeccahillburn-2 .becca-intro').bigtext({
          childSelector: 'span'
      });

    }
  };
})(jQuery, Drupal);
