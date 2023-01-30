$('.team-carousel').slick({
	mobileFirst: true,
	autoplay: true,
	arrows: false,
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 767,
			settings: { slidesToShow: 3 },
		},
		{
			breakpoint: 992,
			settings: { slidesToShow: 3 },
		},
	],
})
