import home from './home.js';
import menu from './menu.js';
import contact from './contact.js';
import restaurants from './restaurants.js';

export default function mainSection(){
  const mainSection = document.createElement('div');
 
  mainSection.className = 'container';
  
  mainSection.appendChild(home());

  document.getElementById('home').onclick = () =>{
    mainSection.appendChild(home());
    mainSection.removeChild(mainSection.childNodes[0]);
    
  }
  document.getElementById('menu').onclick = () =>{
    mainSection.appendChild(menu());
    mainSection.removeChild(mainSection.childNodes[0]);
  }
  document.getElementById('contact').onclick = () =>{
    mainSection.appendChild(contact());
    mainSection.removeChild(mainSection.childNodes[0]);
  }
  document.getElementById('restaurants').onclick = () =>{
    mainSection.appendChild(restaurants());
    mainSection.removeChild(mainSection.childNodes[0]);
  }
  
  return mainSection;
}