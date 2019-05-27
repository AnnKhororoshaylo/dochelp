$(document).ready(function() {
	var owl_one = $(".owl-carousel.owl-one");
	var owl_two = $(".owl-carousel.owl-two");
	$('.owl-one').owlCarousel ({
		items : 1,
		margin: 10,
		loop: true,
   		nav: true,
   		responsive: {
	      320: {
	        items: 1
	      }
	    }
	});
	$('.owl-two').owlCarousel ({
		items : 1,
		margin: 10,
		loop: true,
   		nav: true,
   		responsive: {
	       320: {
	        items: 1
	       },
	       768: {
	        items: 2
	       }
	    }
	});
	owl_one.on("mousewheel", ".owl-wrapper", function (e) {
		if (e.deltaY > 0) {
			owl.trigger("owl-one.prev");
		} else {
			owl.trigger("owl-one.next");
		}
		e.preventDefault();
	});
	owl_two.on("mousewheel", ".owl-wrapper", function (e) {
		if (e.deltaY > 0) {
			owl.trigger("owl-two.prev");
		} else {
			owl.trigger("owl-two.next");
		}
		e.preventDefault();
	});
	$(".next_button_one").click(function(){
	    owl_one.trigger("next.owl.carousel");
	});
	$(".prev_button_one").click(function(){
	    owl_one.trigger("prev.owl.carousel");
	});
	$(".next_button_two").click(function(){
	    owl_two.trigger("next.owl.carousel");
	});
	$(".prev_button_two").click(function(){
	    owl_two.trigger("prev.owl.carousel");
	});


	$(".menu_button").click(function() {
		$(".menu1 ul").slideToggle();
	});
});
$(function() {
 
$(window).scroll(function() {
 
if($(this).scrollTop() != 0) {
 
$('#toTop').fadeIn();
 
} else {
 
$('#toTop').fadeOut();
 
}
 
});
 
$('#toTop').click(function() {
 
$('body,html').animate({scrollTop:0},10);
 
});
 
});