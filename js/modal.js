// Captura de selectores/
const closeDrink = $('.close-drink');
const modalDrink = $('.modal-drink');
const modalContainerDrink = $('.modal-container-drink');
const closeFood = $('.close-food');
const modalFood = $('.modal-food');
const modalContainerFood = $('.modal-container-food');

//! Modal bebidas
for (let i = 0; i < btnDrinks.length; i++) {
    btnDrinks[i].onclick = e => {
        e.preventDefault();
        modalContainerDrink[i].style.opacity = "1";
        modalContainerDrink[i].style.visibility = "visible";
        modalDrink[i].classList.toggle('modal-close-drink')
    }
};

for (let i = 0; i < closeDrink.length; i++) {
    closeDrink[i].onclick = () => {
        modalDrink[i].classList.toggle('modal-close-drink');
        setTimeout(() => {
            modalContainerDrink[i].style.opacity = "0";
            modalContainerDrink[i].style.visibility = "hidden";
        }, 800);
    };
};
    window.addEventListener('click', e => {
        for (let i = 0; i < modalContainerDrink.length; i++) {
            if (e.target == modalContainerDrink[i]) {
                modalDrink[i].classList.toggle('modal-close-drink');
                setTimeout(() => {
                    modalContainerDrink[i].style.opacity = "0";
                    modalContainerDrink[i].style.visibility = "hidden";
                }, 800);
            }
        }
    });

    
//! Modal comidas
for (let i = 0; i < btnFoods.length; i++) {
    btnFoods[i].onclick = e => {
        e.preventDefault();
        modalContainerFood[i].style.opacity = "1";
        modalContainerFood[i].style.visibility = "visible";
        modalFood[i].classList.toggle('modal-close-food')
    }
};

for (let i = 0; i < closeFood.length; i++) {
    closeFood[i].onclick = () => {
        modalFood[i].classList.toggle('modal-close-food');
        setTimeout(() => {
            modalContainerFood[i].style.opacity = "0";
            modalContainerFood[i].style.visibility = "hidden";
        }, 800);
    };
};
    window.addEventListener('click', e => {
        for (let i = 0; i < modalContainerFood.length; i++) {
            if (e.target == modalContainerFood[i]) {
                modalFood[i].classList.toggle('modal-close-food');
                setTimeout(() => {
                    modalContainerFood[i].style.opacity = "0";
                    modalContainerFood[i].style.visibility = "hidden";
                }, 800);
            }
        }
    });