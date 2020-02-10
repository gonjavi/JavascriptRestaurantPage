export default function menu() {
  const food = document.createElement('div');
  food.id = 'menu';
  food.className = 'container';
  food.innerHTML = `
  <h1 class="center-align">Restaurant le Jour</h1>
  <div class="row">
    <div class="col s12">
      <h4>Menu for today </h4>
    </div>
    <table class="col s12">
      <thead>
        <tr>
          <th>Sections</th>
          <th>Dishes</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Appetizers</td>
          <td>Garlic Bread, Cheese Plate, Nachos</td>
        </tr>
        <tr>
          <td>Salads and Soups</td>
          <td>Tossed Salad, Caesar Salad, Soup of the Day</td>
        </tr>
        <tr>
          <td>Seafood</td>
          <td>Fish and Chips, Battered Shrimp, Smoked Salmon</td>
        </tr>
        <tr>
          <td>Main Course</td>
          <td>New York Steak, Chicken Stirfry, Hearty Stew</td>
        </tr>
      </tbody>
    </table>
  </div>`;

  return food;
}