import navBar from './navbar.js';
import mainSection from './mainSection.js';
import myFooter from './footer.js';

function component() {
  var myContent = document.getElementById('content');
    
  myContent.append(navBar());
  myContent.appendChild(mainSection());
  myContent.appendChild(myFooter());

  return myContent;
}
  
document.body.appendChild(component());