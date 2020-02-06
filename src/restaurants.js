export default function restaurants(){
    const resta = document.createElement('div');
    resta.id = 'restaurants';
    resta.className = 'container';
    
    resta.innerHTML = `
    <div class="nav-wrapper">
      <a href="#" class="brand-logo center">Restaurant le Jour</a>
    </div>
    <div class="row">
      <div class="col s12">
        <h3>Restaurants:</h3>
        <ul>
          <li>41 Park St</li>
          <li>29 Bond St</li>
          <li>33 Chilton St</li>        
        </ul>
      </div>
    </div>`;

    return resta;
}