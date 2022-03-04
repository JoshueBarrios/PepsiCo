//! clase
class Products {
    constructor (id, category, name, description, ingredients, price, quantity, img, css) {
        this.id = id,
        this.category = category;
        this.name = name,
        this.description = description,
        this.ingredients = ingredients,
        this.price = price,
        this.quantity = quantity,
        this.img = img,
        this.css = css
        this.stock = false
    }

    withStock () {
        this.stock = true;
    }
};

//! Array bebidas vacio
const drinks = [];
//! Array comidas vacio
const foods = [];

//! Bebidas
const pepsiCola = new Products (1, 'bebidas', 'Pepsi Cola', 'Pepsi la cola audaz, refrescante y robusta', 'Agua carbonatada, alta fructosa, jarabe de maíz, caramelo color azúcar, ácido fosfórico, cafeína, ácido cítrico, sabor natural.', 270, 0, './img/drinks/pepsi-cola.png', 'color-fondo1');

const pepsiCeroSugar = new Products (2, 'bebidas', 'Pepsi Cero Sugar', '¡Pepsi Zero Sugar es el único refresco con cero calorías y el máximo sabor a Pepsi!', 'Agua carbonatada, color caramelo, ácido fosfórico, aspartamo, benzoato de potasio, cafeína, sabor natural.', 330, 40, './img/drinks/pepsi-zero-sugar.png', 'color-fondo2');

const pepsiDiet = new Products (3, 'bebidas', 'Diet Pepsi', 'Con su sabor ligero y crujiente, Diet Pepsi le brinda todo el refrigerio que necesita, con cero azúcar.', 'Agua carbonatada, color caramelo, aspartamo, ácido fosfórico, benzoato de potasio, cafeína, ácido cítrico.', 265, 30, './img/drinks/Diet-Pepsi.png',  'color-fondo3');


const pepsiMango = new Products (4, 'bebidas','Pepsi Mango', 'Un chorrito de delicioso jugo de mango combinado con la audaz y refrescante Pepsi que conoces y amas.', 'Agua carbonatada, jarabe de maíz con alto contenido de fructosa, concentrado de zumo de mango.', 270, 0, './img/drinks/pepsi-mango.png', 'color-fondo4');

const pepsiMangoCeroSugar = new Products (5, 'bebidas', 'Pepsi Mango Cero Sugar', 'Eabor a mango agrega una dimensión audaz y refrescante a Pepsi Zero Sugar.', 'Agua carbonatada, color caramelo, ácido fosfórico, aspartamo, sabor natural, cafeína, sorbato de potasio.', 300, 35, './img/drinks/pepsi-zero-sugar-mango.png', 'color-fondo5');

const pepsiWildCherry = new Products (6, 'bebidas', 'Pepsi Wild Cherry', '¡Solo Wild Cherry Pepsi tiene la excitante explosión del sabor de cereza único y un sabor dulce y crujiente!', 'Agua carbonatada, jarabe de maíz con alto contenido de fructosa, color caramelo, azucar, ácido fosfórico.', 275, 35, './img/drinks/pepsi-cherry.png', 'color-fondo6');

const pepsiDietWildCherry = new Products (7, 'bebidas', 'Diet Pepsi Wild Cherry', '¡Solo Wild Cherry Pepsi tiene la excitante explosión del sabor de cereza único y un sabor dulce y crujiente!', 'Agua carbonatada, color caramelo, ácido fosfórico, sabor natural, benzoato de potasio.', 300, 40, './img/drinks/Diet-Pepsi-Cherry.png', 'color-fondo7');

const pepsiCeroSugarWildCherry = new Products (8, 'bebidas', 'Pepsi Cero Sugar Wild Cherry', 'Intenso sabor a cereza silvestre agrega una dimensión emocionante a Pepsi Zero Sugar Wild Cherry.', 'Agua carbonatada, sabor natural, aspartamo, cafeína, sorbato de potasio.', 325, 45, './img/drinks/Pepsi-Zero-Wild-Cherry.png', 'color-fondo8');

const pepsiRealSugar = new Products (9, 'bebidas', 'Pepsi Real Sugar', 'Una refrescante experiencia de cola de gran sabor, hecha con azúcar real.', 'Agua carbonatada, azúcar, color caramelo, ácido fosfórico, sabor natural', 345, 37, './img/drinks/pepsi-real-sugar.png', 'color-fondo9');

const pepsiCaffeineFree = new Products (10, 'bebidas', 'Pepsi Cafeina Free', 'Pepsi sin cafeína: gran sabor a Pepsi sin cafeína.', 'Agua carbonatada, jarabe de maíz con alto contenido de fructosa, color caramelo, azucar, ácido fosfórico, ácido cítrico, sabor natural', 305, 15, './img/drinks/pepsi-caffeine-free.png', 'color-fondo10');

