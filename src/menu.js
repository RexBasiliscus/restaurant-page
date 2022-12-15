import food1 from "./assets/images/food1.jpg"
import food2 from "./assets/images/food2.jpg"
import food3 from "./assets/images/food3.jpg"
import food4 from "./assets/images/food4.jpg"
import food5 from "./assets/images/food5.jpg"
import food6 from "./assets/images/food6.jpg"
import food7 from "./assets/images/food7.jpg"
import food8 from "./assets/images/food8.jpg"
import food9 from "./assets/images/food9.jpg"
import food10 from "./assets/images/food10.jpg"
import food11 from "./assets/images/food11.jpg"
import food12 from "./assets/images/food12.jpg"


const createMenu = () => {
  const menu = document.createElement("div");
  menu.classList.add("menu");
  
  menu.innerHTML = `
    <h1>Our Menu</h1>
    <div class="statement">
      <p>The food in Lucerro is a product of teamwork in the kitchen, whether it’s the creative or the actual technical process of cooking.<br><br>
      We pride ourselves on cooking in a natural way, using local ingredients, keeping up with the season, and making about 90% of our products in-house.
      <br><br>
      Sometimes we get inspiration from old traditional Slovenian recipes, sometimes we take a different approach.
      <br><br>
      The main objective is that we are free … so the guest can be free as well.</p>
    </div> 
    <div class="servings">
      <div class="course">
        <p>For lunch, we serve a short tasting menu:
          <li>3 courses - 35 €</li>
          <li>4 courses - 59 €</li>
        </p>
      </div>
      <div class="course">
        <p>For dinner, we only serve a tasting menu, which changes very often.</p>
      </div>
      <div class="course">
        <p>"Carte blanche" is a way to choose dishes based on the chef’s inspiration and a selection of fresh local ingredients.
          <li>7-course menu - 110 €, wine pairing 40 €</li>
          <li>9-course menu - 130€, wine pairing 50 €</li>
        </p>
      </div>
    </div>
  `

  const menuGallery = document.createElement("div");
  menuGallery.classList.add("menu-gallery");
  menu.appendChild(menuGallery);

  function addImg(name) {
    const img = document.createElement("img");
    img.src = `${name}`;
    img.alt = `${name}`;
    return img;
  } 
        
    menuGallery.appendChild(
      addImg(food1));
        
    menuGallery.appendChild(
      addImg(food2));
        
    menuGallery.appendChild(
      addImg(food3));
        
    menuGallery.appendChild(
      addImg(food4));
        
    menuGallery.appendChild(
      addImg(food5));
        
    menuGallery.appendChild(
      addImg(food6));
        
    menuGallery.appendChild(
      addImg(food7));
        
    menuGallery.appendChild(
      addImg(food8));
        
    menuGallery.appendChild(
      addImg(food9));
        
    menuGallery.appendChild(
      addImg(food10));
        
    menuGallery.appendChild(
      addImg(food11));
        
    menuGallery.appendChild(
      addImg(food12));

  return menu;
}



const loadMenu = () => {
  const main = document.querySelector(".main");
  main.textContent = '';
  main.appendChild(createMenu());
}

export default loadMenu;