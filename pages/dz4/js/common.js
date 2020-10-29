$(document).ready(function() {
	//Каруселька
	//Документация: http://owlgraphic.com/owlcarousel/
	var owl = $(".our-projects_owl-carousel");
	owl.owlCarousel ({
		items : 2,
		nav: false,
		pagination: false,
		loop: true,
    	margin: 30
	});
	owl.on("mousewheel", ".owl-wrapper", function (e) {
		if (e.deltaY > 0) {
			owl.trigger("owl.prev");
		} else {
			owl.trigger("owl.next");
		}
		e.preventDefault();
	});
	$(".our-projects_next-button").click(function(){
	    owl.trigger("next.owl.carousel");
	});
	 
	$(".our-projects_prev-button").click(function(){
	    owl.trigger("prev.owl.carousel");
	});

	var owl1 = $(".rent_owl-carousel");
	owl1.owlCarousel ({
		items : 1,
		nav: false,
		pagination: false,
		loop: true,
    	margin: 30
	});
	owl1.on("mousewheel", ".owl-wrapper", function (e) {
		if (e.deltaY > 0) {
			owl.trigger("owl.prev");
		} else {
			owl.trigger("owl.next");
		}
		e.preventDefault();
	});
	$(".rent_next-button").click(function(){
	    owl1.trigger("next.owl.carousel");
	});
	 
	$(".rent_prev-button").click(function(){
	    owl1.trigger("prev.owl.carousel");
	});
});