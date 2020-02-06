export default function menu(){
    const food = document.createElement('div');
    food.id = 'menu';
    food.className = 'container';
    
    food.innerHTML = `
    <div class="nav-wrapper">
      <a href="#" class="brand-logo center">Restaurant le Jour</a>
    </div>
    <div class="row">
      <div class="col s12">
        <p>Menu for today </p>
      </div>`;

    return food;
}