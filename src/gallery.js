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
import wine from "./assets/images/wine.jpg"
import interior1 from "./assets/images/interior1.jpg"
import interior2 from "./assets/images/interior2.jpg"
import bar1 from "./assets/images/bar1.jpg"


const createGallery = () => {
  const gallery = document.createElement("div");
  gallery.classList.add("gallery");

    const quote = document.createElement("p");
    quote.textContent = `In Lucerro, every dish is made with love and care by our passionate team`;
    gallery.appendChild(quote);

  function addImg(name) {
    const img = document.createElement("img");
    img.src = `${name}`;
    img.alt = `${name}`;
    return img;
  } 
        
    gallery.appendChild(
      addImg(food1));
        
    gallery.appendChild(
      addImg(food2));
        
    gallery.appendChild(
      addImg(food3));
        
    gallery.appendChild(
      addImg(food4));
        
    gallery.appendChild(
      addImg(food5));
        
    gallery.appendChild(
      addImg(food6));
        
    gallery.appendChild(
      addImg(food7));
        
    gallery.appendChild(
      addImg(food8));
        
    gallery.appendChild(
      addImg(food9));
        
    gallery.appendChild(
      addImg(food10));
        
    gallery.appendChild(
      addImg(food11));
        
    gallery.appendChild(
      addImg(food12));
        
    gallery.appendChild(
      addImg(wine));
        
    gallery.appendChild(
      addImg(interior1));
        
    gallery.appendChild(
      addImg(interior2));
        
    gallery.appendChild(
      addImg(bar1));

  return gallery;
}

const loadGallery = () => {
  const main = document.querySelector(".main");
  main.textContent = '';
  main.appendChild(createGallery());
}

export default loadGallery;