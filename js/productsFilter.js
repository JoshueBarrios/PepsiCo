// Se agrega clases al boton activo.
//! Con jQuery
$('.btns[category="drinks"]').addClass('btn-filter-active');

// Por defecto se muestra primeramente las cards de bebidas.
$('.products-card[category="foods"]').hide();

// Evento que filtra segun se haga click en el boton del producto que prefiera.
$('.btns').click(function () {
    let catProduct = $(this).attr('category');
    // Saca clase al boton deseleccionado
    $('.btns').removeClass('btn-filter-active');
    // Agregar clase al boton seleccionado.
    $(this).addClass('btn-filter-active');
    // Ocultando productos con animacion.
    $('.products-card').css('clip-path', 'circle(0% at center)');
    function hideProducts() {
        $('.products-card').hide();        
    } setTimeout(hideProducts, 600);
    // Muestra los productos que coincida con la categoria asignada al boton con animacion.
    function showProducts() {       
        $('.products-card[category="'+catProduct+'"]').show();
        $('.products-card[category="'+catProduct+'"]').css('clip-path', 'circle(150% at center)')
    } setTimeout(showProducts, 600);
})