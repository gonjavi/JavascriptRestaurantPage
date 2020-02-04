import navBar from './navbar.js';
import navBar from './navbar.js';
import myFooter from './footer.js';
import 'bootstrap';

function component() {
  var myContent = document.getElementById('content');
  
  
  myContent.appendChild(navBar());
  myContent.appendChild(mySection());
  myContent.appendChild(myFooter());

  return myContent;
}
  
document.body.appendChild(component());