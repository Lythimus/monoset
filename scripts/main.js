(function ($, Drupal) {

  Drupal.behaviors.customTweaks = {
    attach: function (context, settings) {

      if ($('.node--type-book')) {
        $(window).resize(function(ev) {
          if ($(window).width() > 1400) {
            $('.ink-drop-cafe-tall-wrapper').show();
          } else {
            $('.ink-drop-cafe-tall-wrapper').hide();           
          }
        });
      }

      $('.lines-button').on('click', function(ev) {
      		console.log(ev);
          $('.product-description-wrapper').toggleClass('disable-description');
          $(this).toggleClass('close');
      });
      
      // $('.views-field-uc-product-image').mouseParallax({ moveFactor: 5 });

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
        if ($('article.node--type-book, .region-front-one').length && scr < $('article.node--type-book, .region-front-one').offset().top + $('article.node--type-book, .region-front-one').outerHeight()) {
          $('.ink-drop-cafe-tall-wrapper .RotatorScript').addClass("sticky");
        }
        else {
          $('.ink-drop-cafe-tall-wrapper .RotatorScript').removeClass("sticky");
        }
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

      $('#block-buykara h2, #block-aboutbeccahillburn .becca-intro, #block-letmeknowwhatyouthinkofkara h2, #block-buykara-2 h2, #block-aboutbeccahillburn-2 .becca-intro, h2.bigtext, h3.bigtext, h4.bigtext, h5.bigtext').bigtext({
          childSelector: 'span'
      });

      // Fix Rotator images breaking when caching through CloudFlare
      $('.RotatorScript').ready(function() {
        if ($('.RotatorScript:contains(undefined)').html()) {
          $('.RotatorScript:contains(undefined)').html(jQuery('.RotatorScript:contains(undefined)').html().replace(/undefined/, '<a href="https://inkdropcafe.com"><img src="https://scripts.inkdropcafe.com/rotator/images/160x274/IDCwhite.png" alt="Ink Drop Cafe" title="Ink Drop Cafe"></a>'));
        }
      });
    }
  };
})(jQuery, Drupal);
