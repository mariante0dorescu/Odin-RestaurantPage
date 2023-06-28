export default function contactForm () {

  const main = document.querySelector('.main').querySelector('.container');
  main.innerHTML = "";

  // section title
  const sectionTitle = document.createElement('h1');
  sectionTitle.classList.add('section__title')
  sectionTitle.innerText = 'Contact us';


  // contact form
  const formContainer = document.createElement('div');
  formContainer.classList.add('contact__section')

  const form = document.createElement('form');
  form.classList.add("contact__section--form");
  form.id = "contactForm";
  form.method = "";
  form.action = "#";

  const inputName = document.createElement('input');
  inputName.type = 'text';
  inputName.name = 'name'
  inputName.placeholder = "Your Name"
  inputName.required = true;


  const inputEmail = document.createElement('input');
  inputEmail.type = 'email';
  inputEmail.name = 'email'
  inputEmail.placeholder = "Your email"
  inputEmail.required = true;

  const inputMessage = document.createElement('textarea');
  inputMessage.name = 'message'
  inputMessage.placeholder = "Your message"
  inputMessage.required = true;

  const inputBtn = document.createElement('button');
  inputBtn.type = 'submit';
  inputBtn.classList.add('submitBtn');
  inputBtn.innerText = "Send";

  form.appendChild(createSectionTitle('Send us a message', "section__subtitle"))
  form.appendChild(inputName)
  form.appendChild(inputEmail)
  form.appendChild(inputMessage)
  form.appendChild(inputBtn)

    // business hours
    const isOpenContainer = document.createElement('div');
    isOpenContainer.classList.add('section__hours')
    isOpenContainer.innerText = hours();


  // map
  const mapContainer = document.createElement('div');
  mapContainer.classList.add('section__map')
  mapContainer.appendChild(createSectionTitle('Visit us:', "section__subtitle"))
  mapContainer.appendChild(isOpenContainer);
  mapContainer.innerHTML += `
   <div style="overflow:hidden;width="90%" max-width: 600px;position: relative;"><iframe width="600" height="400" src="https://maps.google.com/maps?hl=en&amp;q=palatul parlamentului+(Location)&amp;ie=UTF8&amp;t=k&amp;z=13&amp;iwloc=B&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><div style="position: absolute;width: 80%;bottom: 10px;left: 0;right: 0;margin-left: auto;margin-right: auto;color: #000;text-align: center;"><div style="overflow: auto; position: absolute; height: 0pt; width: 0pt;">Powered by <a href="https://www.embedista.com/googlemapsembed">Google Map Embed</a> Code Generator</div><script type="text/javascript" src="https://www.embedista.com/j/map.js"></script></div><style>.nvs{position:relative;text-align:right;height:325px;width:643px;} #gmap_canvas img{max-width:none!important;background:none!important}</style></div>`



  formContainer.appendChild(form);  
  formContainer.appendChild(mapContainer);

  main.appendChild(sectionTitle)
  main.appendChild(formContainer)
  
  return main

}

function createSectionTitle(title, style) {
  const section = document.createElement('h2');
  section.classList.add(`${style}`)
  section.innerText = title;
  return section;
}


function hours(){
    let openTime  = ["","12:00","12:00","12:00","12:00","12:00","12:00"];
    let closeTime = ["","21:30","21:30","21:30","23:30","23:30","21:30"];
    // script does not cater for Sunday opening

  let today = new Date;
  let day = today.getDay();

  // all in minutes from midnight:
  let now = today.getHours() * 60 + today.getMinutes();   
  let opens  = parseInt(openTime[day].substring(0,2)) * 60 + parseInt(openTime[day].substring(3,5));
  let closes = parseInt(closeTime[day].substring(0,2)) * 60 + parseInt(closeTime[day].substring(3,5));
  
  let str;

  if ( day > 0 && now < opens ) str = "Sorry, we are closed " + openTime[day];  
  else if ( day == 6 && now > closes || day == 0 ) str = "Sorry we are closed. We open Monday at " + openTime[1];  
  else if ( now > closes) str = "Sorry we are closed. We open tommorow at " + openTime[day + 1];  
  else str = "We are open until " + closeTime[day]; 

  return str;
}
