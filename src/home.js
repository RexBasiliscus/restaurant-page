import interior from './assets/images/interior2.jpg';
import bar from './assets/images/bar1.jpg';

const createHome = () => {
  const home = document.createElement("div");
  const firstWrapper = document.createElement("div");
  firstWrapper.classList.add("wrapper");
  home.appendChild(firstWrapper);

      const barImg = document.createElement("img");
      barImg.src = bar;
      barImg.classList.add("bar-img");
      firstWrapper.appendChild(barImg);

      const catchphrase = document.createElement("p");
      catchphrase.classList.add("catchphrase");
      catchphrase.textContent = `Simple, but refined`;
      firstWrapper.appendChild(catchphrase);

  const secondWrapper = document.createElement("div");
  secondWrapper.classList.add("second-wrapper");
  home.appendChild(secondWrapper);

      const aboutUs = document.createElement("p");
      aboutUs.classList.add("about-us");
      secondWrapper.appendChild(aboutUs);

      const interiorImg = document.createElement("img");
      interiorImg.src = interior;
      interiorImg.classList.add("interior-img");
      secondWrapper.appendChild(interiorImg);

  return home;
}

const loadHome = () => {
  const main = document.querySelector(".main");
  main.textContent = '';
  main.appendChild(createHome());
}

export default loadHome;