const pepsiDietCaffeineFree = new Products (11, 'bebidas', 'Pepsi Diet Cafeina Free', 'Diet Pepsi le brinda todo el refrigerio que necesita, con cero azúcar, cero calorías y cero carbohidratos.', 'Agua carbonatada, color caramelo, ácido fosfórico,  benzoato de potasio, sorbato de potasio.', 295, 15, './img/drinks/Diet-Pepsi-CaffFree.png', 'color-fondo11');

//! Comidas
const lays = new Products (12, 'food', 'Lays', 'Las patatas Lay’s! Son de gran calidad, crujientes e irresistiblemente deliciosas.', 'Copos de patata (49%), aceite de girasol, almidón (de trigo), jarabe de glucosa, sal, emulsionante.', 350, 50, './img/foods/lays.png', 'color-fondo-comida1');

const doritos = new Products (13, 'food', 'Doritos', 'Doritos® es la marca de tortilla chips, un aperitivo hecho de maíz con forma de nacho.', 'Maíz, aceites vegetales, condimento preparado con sabor a queso (suero de leche en polvo).', 370, 0, './img/foods/doritos.png', 'color-fondo-comida2');

const cheetos = new Products (14, 'food', 'Cheetos', 'Divertidos snacks de maíz, cada uno con su exclusiva forma e irresistible sabor.', 'Sémola y harina de maíz (43%), aceites vegetales (girasol y maíz en proporciones variables), copos de patata (15%).', 310, 33, './img/foods/cheetos.png', 'color-fondo-comida3');

const sunbites = new Products (15, 'food', 'Sunbites', 'Ligero y crujiente snack de multicereales con mezcla de maíz, trigo y avena.', 'Cereales integrales (84%) (maíz integral, trigo integral, harina de arroz integral.', 210, 27, './img/foods/sunbites.png', 'color-fondo-comida4');

const ruffles = new Products (16, 'food', 'ruffles', 'Son las onduladas por excelencia, tan crujientes como siempre y con todo el sabor.', 'Patatas, aceites vegetales (maíz y girasol en proporciones variables), sal.', 180, 14, './img/foods/ruffles.png', 'color-fondo-comida5');

const quakerCruesli = new Products (17, 'food', 'quaker cruesli', 'Para empezar el día con energía y disfrutando del desayuno. Todos sus products contienen avena 100% integral siendo fuente de fibra, vitaminas y minerales.', '100% copos de avena integral.', 200, 36, './img/foods/quaker.png', 'color-fondo-comida6');

const matutano = new Products (18, 'food', 'matutano', 'Es una de las marcas más emblemáticas de nuestro país y ya cuenta con más de 40 años de historia.', 'aceites vegetales, sustancias aromatizantes, potenciadores del sabor.', 250, 70, './img/foods/ilforno.png', 'color-fondo-comida7.');

const santaAna = new Products (19, 'food', 'santa ana', 'Churrería Santa Ana es nuestra marca más tradicional y de origen local. Sus patatas fritas están elaboradas con ingredientes sencillos de gran calidad.', 'Patatas, aceites vegetales , sal.', 1800, 21, './img/foods/santaana.png', 'color-fondo-comida8');


const chipicao = new Products (20, 'food', 'chipicao', 'Deliciosos bollos y croissants hechos al horno.', 'Harina de trigo (40%), leche desnatada en polvo reconstituida (30%), aceite de palma, agua, cacao desgrasado en polvo (7%).', 200, 36, './img/foods/3dminichocolate.png', 'color-fondo-comida9');

//! Incorporando las bebidas al array vacio
drinks.push(pepsiCola, pepsiCeroSugar, pepsiDiet, pepsiMango, pepsiMangoCeroSugar, pepsiWildCherry, pepsiDietWildCherry, pepsiCeroSugarWildCherry, pepsiRealSugar, pepsiCaffeineFree, pepsiDietCaffeineFree);

//! Incorporando las comidas al array vacio
foods.push(lays, doritos, cheetos, sunbites, ruffles, quakerCruesli, matutano, santaAna, chipicao);

//? Recorre el array bebidas y verifica si hay stock de cada uno
for (let i = 0; i < drinks.length; i++) {
    if (drinks[i].quantity > 0) {
        drinks[i].withStock();
    };
};

//? Recorre el array comidas y verifica si hay stock de cada uno
for (let i = 0; i < foods.length; i++) {
    if (foods[i].quantity > 0) {
        foods[i].withStock();
    };
};