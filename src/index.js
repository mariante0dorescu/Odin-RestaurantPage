import './styles/main.scss';
import createHeader from './header';
import createFooter from "./footer"

// function component() {
//   const element = document.createElement('div');
//   element.innerHTML = 'test';
//   console.log(element)
//   return element;
// }
// component()
// document.body.appendChild(component());

function createMain() {
  const main = document.createElement("main");
  main.classList.add("main");

  const container = document.createElement('div');
  container.classList.add('container');
  
  main.appendChild(container);

  return main;
}

function website(){
  const documentBody = document.querySelector('body');
  documentBody.appendChild(createHeader())
  documentBody.appendChild(createMain())
  documentBody.appendChild(createFooter())
}

website();

const navBar = document.getElementsByClassName('navbar__btn');
const main = document.querySelector('.main');
const mainContainer = main.querySelector('.container');

  
for(const button of navBar) {
  button.addEventListener('click', (e) => {
    mainContainer.innerText = e.target.id;
  })
}

