window.onload = () => {
    clearLocalStorageForm ()
}

const alertBuyProducts = document.querySelector('.buy');
const firstName = document.getElementById('name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const telephone = document.getElementById('telephone');
const street = document.getElementById('street');
const floor = document.getElementById('floor');
const flat = document.getElementById('flat');

firstName.value.toUpperCase()

//* Alerta al cliente que su compra fue realizada con éxito o si falta campos por rellenar.
    alertBuyProducts.addEventListener('click', e => {
        e.preventDefault();
        if (firstName.value != '' && lastName.value != '' && email.value != '' && street.value != '' && floor.value != '' && flat.value != '') {
            Swal.fire({
                icon: 'success',
                title: '¡Thanks for the purchase! ⭐',
            });
            firstName.value = '';
            lastName.value = '';
            email.value = '';
            telephone.value = '';
            street.value = '';
            floor.value = '';
            flat.value = '';
            clearLocalStorageForm ();
            cartEmpty()
            
        } else {
            Swal.fire({
                icon: 'warning',
                title: 'There are empty fields 😥',
            });
        };
    });

    // Limpia el localStorage luego de finalizar correctamente la compra.
    function clearLocalStorageForm () {
        localStorage.clear()
        productsShowInCartIcon(getStorage())
    }


