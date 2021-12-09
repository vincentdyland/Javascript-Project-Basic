showUI();

function showUI() {
  var main = document.querySelector(".main");
  main.innerHTML = `
  <div class="mobile-container">
  <header>
      <input type="text" value="">
      <button id="search"><i class="fas fa-search"></i></button>
  </header>
  <div class="fav-container">
      <h3>Favorites Fruit</h3>
      <ul class="fav-meals">
          <li><img src="img/Chuoi.jpg" alt=""><span>Banana</span></li>
          <li><img src="img/Dau.jpg" alt=""><span>Black Berry</span></li>
          <li><img src="img/Kiwi.png" alt=""><span>Ki wi</span></li>
          <li><img src="img/strawberry.jpg" alt=""><span>Strawberry</span></li>
          <li><img src="img/pine-apple.png" alt=""><span>Pineapple</span></li>
          <li><img src="img/orange.jpg" alt=""><span>Orange</span></li>
          
      </ul>
  </div>
  <div class="meals">
      <div class="meal">
          <div class="meal-header">
              <span class="random">
                  Fruit
              </span>
              <img src="img/Dau.jpg" alt="">
          </div>
          <div class="meal-body">
              <h4>Black Berry</h4>
              <button class="fav-btn active">
                  <i class="far fa-heart"></i>
              </button>
          </div>
      </div>
  </div>
</div>`;
}
