export default function contact(){
  const info = document.createElement('div');
  info.id = 'contact';
  info.className = 'container';
  
  info.innerHTML = `
  <div class="nav-wrapper">
    <a href="#" class="brand-logo center">Restaurant le Jour</a>
  </div>
  <div class="row">
  <div class="col s12">
  <p>Address: 234 Roostvelt Avenue</p>
    <p>Tel: +59415533226 </p>
    <p>Email: restaurant@gmail.com </p>
</div>`;

  return info;
}