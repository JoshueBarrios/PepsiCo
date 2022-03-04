//! Capturando clases
const drinksCard = $('.drinks-card');
const foodsCard = $('.foods-card');
const imgDrinks = $('.img-drinks');
const imgFoods = $('.img-foods');
const btnDrinks = $('.btn-drinks');
const btnFoods = $('.btn-foods');

//! Animación tarjeta bebidas
for (let i = 0; i < drinksCard.length; i++) {
    drinksCard[i].onmouseover = function () {
        imgDrinks[i].style.transform = "scale(1.2) translateY(-25px)";
        imgDrinks[i].style.transition = "all 0.5s";
        btnDrinks[i].style.transform = "translateY(-4px) rotateX(0deg)";
        btnDrinks[i].style.visibility = "visible";
        btnDrinks[i].style.transition = "all 0.5s";
    };
    
    drinksCard[i].onmouseout = function () {
        imgDrinks[i].style.transform = "scale(1) translateY(0)";
        btnDrinks[i].style.visibility = "hidden";
        btnDrinks[i].style.transform = "translateY(4px) rotateX(90deg)";
    };
}

//! Animación tarjeta comidas
for (let i = 0; i < foodsCard.length; i++) {
    foodsCard[i].onmouseover = function () {
        imgFoods[i].style.transform = "scale(1.2) translateY(-60px)";
        imgFoods[i].style.transition = "all 0.5s";
        btnFoods[i].style.transform = "translateY(-4px) rotateX(0deg)";
        btnFoods[i].style.visibility = "visible";
        btnFoods[i].style.transition = "all 0.5s";
    };
    
    foodsCard[i].onmouseout = function () {
        imgFoods[i].style.transform = "scale(1.0) translateY(0)";
        btnFoods[i].style.visibility = "hidden";
        btnFoods[i].style.transform = "translateY(4px) rotateX(90deg)";
    };
}