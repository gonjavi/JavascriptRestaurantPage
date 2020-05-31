import navBar from './navbar';
import mainSection from './mainSection';
import myFooter from './footer';
import './index.css';

function component() {
  const myContent = document.getElementById('content');
  myContent.append(navBar());
  myContent.appendChild(mainSection());
  myContent.appendChild(myFooter());
  return myContent;
}
document.body.appendChild(component());