export default function navBar() {
  const myNav = document.createElement('nav');
  const myUl = document.createElement('ul');

  const navItems = ['Home', 'Menu', 'Restaurants', 'Contact Us'];
  
  for (let navitem of navItems){
    let listItem = document.createElement('li');
    listItem.textContent= navitem;

    myUl.appendChild(listItem);
  }
  
  myNav.appendChild(myUl);

  return myNav;
  
}