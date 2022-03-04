
$('#first-section').addClass('first-section')
let slogan = document.createElement('p');
$('#first-section').append(slogan);
$(slogan).append('<h2>#ForTheLoveOfIt?</h2> <h3>#ThatsWhatIlike</h3>');

//! Segunda seccion.
//? Se captura el ID del nodo en donde se quiere crear el nuevo elemento.
//! Sin jQuery
const secondSection = document.getElementById('second-section');

//? Se agrega una clase al nodo, en donde se encuetra el ID capturado.
// secondSection.className = 'second-section';
// let carruselContainer = document.createElement('div');
// carruselContainer.className = 'box';
// secondSection.appendChild(carruselContainer);


//! Con jQuery
// $('#second-section').addClass('second-section');
// let carruselContainer = document.createElement('div');
// $(carruselContainer).addClass('box');
// $('#second-section').append(carruselContainer);

//* Carrusel GLider
secondSection.innerHTML = `
<h3>Lo más vendido</h3>
<div class="carrusel">
<div class="carrusel-container">
    <button aria-label="Anterior" class="carrusel-left">
        <i class="fas fa-chevron-left"></i>
    </button>
    <div class="carrusel-items" id="carrusel-items">  
    </div>
    <button aria-label="Siguiente" class="carrusel-right">
        <i class="fas fa-chevron-right"></i>
    </button>
</div>
<div role="tablist" class="carrusel-indicators"></div>
</div>
</div>`;


const carrusel = document.getElementById('carrusel-items');

function renderCarrusel(productsCarrusel, element) {
    for (let i = 0; i < productsCarrusel.length; i+=2) {
        element.innerHTML += `
        <div class="carrusel-item products">
            <img class="product-img" src="${productsCarrusel[i].img}" alt="${productsCarrusel[i].name}">
            <h2 class="product-name-carrusel product-name">${productsCarrusel[i].name}</h2>
            <span class="product-price-carrusel product-price">$${productsCarrusel[i].price}</span>
            <button class="btn-carrusel add-product-cart" id="${productsCarrusel[i].id}">comprar</button>
            </div>`;
    }
}


//! Tercera seccion.
//* Se captura el ID del nodo en donde se quiere crear el nuevo elemento.
//! Sin jQuery
// const thirdSection = document.getElementById('third-section');

//* Se agrega una clase al nodo, en donde se encuetra el ID capturado.
// thirdSection.className = 'third-section';

//! Con jQuery
$('#third-section').addClass('third-section');

//! Cuarta seccion.
//? Se captura el ID del nodo en donde se quiere crear el nuevo elemento.
//! Sin jQuery
// const fourthSection = document.getElementById('fourth-section');

//? Secrea un elemento 'div'.
// let divProducts = document.createElement('div');

//? Se agrega clases y ID al elemento creado.
// $divProducts.className = 'container d-flex flex-wrap justify-content-center';
// $divProducts.id = 'containerProducts';

//? Se especifica el nodo del cual será hijo el elemento creado.
// fourthSection.appendChild(divProducts);

//? Se agrega una clase al nodo, en donde se encuetra el ID capturado.
// fourthSection.className = 'fourth-section';


//? Se crea un elemento 'div' y se le agrega una clase.
// let btnsProducts = document.createElement('div');
// btnsProducts.className = 'btns-container';


//? Se agrega código HTML dentro del 'div' creado.
// btnsProducts.innerHTML = '<button class="btns" category="drinks">Bebidas</button><button class="btns" category="foods">Comidas</button>';
//? Se inserta 'btnsProducts' después de la etiqueta de apertura de 'fourthSection'.
// fourthSection.insertAdjacentElement("afterbegin", btnsProducts);
//! Con jQuery
$('#fourth-section').addClass('fourth-section');
let divProducts = document.createElement('div');
$(divProducts).addClass('container d-flex flex-wrap justify-content-center');
$(divProducts).attr('id', 'containerProducts');
$('#fourth-section').append(divProducts);
let btnsProducts = document.createElement('div');
$(btnsProducts).addClass('btns-container');
$(btnsProducts).html('<button class="btns" category="drinks">Bebidas</button><button class="btns" category="foods">Comidas</button>');
$('#fourth-section').prepend(btnsProducts);

//! Sin jQuery
//* Captura de id
const cards = document.getElementById('containerProducts');

//* Genera una card por cada bebida del array
function renderDrinks(drinks, element) {
    for (const drink of drinks) {
        element.innerHTML += `
        <div class="card m-4 products-card drinks-card ${drink.css}" id="${drink.id}" category="drinks" style="width: 18rem;">
            <img src="${drink.img}" class="card-img-top img-drinks" alt="${drink.name}">
            <div class="card-body">
                <h5 class="card-title product-name-card">${drink.name}</h5>
                <div class="btns-container-details">
                <button class="btn-drinks"><a href="#" class="btn-details">más detalles</a></button>
                </div>
            </div>
        </div>
        <div class="modal-container-drink">
                <div class="products modal-drink modal-close-drink">
                    <p class="close-drink">X</p>
                    <img class="product-img" src="${drink.img}" alt="">
                    <div class="modal-drink-texts">
                        <h2 class="drink-name product-name">${drink.name}</h2>
                        <p class="drink-description">${drink.description}</p>
                        <h3>Ingredientes</h3>
                        <p>${drink.ingredients}</p>
                        <h4>precio</h4>
                        <p class="drink-price product-price">$${drink.price}</p>
                        <button class="buy-product-drink add-product-cart" id="${drink.id}">comprar</button>
                    </div>
                </div>
            </div>`;
    }
}

//* Genera una card por cada comida del array
function renderFoods(foods, element) {
    for (const food of foods) {
        element.innerHTML += `
        <div class="card m-4 products-card foods-card ${food.css}" id="${food.id}" category="foods" style="width: 18rem;">
            <img src="${food.img}" class="card-img-top img-foods" alt="${food.name}">
            <div class="card-body">
                <h5 class="card-title product-name-card">${food.name}</h5>
                <div class="btns-container-details">
                <button class="btn-foods"><a href="#" class="btn-details">más detalles</a></button>
                </div>
            </div>
        </div>
        <div class="modal-container-food">
                <div class="products modal-food modal-close-food">
                    <p class="close-food">X</p>
                    <img class="product-img" src="${food.img}" alt="">
                    <div class="modal-food-texts">
                        <h2 class="food-name product-name">${food.name}</h2>
                        <p class="food-description">${food.description}</p>
                        <h3>Ingredientes</h3>
                        <p>${food.ingredients}</p>
                        <h4>precio</h4>
                        <p class="food-price product-price">$${food.price}</p>
                        <button class="buy-product-food add-product-cart" id="${food.id}">comprar</button>
                    </div>
                </div>
            </div>`;
    }
}
renderCarrusel(drinks, carrusel);
renderDrinks(drinks, cards);
renderFoods(foods, cards);
