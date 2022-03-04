// Concatenacion de los arrays de productos.
let products = drinks.concat(foods);

// Captura de todos los botones de lo que se puede comprar.
const addProductsToCart = document.getElementsByClassName('add-product-cart');

// Captura de todos los botones de lo que se puede eliminar en el carrito.
const alertDeleteProductOfCart = document.getElementsByClassName('eliminate-product');

//! Offcanvas del carrito de compras
const canvasCart = document.getElementsByClassName('cart-shop');
canvasCart[0].insertAdjacentHTML('afterend', `
<div class="offcanvas offcanvas-end" tabindex="-1" id="cart-shop" aria-labelledby="offcanvasRightLabel">
    <div class="offcanvas-header">
        <h5 class="cart-title" id="offcanvasRightLabel">carrito de compras</h5>
        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body" id="cart-body">
    
    </div>
    <div class="container-totals">
        <p>cant. de productos: <span class="total-products">0</span></p>
        <p>total a pagar: $ <span class="total-price">0</span></p>
    </div>
    <div class="container-buttons">
    <button class="reset-cart">Eliminar Carrito</button>
    <a href="./form-buy.html"><button class="finish-buy">Finalizar Compra</button></a>
    </div>
</div>`);

// Evento de captura de todos los productos que devuelve el id de cada producto.
function captureBtnAdd() {
    for (const boton of addProductsToCart) {
        boton.addEventListener('click', e => {
            pushProductsToLocalStorage(e.target.id)
        });
    };
};

captureBtnAdd();

// Funcion que agrega el array al localStorage.
function setStorage(array) {
    localStorage.setItem('Cart', JSON.stringify(array));
};

// Funcion que tiene una asignacion condicional, se asigna el localStorage si existe o sino un array vacio.
function getStorage() {
   return JSON.parse(localStorage.getItem('Cart')) || [];
};

// Se genera los productos del carrito.
function renderShoppingCart(array, etiqueta) {
     etiqueta.html ("");
    for (const product of array) {
        // totalCompra += product.price * product.quantity;
        etiqueta.append(`
        <div class="product-push" id="${product.id}">
            <img class="product-cart-img" src=${product.img} alt="">
            <div class="product-cart-text">
                <p class="product-cart-name">${product.name}</p>
                <p class="product-cart-price">$ ${product.price}</p>
                <div class="product-interaction">
                <i id="btnDecrease${product.id}" class="minus fas fa-minus-square"></i>
                    <p id="quantity${product.id}" class="product-quantity">${product.quantity}</p>
                    <i id="btnIncrease${product.id}" class="more fas fa-plus-square"></i>
                </div>
                <a href="#" id="btnEliminate${product.id}" class="eliminate-product text-decoration-none d-flex justify-content-center">eliminar producto</a>
            </div>
        </div>`);

        /* Captura el evento click en el boton 'Eliminar producto' y luego elimina el producto seleccionado, ademas de actualizar la cantidad y el precio total del carrito */
        $(`#btnEliminate${product.id}`).on('click', e => {
            e.preventDefault();
            eliminateProductInLocalStorage(product.id);
            totalProducts(getStorage());
            totalPrice(getStorage());
            productsShowInCartIcon(getStorage())
        });
        // Efecto hover
        $(`#btnEliminate${product.id}`).on('mouseover', () => {
            $(`#btnEliminate${product.id}`).css({'color': '#C9002B',
            'transition': '0.3s'})
        })

        $(`#btnEliminate${product.id}`).on('mouseout', () => {
            $(`#btnEliminate${product.id}`).css('color', '#fff')
        })
        
        // Captura el evento click en el boton '-' y luego elimina un producto hasta que quede un producto
        $(`#btnDecrease${product.id}`).on('click', () => {
            if (product.quantity > 1) {
                product.quantity--
                setStorage(array);
                renderShoppingCart(array, etiqueta);
                totalProducts(getStorage());
                totalPrice(getStorage());
                productsShowInCartIcon(getStorage())
            }
        })

        // Efecto hover
        $(`#btnDecrease${product.id}`).on('mouseover', () => {
            $(`#btnDecrease${product.id}`).css({'color': '#C9002B',
            'transition': '0.3s'})
        })

        $(`#btnDecrease${product.id}`).on('mouseout', () => {
            $(`#btnDecrease${product.id}`).css('color', '#004b93')
        })
        
        // Captura el evento click en el boton '+' y luego suma el producto al carrito.
        $(`#btnIncrease${product.id}`).on('click', () => {
                product.quantity++
                setStorage(array);
                renderShoppingCart(array, etiqueta);
                totalProducts(getStorage());
                totalPrice(getStorage());
                productsShowInCartIcon(getStorage())
        });

        // Efecto hover
        $(`#btnIncrease${product.id}`).on('mouseover', () => {
            $(`#btnIncrease${product.id}`).css({'color': '#29bf12',
            'transition': '0.3s'})
        })
        
        $(`#btnIncrease${product.id}`).on('mouseout', () => {
            $(`#btnIncrease${product.id}`).css('color', '#004b93')
        })
//! Alerta al cliente que su producto seleccionado fue eliminado del carrito.(sweetAlert2)
for (const product of alertDeleteProductOfCart) {
    product.addEventListener('click', () => {
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-start',
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            },
          })
          
          Toast.fire({
            icon: 'error',
            title: 'Producto eliminado'
          })
    });
}
    };
};

