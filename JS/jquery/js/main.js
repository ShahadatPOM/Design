$(function(){
	$('.hidebtn').click(function(){
		$('h1').hide('slow');
	});

	$('.showbtn').click(function() {
		$('h1').show('slow');
	});

	$('.tgl').click(function(){
		$('h1').toggle(2000);
	});

	$('.all').click(function(){
		$('h1').html("yo all work together").addClass('css').toggle(3000);
	});

// scrollTop
	$('.topbtn').click(function(){
		$("html,body").animate({
			scrollTop : 0
		}, 3000);
	});



	// pixel distance
	var distance = $('.topbtn').offset().top;

	 $(window).on('scroll', function(){
	 	var scrolling = $(this).scrollTop();
	});

	 $(window).on('scroll', function(){
	 	var scroll = $(this).scrollTop();

	 	if(scroll >= 300){
	 		$('.topbtn').fadeIn();
	 	}
	 	else
	 		$('.topbtn').fadeOut();
	 });

	 
	 		var distance = $('.menu').offset().top;
	 		
	 		$(window).on('scroll', function(){
	 			var scroll = $(this).scrollTop();

	 			if(scroll >= distance){
	 				$('.menu').addClass('menucss');
	 			}
	 			else
	 			$('.menu').removeClass('menucss');
	 		});
	

});