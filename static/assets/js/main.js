/*
	Author       : Theme-Family
	Template Name: Al-Qawiyy - Multipurpose Onepage Template
	Version      : 1.0
*/
(function($) {
    "use strict";
	
	
		/*PRELOADER JS*/
		$(window).on('load', function() { 
			$('.atf-status').fadeOut();
			$('.atf-preloader').delay(350).fadeOut('slow'); 
		}); 
		/*END PRELOADER JS*/	
		
		
		/*--------------------------------------------------------------
       Sticky Header
      --------------------------------------------------------------*/
	
		$(window).on("scroll", function() {
			 var scroll = $(window).scrollTop();
			if (scroll >= 10) {
				$('.atf-sticky-header').addClass('atf-sticky-active');
			} else {
				$('.atf-sticky-header').removeClass('atf-sticky-active');
			}
		});
     
    /*--------------------------------------------------------------
       Mobile Menu
      --------------------------------------------------------------*/

        $('.atf-nav').append('<span class="atf-menu-toggle"><span></span></span>');
        $('.menu-item-has-children').append('<span class="atf-menu-dropdown-toggle"></span>');
        $('.atf-menu-toggle').on('click', function() {
            $(this).toggleClass("atf-toggle-active").siblings('.atf-nav-list').slideToggle();;
        });
        $('.atf-menu-dropdown-toggle').on('click', function() {
            $(this).toggleClass('active').siblings('ul').slideToggle();
        });

    
    /*--------------------------------------------------------------
       One Page Navigation
      --------------------------------------------------------------*/
        // Click To Go Top
        $('.atf-smooth-move').on('click', function() {
            var thisAttr = $(this).attr('href');
            if ($(thisAttr).length) {
                var scrollPoint = $(thisAttr).offset().top - 50;
                $('body,html').animate({
                    scrollTop: scrollPoint
                }, 800);
            }
            return false;
        });

        // One Page Active Class
        var topLimit = 300,
            ultimateOffset = 200;

        $('.atf-onepage-nav').each(function() {
            var $this = $(this),
                $parent = $this.parent(),
                current = null,
                $findLinks = $this.find("a");

            function getHeader(top) {
                var last = $findLinks.first();
                if (top < topLimit) {
                    return last;
                }
                for (var i = 0; i < $findLinks.length; i++) {
                    var $link = $findLinks.eq(i),
                        href = $link.attr("href");

                    if (href.charAt(0) === "#" && href.length > 1) {
                        var $anchor = $(href).first();
                        if ($anchor.length > 0) {
                            var offset = $anchor.offset();
                            if (top < offset.top - ultimateOffset) {
                                return last;
                            }
                            last = $link;
                        }
                    }
                }
                return last;
            }

            $(window).on("scroll", function() {
                var top = window.scrollY,
                    height = $this.outerHeight(),
                    max_bottom = $parent.offset().top + $parent.outerHeight(),
                    bottom = top + height + ultimateOffset;

                var $current = getHeader(top);

                if (current !== $current) {
                    $this.find(".active").removeClass("active");
                    $current.addClass("active");
                    current = $current;
                }
            });
        });

	/*--------------------------------------------------------------
       Sticky Back To Top
      --------------------------------------------------------------*/
  
		  $(window).on('scroll', function() {
			if ($(window).scrollTop() > 50) {
				$('.atf-sticky-header').addClass('atf-nav');
				$('.atf-back-to-top').addClass('open');
			} else {
				$('.atf-sticky-header').removeClass('atf-nav');
				$('.atf-back-to-top').removeClass('open');
			}
		  });
	/*--------------------------------------------------------------
       START SCROLL UP
      --------------------------------------------------------------*/	  
			if ($('.atf-back-to-top').length) {
			  $(".atf-back-to-top").on('click', function () {
				var target = $(this).attr('data-targets');
				// animate
				$('html, body').animate({
				  scrollTop: $(target).offset().top
				}, 1000);

			  });
			}
	
	/*--------------------------------------------------------------
         END SCROLL UP
      --------------------------------------------------------------*/
	  
	
	/*--------------------------------------------------------------
       START PARTNER JS
      --------------------------------------------------------------*/	
			$('.atf-brand-active').owlCarousel({
				margin:5,
				autoplay:true,
				items: 3,
				loop:true,
				nav:false,
				responsive:{
					0:{
						items:1
					},
					600:{
						items:3
					},
					1000:{
						items:4
					}
				}
			})
	/*--------------------------------------------------------------
       END PARTNER JS
      --------------------------------------------------------------*/	


	/*--------------------------------------------------------------
       START MAILCHAMP JS
      --------------------------------------------------------------*/
	
		// mailchamp
		$('#mc-form').ajaxChimp({
			url: 'https://gmail.us10.list-manage.com/subscribe/post?u=c9af266402a277062d0d7cee0&amp;id=1211fda42f'
			/* Replace Your AjaxChimp Subscription Link */
		}); 
		
	/*--------------------------------------------------------------
       END MAILCHAMP JS
      --------------------------------------------------------------*/	
		
	/*--------------------------------------------------------------
		START WOW SCROLL SPY
      --------------------------------------------------------------*/	
		 var wow = new WOW({
			  //disabled for mobile
				mobile: false
			});

		wow.init();	
	/*--------------------------------------------------------------
		END WOW SCROLL SPY
      --------------------------------------------------------------*/	
			
     /*--------------------------------------------------------------
		START PARALLAX JS
      --------------------------------------------------------------*/	
			(function () {

				if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
				 
				} else {
					$(window).stellar({
						horizontalScrolling: false,
						responsive: true
					});
				}

			}());
	
	/*--------------------------------------------------------------
		END PARALLAX JS
      --------------------------------------------------------------*/	
			
     
    
})(jQuery);


	