// Funcion que recibe un id del producto seleccionado para agregarlo al localStorage.
function pushProductsToLocalStorage(id){ 
     const arrayCarrito = getStorage();
     // Busco dentro del array products el objeto cuya id coincida con el id capturado por el evento.
     const prodSelec = products.find(product => product.id === parseInt(id));
     const productCart = {id:prodSelec.id, img: prodSelec.img, name:prodSelec.name, price:prodSelec.price, quantity: 1};
     // Dentro de una variable se guarda el indice del producto si es que existe o no en el localSotrage.
     let index = arrayCarrito.findIndex(index => index.id === parseInt(id));
     // Condicional que agrega el producto seleccionado al arrayCarrito si todavia no esta en él o solo aumenta la cantidad de ya estar en el localStorage.
     index == -1 ? arrayCarrito.push(productCart) : arrayCarrito[index].quantity++;
     // Se guarda el array nuevo dentro del localStorage.
     setStorage(arrayCarrito);
     productsShowInCartIcon(arrayCarrito);
};

// Muestra los productos renderizados del carrito cuando se hace click en el icono del carrito que está en el header.
function showCart() {
    $("#cartIcon").on("click", ()=>{
        let containerCart= $("#cart-body");
        let cart = getStorage();
        renderShoppingCart(cart, containerCart);
        totalPrice(cart);
        totalProducts(cart);
        cartEmpty()
    });
};

showCart();

// Calcula el total de los productos comprados.
function totalPrice(array) {
    let totalPrice = 0;
    array.forEach(product => totalPrice += product.price * product.quantity);
    $('.total-price').html(totalPrice);
}

// Suma el total de los productos comprados.
function totalProducts(array) {
    let totalProducts = 0;
    array.forEach(product => totalProducts += product.quantity);
    $('.total-products').html(totalProducts);
}

// Muestra la cantidad de productos en el icono del carrito.
function productsShowInCartIcon(array) {
    let totalProducts = 0;
    array.forEach(product => totalProducts += product.quantity);
    $('.cart-quantity').html(totalProducts);
}

productsShowInCartIcon(getStorage());


// ELimina los productos del localStorage y del carrito.
function clearLocalStorage() {
    localStorage.clear();
    cartEmpty()
}

/* Al hacer click sobre el boton "ELIMINAR CARRITO" resetea los productos que hay en el localStorage, limpia el carrito de compras, vuelve a 0 la cantidad y el precio total, ademas de volver a 0 lo que se muestra en el icono del carrito.*/
function clearCart() {
    $('.reset-cart').on('click', () => {
    clearLocalStorage();
    $("#cart-body").html('');
    $('.total-price').html(0);
    $('.cart-quantity').html(0);
    $('.total-products').html(0);
    cartEmpty()
    });
};

clearCart();


//  Funcion que elimina el producto selecconado del carrito
function eliminateProductInLocalStorage(id) {
    const containerCart = $('#cart-body')
     let productsLocalStorage = JSON.parse(localStorage.getItem('Cart'));
     let productsLocalStorageFilter = productsLocalStorage.filter(product => product.id != id);
     setStorage(productsLocalStorageFilter);
     renderShoppingCart(productsLocalStorageFilter, containerCart);
     cartEmpty()
}

// Indica que el carrito está vacío cuando este no posee productos agregados.
function cartEmpty() {
    let containerCart= $("#cart-body");
    let cart = getStorage();
    if (cart == '') {
        containerCart.html(`
        <div class="empty-cart">
            <h4> ¡Carrito Vacio!</h4>
        </div>`)
    }
}