export default function createHeader(){
  
  const header = document.createElement('div');
  header.classList.add('header');

  const container = document.createElement('div');
  container.classList.add('container');
  
  const title = document.createElement('div');
  title.classList.add('header__title');
  const restaurantName = document.createElement("h1");
  restaurantName.classList.add("header__title--name");
  restaurantName.textContent = "dine";
  title.appendChild(restaurantName);


  const tagline = document.createElement('div');
  tagline.classList.add('header__tagline');
  const taglineText = document.createElement('h2');
  taglineText.classList.add('header__tagline--text');
  taglineText.innerText = "Exquisite dining since 1989";
  tagline.appendChild(taglineText);

  const info = document.createElement('div');
  info.classList.add("header__info");
  const infoText = document.createElement('p');
  infoText.classList.add('header__info--text');
  infoText.innerText = "Experience our seasonal menu in beutiful country surroundings. Eat the products made in the comfort of out farmhouse";
  info.appendChild(infoText);
  


  const bookBtn = document.createElement('button');
  bookBtn.classList.add('btn');
  bookBtn.innerText = "book a table";


  container.appendChild(title);
  container.appendChild(tagline);
  container.appendChild(info);
  container.appendChild(bookBtn);
  header.appendChild(container);

  return header;
}
