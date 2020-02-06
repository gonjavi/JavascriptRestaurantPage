import home from './modules/home';
import menu from './modules/menu';
import contact from './modules/contact';
import restaurants from './modules/restaurants';

export default function mainSection() {
  const mainSection = document.createElement('div');
  mainSection.className = 'container';
  mainSection.appendChild(home());

  document.getElementById('home').onclick = () => {
    mainSection.appendChild(home());
    mainSection.removeChild(mainSection.childNodes[0]);
  };

  document.getElementById('menu').onclick = () => {
    mainSection.appendChild(menu());
    mainSection.removeChild(mainSection.childNodes[0]);
  };
  document.getElementById('contact').onclick = () => {
    mainSection.appendChild(contact());
    mainSection.removeChild(mainSection.childNodes[0]);
  };
  document.getElementById('restaurants').addEventListener('click', () => {
    mainSection.appendChild(restaurants());
    mainSection.removeChild(mainSection.childNodes[0]);
  });
  return mainSection;
}