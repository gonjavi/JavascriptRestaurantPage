export default function contact() {
  const info = document.createElement('div');
  info.id = 'contact';
  info.className = 'container';
  info.innerHTML = `  
  <h1 class="center-align">Restaurant Le Jour</h1>
  <div class="row">
    <div class="col s12">
      <h5>Address: 234 Roostvelt Avenue</h5>
        <h5>Tel: +59415533226 </h5>
        <h5>Email: restaurant@gmail.com </h5>
    </div>
    <div class="col s12">
      <h5>Address: 784 Simon Bolivar Avenue</h5>
        <h5>Tel: +59415533226 </h5>
        <h5>Email: restaurant@gmail.com </h5>
    </div>
    <br><br><br><br><br>
  </div>`;

  return info;
}