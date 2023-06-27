import farmImg from './assets/farm.jpg'
import foodImg from './assets/food.jpg'

export default function aboutUs () {

  const main = document.querySelector('.main').querySelector('.container');
  main.innerHTML = "";


  const sectionTop = document.createElement('section');
  sectionTop.classList.add('section__top');

  const sectionBottom = document.createElement('section');
  sectionBottom.classList.add('section__bottom');


  sectionTop.appendChild(createSectionImg('section__top--image', farmImg, 'Our Farm'));  
  sectionTop.appendChild(createSectionText('section__top', 'Enjoyable place for all the family', 'Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange a tour of the farm before your meal.'));
  
  sectionBottom.appendChild(createSectionText('section__top', 'The most locally sourced food', 'All our ingredients come directly from our farm or local fishery. So you can be sure that you\'re eating the freshest, most suitable food '));
  sectionBottom.appendChild(createSectionImg('section__bottom--image', foodImg, 'One of our best dishes'));  


  main.appendChild(sectionTop);
  main.appendChild(sectionBottom);

  return main
}


function createSectionImg(style, img, alt){
  const imageContainer = document.createElement('div');
  imageContainer.classList.add(style);
  const sectionImg =  new Image();
  sectionImg.src = img;
  sectionImg.alt = alt;
  imageContainer.appendChild(sectionImg);
  return imageContainer;
}

function createSectionText(style, title, text){
  const textContainer = document.createElement('div')
  textContainer.classList.add(`${style}--text`);

  const graphic = document.createElement('span')
  graphic.classList.add('test');

  const headerText = document.createElement('h1');
  headerText.classList.add('section__title');
  headerText.innerText = title;

  const headerPara = document.createElement('p');
  headerPara.classList.add('section-text');
  headerPara.innerText = text;

  textContainer.appendChild(graphic);
  textContainer.appendChild(headerText);
  textContainer.appendChild(headerPara);

  return textContainer
}