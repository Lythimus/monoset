!function(n,i){i.behaviors.frontPage={attach:function(i,a){n(window).scroll(function(){n(this).scrollTop()>1?n(".header-main").addClass("sticky"):n(".header-main").removeClass("sticky")}),n(function(){(new WOW).init()})}}}(jQuery,Drupal);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZyb250LmpzIl0sIm5hbWVzIjpbIiQiLCJEcnVwYWwiLCJiZWhhdmlvcnMiLCJmcm9udFBhZ2UiLCJhdHRhY2giLCJjb250ZXh0Iiwic2V0dGluZ3MiLCJ3aW5kb3ciLCJzY3JvbGwiLCJ0aGlzIiwic2Nyb2xsVG9wIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsIldPVyIsImluaXQiLCJqUXVlcnkiXSwibWFwcGluZ3MiOiJDQUFBLFNBQVVBLEVBQUdDLEdBRVRBLEVBQU9DLFVBQVVDLFdBQ2JDLE9BQVEsU0FBU0MsRUFBU0MsR0FHdEJOLEVBQUVPLFFBQVFDLE9BQU8sV0FDVFIsRUFBRVMsTUFBTUMsWUFBYyxFQUN0QlYsRUFBRSxnQkFBZ0JXLFNBQVMsVUFFM0JYLEVBQUUsZ0JBQWdCWSxZQUFZLFlBS3RDWixFQUFFLFlBQ0UsR0FBSWEsTUFBTUMsWUFLdkJDLE9BQVFkIiwiZmlsZSI6ImZyb250LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCQsIERydXBhbCkge1xuXG4gICAgRHJ1cGFsLmJlaGF2aW9ycy5mcm9udFBhZ2UgPSB7XG4gICAgICAgIGF0dGFjaDogZnVuY3Rpb24oY29udGV4dCwgc2V0dGluZ3MpIHtcblxuICAgICAgICAgICAgLy8gIEhlYWRlciBUd2Vha3NcbiAgICAgICAgICAgICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgaWYgKCQodGhpcykuc2Nyb2xsVG9wKCkgPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgICQoJy5oZWFkZXItbWFpbicpLmFkZENsYXNzKFwic3RpY2t5XCIpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICQoJy5oZWFkZXItbWFpbicpLnJlbW92ZUNsYXNzKFwic3RpY2t5XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyAgQW5pbWF0aW9uc1xuICAgICAgICAgICAgJChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBuZXcgV09XKCkuaW5pdCgpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfVxuICAgIH07XG59KShqUXVlcnksIERydXBhbCk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
(function ($, Drupal) {

  Drupal.behaviors.frontPage = {
    attach: function (context, settings) {

      // Header Tweaks
      $(window).scroll(function () {
        if ($(this).scrollTop() > 1) {
          $('.header-main').addClass("sticky");
        }
        else {
          $('.header-main').removeClass("sticky");
        }
      });

      //  Animations
      $(function () {
        new WOW().init();
      });

			function waitForWebfonts(fonts, callback) {
					var loadedFonts = 0;
					for(var i = 0, l = fonts.length; i < l; ++i) {
							(function(font) {
									var node = document.createElement('span');
									// Characters that vary significantly among different fonts
									node.innerHTML = 'giItT1WQy@!-/#';
									// Visible - so we can measure it - but not on the screen
									node.style.position      = 'absolute';
									node.style.left          = '-10000px';
									node.style.top           = '-10000px';
									// Large font size makes even subtle changes obvious
									node.style.fontSize      = '300px';
									// Reset any font properties
									node.style.fontFamily    = 'sans-serif';
									node.style.fontVariant   = 'normal';
									node.style.fontStyle     = 'normal';
									node.style.fontWeight    = 'normal';
									node.style.letterSpacing = '0';
									document.body.appendChild(node);

									// Remember width with no applied web font
									var width = node.offsetWidth;

									node.style.fontFamily = font;

									var interval;
									function checkFont() {
											// Compare current width with original width
											if(node && node.offsetWidth != width) {
													++loadedFonts;
													node.parentNode.removeChild(node);
													node = null;
											}

											// If all fonts have been loaded
											if(loadedFonts >= fonts.length) {
													if(interval) {
															clearInterval(interval);
													}
													if(loadedFonts == fonts.length) {
															callback();
															return true;
													}
											}
									};

									if(!checkFont()) {
											interval = setInterval(checkFont, 50);
									}
							})(fonts[i]);
					}
			};

			// Fit Text Plugin for Main Header
			$("h1").fitText(
					1.2, {
							minFontSize: '35px',
							maxFontSize: '65px'
					}
			);

			$('#block-buykara-2 h2, #block-aboutbeccahillburn .becca-intro, #block-letmeknowwhatyouthinkofkara h2').bigtext({
					childSelector: 'span'
			});
    }
  };
})(jQuery, Drupal);
