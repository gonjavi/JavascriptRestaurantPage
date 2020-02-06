export default function myFooter(){
  const myfooter = document.createElement('footer');
  
  myfooter.className = 'grey darken-1 page-footer';
  
  myfooter.innerHTML = `
  <div class="container">
  <div class="row">
    <div class="col l6 s12">
      <h5 class="white-text">Restaurant le Jour</h5>
      <p class="grey-text text-lighten-4">This is the first restaurant in town where you can eat different type of meats. We have variety of dishes prepare with  fresh food.</p>
    </div>
    <div class="col l4 offset-l2 s12">
      <h5 class="white-text">Go to</h5>
      <ul>
        <li><a class="grey-text text-lighten-3" href="#home">Home</a></li>
        <li><a class="grey-text text-lighten-3" href="#menu">Menu</a></li>
        <li><a class="grey-text text-lighten-3" href="#restaurants">Restaurants</a></li>
        <li><a class="grey-text text-lighten-3" href="#contact">Contact Us</a></li>
      </ul>
    </div>
  </div>
</div>
<div class="footer-copyright">
  <div class="container">
  © 2020 Copyright Gonzalo J. Mancilla
</div>
</div>`;

 
  return myfooter;
     
}