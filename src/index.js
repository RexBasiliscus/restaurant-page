import './styles/main.scss';
import tripadvisor from './assets/icons/tripadvisor.png';
import siteLogo from './assets/images/logo.png';
import loadHome from './home';
import loadMenu from './menu';
import loadGallery from './gallery';
import loadContact from './contact';


const createHeader = () => {
  const header = document.createElement("header");
  header.classList.add("header");

  const restaurantName = document.createElement("h1");
  restaurantName.classList.add("h1");
  restaurantName.textContent = "LUCERRO";
  header.appendChild(restaurantName);

  header.appendChild(createNav());

  return header;
};

const createNav = () => {
  const nav = document.createElement("div");
  nav.classList.add("nav");

  const homeBtn = document.createElement("button");
  homeBtn.classList.add("nav-button");
  homeBtn.classList.add("active");
  homeBtn.textContent = "Home";
  homeBtn.addEventListener('click', (e) => {
    if(e.target.classList.contains("active")) return;
    setActiveBtn(homeBtn);
    loadHome();
  })

  const menuBtn = document.createElement("button");
  menuBtn.classList.add("nav-button");
  menuBtn.textContent = "Menu";
  menuBtn.addEventListener('click', (e) => {
    if(e.target.classList.contains("active")) return;
    setActiveBtn(menuBtn);
    loadMenu();
  })

  const galleryBtn = document.createElement("button");
  galleryBtn.classList.add("nav-button");
  galleryBtn.textContent = "Gallery";
  galleryBtn.addEventListener('click', (e) => {
    if(e.target.classList.contains("active")) return;
    setActiveBtn(galleryBtn);
    loadGallery();
  })

  const contactBtn = document.createElement("button");
  contactBtn.classList.add("nav-button");
  contactBtn.textContent = "Contact";
  contactBtn.addEventListener('click', (e) => {
    if(e.target.classList.contains("active")) return;
    setActiveBtn(contactBtn);
    loadContact();
  })

  nav.appendChild(homeBtn);
  nav.appendChild(menuBtn);
  nav.appendChild(galleryBtn);
  nav.appendChild(contactBtn);

  return nav;
}

function setActiveBtn(button) {
  const navButtons = document.querySelectorAll(".nav-button");

  navButtons.forEach((button) => {
    if(button !== this) {
      button.classList.remove("active");
    }
  });

  button.classList.add("active");
}

function createMain() {
  const main = document.createElement("div");
  main.classList.add("main");
  return main;
}

const createFooter = () => {
  const footer = document.createElement("footer");
  footer.classList.add("footer");

    const socialMedia = document.createElement("div");
    socialMedia.classList.add("social");
    footer.appendChild(socialMedia);

      const fbLink = document.createElement("a");
      fbLink.href = "#!";
      const fbIcon = document.createElement("i");
      fbIcon.classList.add("fab");
      fbIcon.classList.add("fa-facebook");
      fbLink.appendChild(fbIcon);
      socialMedia.appendChild(fbLink);

      const igLink = document.createElement("a");
      igLink.href = "#!";
      const igIcon = document.createElement("i");
      igIcon.classList.add("fab");
      igIcon.classList.add("fa-instagram");
      igLink.appendChild(igIcon);
      socialMedia.appendChild(igLink);

      const tripadvisorIcon = document.createElement("img");
      tripadvisorIcon.src = tripadvisor;
      tripadvisorIcon.href = "#!";
      tripadvisorIcon.classList.add("tripadvisor");
      socialMedia.appendChild(tripadvisorIcon);


  const copyright = document.createElement("div");
  copyright.classList.add("copyright");
  footer.appendChild(copyright);

    const logo = document.createElement("img");
    logo.src = siteLogo;
    logo.classList.add("logo");
    copyright.appendChild(logo);

    const crText = document.createElement("p");
    crText.textContent = `Copyright © RexBasiliscus 2022`;
    copyright.appendChild(crText);


  return footer;
}


function loadPage() {
  const contentContainer = document.querySelector("#content");

  contentContainer.appendChild(createHeader());
  contentContainer.appendChild(createMain());
  contentContainer.appendChild(createFooter());

  loadHome();
}

loadPage();



