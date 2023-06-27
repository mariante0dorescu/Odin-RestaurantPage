export default function createNav(){
  const navItems = ['About Us', 'Our Specialities', 'Contact'];
  const navbar = document.createElement('nav');
  navbar.classList.add('header__navbar')

  const list = document.createElement('ul');

  for( const navItem of navItems){
    let li = document.createElement('li');
    li.innerHTML = `<button class="navbar__btn" id="${navItem.split(" ").join("").toLowerCase()}">${navItem}</button>`;
    list.appendChild(li);
  }

  navbar.appendChild(list);  

  return navbar;
}

// function setActiveButton(button) {
//   const buttons = document.querySelectorAll(".navbar__btn");

//   buttons.forEach((button) => {
//     if (button !== this) {
//       button.classList.remove("active");
//     }
//   });

//   button.classList.add("active");
// }