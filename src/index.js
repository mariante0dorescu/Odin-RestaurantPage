import './styles/main.scss';
import createHeader from './header';

// function component() {
//   const element = document.createElement('div');
//   element.innerHTML = 'test';
//   console.log(element)
//   return element;
// }
// component()
// document.body.appendChild(component());

function website(){
  const documentBody = document.querySelector('body');
  documentBody.appendChild(createHeader())
}

website();