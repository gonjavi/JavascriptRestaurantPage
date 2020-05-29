export default function home() {
  const mySection = document.createElement('div');
  const p1 = document.createElement('p');
  const img = document.createElement('img');
  const p2 = document.createElement('p');
  const title = document.createElement('h1');
  title.textContent = 'Restaurant Le Jour';
  title.className = 'center-align';
  mySection.id = 'home';

  const divpicture = document.createElement('div');
  divpicture.className = 'center-align';
  img.src = 'https://raw.githubusercontent.com/gonjavi/JavascriptRestaurantPage/master/src/resto.jpg';
  img.width = '500';
  img.className = 'col s-4 offset -2'
  p1.appendChild(img);
  divpicture.appendChild(p1);

  const divtext = document.createElement('div');
  p2.textContent = 'This is the first restaurant in town where you can eat different type of meats. We have variety of dishes prepare with  fresh food that you can enjoy it';
  divtext.append(p2);

  mySection.appendChild(title);
  mySection.appendChild(divpicture);
  mySection.appendChild(divtext);
  return mySection;
}