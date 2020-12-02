// JavaScript Document
(function($) {
	$(window).on('load',function() {
		setTimeout(function() { 
			$("body").css("overflow-y", "scroll");
			$("#preloader").fadeOut("slow");
			$("#spinner").fadeOut();
		}, 1500);
	})
	          
    $(document).ready(function(){
		$( 'html, body' ).scrollTop(0);
		var isMobile = (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) ? true : false;     
        $(window).scroll(function(){  
			var currentPosition = $(this).scrollTop();                        
            if (currentPosition > 34) {
                $('.top-nav-hidden').fadeIn(100);
				$('.top-nav').fadeOut(100);
            }else {
                $('.top-nav-hidden').fadeOut(100);
				$('.top-nav').fadeIn(100);
            }

			if (currentPosition >= 34) {
				var i;
				$('section').each(function(i) {
					if ($(this).position().top <= currentPosition + 70) {
						$('.top-nav-hidden .nav-container ul li a.active').removeClass('active');
						$('.top-nav-hidden .nav-container ul li a').eq(i).addClass('active');
						$('.mobile-dropdown-content li a.activeMb').removeClass('activeMb');
						$('.mobile-dropdown-content li a').eq(i).addClass('activeMb');
					}
				});
		
			} else {
				$('.top-nav-hidden .nav-container ul li a.active').removeClass('active');
				$('.mobile-dropdown-content li a:first').eq(i).addClass('activeMb');
			}
			
			if ($('#contact').position().top <= currentPosition + 380 && isMobile == false) {
				$('.top-nav-hidden .nav-container ul li a.active').removeClass('active');
				$('.mobile-dropdown-content li a.activeMb').removeClass('activeMb');
				$('.contact a').addClass('active');
				$('.contactMb a').addClass('activeMb');
			}if ($('#contact').position().top <= currentPosition + 600 && isMobile == true) {
				$('.top-nav-hidden .nav-container ul li a.active').removeClass('active');
				$('.mobile-dropdown-content li a.activeMb').removeClass('activeMb');
				$('.contact a').addClass('active');
				$('.contactMb a').addClass('activeMb');
			}
			
			if ($('#blog').position().top <= currentPosition +475 && isMobile == false) {
				setTimeout(function() {
				   $('#blog .blog-left').addClass('fadeFromLeft');
				   $("#blog .blog-left").css({ visibility: "visible" });
				   $('#blog .blog-right').addClass('fadeFromRight');
				   $("#blog .blog-right").css({ visibility: "visible" });
			   }, 80);
			}  if ($('#about').position().top <= currentPosition +525 && isMobile == false) {
				setTimeout(function() {
				   $('#about .about-left').addClass('fadeFromLeft');
				   $("#about .about-left").css({ visibility: "visible" });
				   $('#about .about-right').addClass('fadeFromRight');
				   $("#about .about-right").css({ visibility: "visible" });
			   }, 80);
			}  if ($('#contact').position().top <= currentPosition +630 && isMobile == false) {
				setTimeout(function() {
				   $('#contact .contact-left').addClass('fadeFromLeft');
				   $("#contact .contact-left").css({ visibility: "visible" });
			   }, 80);
			}
        });
		
		if(isMobile){
			$(".animate-slide").css({ visibility: "visible" });
		}
		
		if ($('#blog').position().top <= $(window).scrollTop() + 475 && isMobile == false) {
			setTimeout(function() {
			   $('#blog .blog-left').addClass('fadeFromLeft');
			   $("#blog .blog-left").css({ visibility: "visible" });
			   $('#blog .blog-right').addClass('fadeFromRight');
			   $("#blog .blog-right").css({ visibility: "visible" });
		   }, 80);
		}  if ($('#about').position().top <= $(window).scrollTop() + 525 && isMobile == false) {
			setTimeout(function() {
			   $('#about .about-left').addClass('fadeFromLeft');
			   $("#about .about-left").css({ visibility: "visible" });
			   $('#about .about-right').addClass('fadeFromRight');
			   $("#about .about-right").css({ visibility: "visible" });
		   }, 80);
		} if ($('#contact').position().top <= $(window).scrollTop() + 630 && isMobile == false) {
			setTimeout(function() {
			   $('#contact .contact-left').addClass('fadeFromLeft');
			   $("#contact .contact-left").css({ visibility: "visible" });
		   }, 80);
		}
		
		$("body").css("overflow", "hidden");
		
		var hasContent = false;
		$(".mobile-menu").click(function(){	
			if(hasContent == false){
				$(".mobile-dropdown-content").fadeIn(150);
				hasContent = true;
			}else if(hasContent == true){
				$(".mobile-dropdown-content").fadeOut(150);
				hasContent = false;
			}
		});
		
	    $(".top-nav .nav-container ul li a").click(function(event) {
			event.preventDefault();
        	$('html,body').animate( { scrollTop:$(this.hash).offset().top - 68 } , 700);
		});
		 
	    $(".top-nav-hidden .nav-container ul li a").click(function(event) {
	    	event.preventDefault();
        	$('html,body').animate( { scrollTop:$(this.hash).offset().top - 68 } , 700);
		});
		
		$(".top-logo a").click(function(event) {
	    	event.preventDefault();
        	$('html,body').animate( { scrollTop:$(this.hash).offset().top - 68 } , 700);
		});
		
		$(".top-button a").click(function(event) {
	    	event.preventDefault();
        	$('html,body').animate( { scrollTop:$(this.hash).offset().top - 68 } , 700);
		});
		 
		$(".mobile-dropdown-content li a").click(function(event) {
	    	event.preventDefault();
        	$('html,body').animate( { scrollTop:$(this.hash).offset().top - 68 } , 700);
		});
		 
		$(".arrow a").click(function(event) {
			event.preventDefault();
      	    $('html,body').animate( { scrollTop:$(this.hash).offset().top - 68 } , 700);
		});
		 
    });

	
})(jQuery);

