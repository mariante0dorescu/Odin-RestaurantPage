import './styles/main.scss';
import createHeader from './header';
import createFooter from "./footer"
import aboutUs from './aboutUs'
import ourSpecialities from './ourSpecialities'
import contactForm from './contactForm'

function website(){

  const  createMain = () => {
    const main = document.createElement("main");
    main.classList.add("main");
  
    const container = document.createElement('div');
    container.classList.add('container');
    
    main.appendChild(container);
  
    return main;
  }

  const documentBody = document.querySelector('body');
  documentBody.appendChild(createHeader())
  documentBody.appendChild(createMain())
  documentBody.appendChild(createFooter())

  const navBar = document.getElementsByClassName('navbar__btn');
    
  for(const button of navBar) {
    button.addEventListener('click', (e) => {
      const calledFunc = e.target.id;
      const customFunc = {
        aboutus: aboutUs,
        ourspecialities: ourSpecialities,
        contact: contactForm,
      }
      return customFunc[calledFunc]();    
    })
  }
  aboutUs()
}

website();


