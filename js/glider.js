// Carrusel generado por la libreria Glider
window.addEventListener('load', function(){
	new Glider(document.querySelector('.carrusel-items'), {
		slidesToShow: 1,
		slidesToScroll: 1,
    draggable: true,
		dots: '.carrusel-indicators',
		arrows: {
			prev: '.carrusel-left',
			next: '.carrusel-right'
		},
		responsive: [
			{
			  // screens greater than >= 775px
			  breakpoint: 450,
			  settings: {
				// Set to `auto` and provide item width to adjust to viewport
				slidesToShow: 2,
				slidesToScroll: 1
			  }
			},{
			  // screens greater than >= 1024px
			  breakpoint: 800,
			  settings: {
				slidesToShow: 3,
				slidesToScroll: 1
			  }
			}
		]
	});
});