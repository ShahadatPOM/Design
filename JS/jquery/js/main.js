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

	$('.topbtn').click(function(){
		$("html,body").animate({
			scrollTop : 0
		}, 3000);
	});
});