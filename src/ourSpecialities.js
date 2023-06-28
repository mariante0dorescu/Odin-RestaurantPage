import antipasto from './assets/antipasto.jpg'
import formaggi from './assets/formaggi.jpg'
import gamberoni from './assets/gamberoni.jpg'
import diavola from './assets/diavola.jpg'
import capriciosa from './assets/capriciosa.jpg'
import messicana from './assets/messicana.jpg'
import dolce from './assets/dolce.jpg'
import gelato from './assets/gelato.jpg'
import tortino from './assets/tortino.jpg'

const menu = {
  starters: [
    {
      name: "antipasto di mare",
      imageName: antipasto,
      price: 100,
      ingredients: 'shrimps, octopus, baby calamary, salad mix, bread',
      },
      {
        name: "formaggi misti",
        imageName: formaggi,
        price: 200,
        ingredients: 'italian chees selection',
      },
      {
        name: "gamberoni al burro e caperi",
        imageName: gamberoni,
        price: 150,
        ingredients: 'italian chees selection',
      },
  ],
  pizza:[
    {
      name: 'diavola',
      imageName: diavola,
      price: 100,
      ingredients: 'shrimps, octopus, baby calamary, salad mix, bread',
      },
      {
       name: 'capriciosa',
        imageName: capriciosa,
        price: 200,
        ingredients: 'italian chees selection',
      },
     {
       name: "messicana",
        imageName: messicana,
        price: 150,
        ingredients: 'italian chees selection',
      },
  ],
  desert:[
    {
      name: 'dolce italiano',
      imageName: dolce,
      price: 100,
      ingredients: 'cannoli siciliani, panna cotta al cafe',
      },
      {
       name: 'gelato fatto in casa',
        imageName: gelato,
        price: 200,
        ingredients: 'fresh homemade icecream selection',
      },
     {
       name: "tortino caldo al duetto di ciocolato",
        imageName: tortino,
        price: 150,
        ingredients: 'white and black chocolate warm cake, ice cream',
      },
  ]
}

export default function ourSpecialities () {

  const main = document.querySelector('.main').querySelector('.container');
  main.innerHTML = "";

  const sectionTitle = document.createElement('h1');
  sectionTitle.classList.add('section__title')
  sectionTitle.innerText = 'our specialities';

  main.appendChild(sectionTitle);

  for(const section of Object.keys(menu) ){
    const foodsection = createSections(section);
    
    for(const plate of Object.keys(menu[section])){
      const foodCard = createfoodCard(menu[section][plate]);
      foodsection.appendChild(foodCard)
    }

    main.appendChild(foodsection);
  }
  return main
}

function createSections(category) {
  const section = document.createElement('section');
  section.classList.add('food__section');
  const sectionName = document.createElement('h2');
  sectionName.classList.add('food__section--title')
  sectionName.innerText = category;
  section.appendChild(sectionName);
  return section;
}

function createfoodCard(object) {
  const card = document.createElement('div');
  card.classList.add('food__section--card');

  const foodImage = document.createElement('div');
  foodImage.classList.add('food-image');

  const foodImageSrc = new Image();  
  foodImageSrc.src = object.imageName;
  foodImage.appendChild(foodImageSrc)
  card.appendChild(foodImage);
  
  const foodName = document.createElement('h3');
  foodName.classList.add('food-name');
  foodName.innerText = object.name;
  card.appendChild(foodName);

  const foodIngredients = document.createElement('p');
  foodIngredients.classList.add("food-description");
  foodIngredients.innerText = object.ingredients;
  card.appendChild(foodIngredients);

  const foodPrice = document.createElement('h4');
  foodPrice.classList.add('food-price');
  foodPrice.innerText = object.price + " euro";
  card.appendChild(foodPrice);

  return card;
}