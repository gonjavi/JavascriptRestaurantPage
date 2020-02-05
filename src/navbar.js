export default function navBar() {
  const myNav = document.createElement('nav');
 
  myNav.className = 'teal lighten-3';

  myNav.innerHTML = `
  <div class="nav-wrapper">
    <a href="#" class="brand-logo">Restaurant le Jour</a>
    <ul id="nav-mobile" class="right hide-on-med-and-down">
      <li><a href="#">Home</a></li>
      <li><a href="#">Menu</a></li>
      <li><a href="#">Restaurants</a></li>
      <li><a href="#">Contac Us</a></li>
    </ul>
  </div>`;

  return myNav;
  
}