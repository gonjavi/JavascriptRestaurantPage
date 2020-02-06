export default function restaurants(){
    const resta = document.createElement('div');
    resta.id = 'restaurants';
    resta.className = 'container';
    
    resta.innerHTML = `
    <h1 class="center-align">Restaurant le Jour</h1>
    <div class="row">
      <div class="col s12">
        <h3>Restaurants:</h3>
        <ul>
          <li><h5>41 Park St  Tel:          +59415533223 </h5></li>
          <li><h5>29 Bond St Tel:           +59415533224</h5></li>
          <li><h5>33 Chilton St Tel:        +59415533223</h5></li> 
          <li><h5>234 Roostvelt Avenue Tel: +59415533226</h5></li> 

        </ul>
      </div>
    </div>`;

    return resta;
}