export default function navBar() {
  const myNav = document.createElement('nav');
  myNav.className = 'teal lighten-3';

  myNav.innerHTML = `
  <div class="nav-wrapper col s12">
    <a href="#" class="brand-logo center col s12 ">Restaurant Le Jour</a>
  </div>
  <div class="row">
    <div class="col s12">
      <ul class="tabs">
        <li class="teal lighten-3 tab col s3"><a class="white-text" id="home">Home</a></li>
        <li class="teal lighten-3 tab col s3"><a class="white-text" href="#menu" id="menu">Menu</a></li>
        <li class="teal lighten-3 tab col s3"><a class="white-text" href="#restaurants" id="restaurants">Restaurants</a></li>
        <li class="teal lighten-3 tab col s3"><a class="white-text" href="#contact" id="contact">Contact</a></li>
      </ul>
    </div>`;
  return myNav;
}