(function($){
	"use strict";
	var THE = {};
	var plugin_track = 'static/plugin/';
	$.fn.exists = function () {
        return this.length > 0;
    };

	
    /*--------------------
        * Menu Close
    ----------------------*/
    THE.MenuClose = function(){
      $('.navbar-nav .nav-link').on('click', function() {
       var toggle = $('.navbar-toggler').is(':visible');
       if (toggle) {
         $('.navbar-collapse').collapse('hide');
       }
      });
    }


	/* ---------------------------------------------- /*
	 * Header Fixed
	/* ---------------------------------------------- */
	THE.HeaderFixd = function() {
		var HscrollTop  = $(window).scrollTop();  
	    if (HscrollTop >= 100) {
	       $('header').addClass('fixed-header');
	    }
	    else {
	       $('header').removeClass('fixed-header');
	    }
	}

	/*--------------------
        * One Page
    ----------------------*/
    THE.OnePage = function(){
        $('header a[href*="#"]:not([href="#"]), .go-to a[href*="#"]:not([href="#"]), a.mouse[href*="#"]:not([href="#"])').on('click', function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') || location.hostname == this.hostname) {
              var target = $(this.hash);
                  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                  if (target.length) {
                    $('html,body').animate({
                      scrollTop: target.offset().top - 70,
                      }, 1000);
                      return false;
                  }
            }
        });
    }

    /* ---------------------------------------------- /*
	 * Search Box
	/* ---------------------------------------------- */
	THE.SearchBox = function() {
		var SearchToggle = $(".h_search")
	 	SearchToggle.on("click", function() {
	        $('.h-search-section').toggleClass("searh-form-open");
    	});
	}

	THE.HeaderHeight = function(){
		var HHeight = $('.header-height .fixed-header-bar').height()
	    $('.header-height').css("min-height", HHeight);	
	}

	/* ---------------------------------------------- /*
	 * Mega Menu
	/* ---------------------------------------------- */

	THE.MegaMenu = function() {
		var mDropdown = $(".px-nav-toggle") 
		mDropdown.on("click", function() {
	        $(this).parent().toggleClass("open-menu-parent");
	        $(this).next('ul').toggleClass("open-menu");
	        $(this).toggleClass("open");
	    });
	}
	/* ---------------------------------------------- /*
		* accordion
	/* ---------------------------------------------- */
	THE.Accordion = function() {
		$('.accordion').each(function (i, elem) {
	       	var $elem = $(this),
	           $acpanel = $elem.find(".acco-group > .acco-des"),
	           $acsnav =  $elem.find(".acco-group > .acco-heading");
	          $acpanel.hide().first().slideDown("easeOutExpo");
	          $acsnav.first().parent().addClass("acco-active");
	          $acsnav.on('click', function () {
	            if(!$(this).parent().hasClass("acco-active")){
	              var $this = $(this).next(".acco-des");
	              $acsnav.parent().removeClass("acco-active");
	              $(this).parent().addClass("acco-active");
	              $acpanel.not($this).slideUp("easeInExpo");
	              $(this).next().slideDown("easeOutExpo");
	            }else{
	               $(this).parent().removeClass("acco-active");
	               $(this).next().slideUp("easeInExpo");
	            }
	            return false;
	        });
	    });

    $('.accordion-close').each(function (i, elem) {
          var $elem = $(this),
             $acpanel = $elem.find(".acco-group > .acco-des"),
             $acsnav =  $elem.find(".acco-group > .acco-heading");
            
            //$acpanel.hide().first().slideDown("easeOutExpo");
            //$acsnav.first().parent().addClass("acco-active");

            $acsnav.on('click', function () {
              if(!$(this).parent().hasClass("acco-active")){
                var $this = $(this).next(".acco-des");
                $acsnav.parent().removeClass("acco-active");
                $(this).parent().addClass("acco-active");
                $acpanel.not($this).slideUp("easeInExpo");
                $(this).next().slideDown("easeOutExpo");
              }else{
                 $(this).parent().removeClass("acco-active");
                 $(this).next().slideUp("easeInExpo");
              }
              return false;
          });
      });
	}

	


    

    

	

    

	/*--------------------
        * Progress Bar 
    ----------------------*/
    THE.ProgressBar = function(){
        $(".skill-bar .skill-bar-in").each(function () {
          var bottom_object = $(this).offset().top + $(this).outerHeight();
          var bottom_window = $(window).scrollTop() + $(window).height();
          var progressWidth = $(this).attr('aria-valuenow') + '%';
          if(bottom_window > bottom_object) {
            $(this).css({
              width : progressWidth
            });
          }
        });
    }

    

    
    
   
   
    

	/* ---------------------------------------------- /*
	 * All Functions
	/* ---------------------------------------------- */
    // loadScript
	var _arr  = {};
	function loadScript(scriptName, callback) {
	    if (!_arr[scriptName]) {
	      _arr[scriptName] = true;
	      var body    = document.getElementsByTagName('body')[0];
	      var script    = document.createElement('script');
	      script.type   = 'text/javascript';
	      script.src    = scriptName;
	      // then bind the event to the callback function
	      // there are several events for cross browser compatibility
	      // script.onreadystatechange = callback;
	      script.onload = callback;
	      // fire the loading
	      body.appendChild(script);
	    } else if (callback) {
	      callback();
	    }
	};

	
	// Document on Ready
	$(document).on("ready", function(){
		THE.HeaderFixd(),
		THE.OnePage(),
		THE.Accordion(),
		THE.MenuClose(),
		THE.SearchBox(),
		THE.HeaderHeight(),
		THE.MegaMenu(),
		THE.ProgressBar();
	});

	// Document on Scrool
	$(window).on("scroll", function(){
		THE.ProgressBar(),
		THE.HeaderFixd();
	});

	// Window on Resize
	$(window).on("resize", function(){
		THE.HeaderHeight();
	});


})(jQuery);