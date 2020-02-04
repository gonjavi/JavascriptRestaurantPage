export default function myFooter(){
  const myfooter = document.createElement('footer');
  const myUl1 = document.createElement('ul');

  const footItems = ['Home', 'Menu', 'Restaurants', 'Contact Us'];
  
  for (let footitem of footItems){
    let listItem = document.createElement('li');
    listItem.textContent= footitem;

    myUl1.appendChild(listItem);
  }
  
  myfooter.appendChild(myUl1);

  return myfooter;
     
}