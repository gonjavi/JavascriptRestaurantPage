export default function mainSection(){
  const mySection = document.createElement('section');
  const p1 = document.createElement('p');
  const a = document.createElement('a');
  const img = document.createElement('img');
  const p2 = document.createElement('p');
  

  const title = document.createElement('h1');
  title.textContent = 'Restaurant le Jour';

  const divpicture = document.createElement('div');
  
  img.src = "https://live.staticflickr.com/6221/6238842499_5404343729_b.jpg";
  p1.appendChild(img);
  divpicture.appendChild(p1);

  const divtext = document.createElement('div');
  
  p2.textContent = 'This is the first restaurant in town where you can eat different type of meats, commercial and not commercial. We have variety of dishes prepare with  fresh food that you can enjoy it';
  divtext.append(p2);

  mySection.appendChild(title);
  mySection.appendChild(divpicture);
  mySection.appendChild(divtext);
  
  return mySection;
}