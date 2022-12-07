import './styles/main.scss';
import tripadvisor from './assets/icons/tripadvisor.png';
import siteLogo from './assets/images/logo.png';
import interior from './assets/images/interior1.jpg';
import bar from './assets/images/bar1.jpg';

const contentContainer = document.querySelector("#content");

const createHeader = () => {
  const header = document.createElement("header");
  header.classList.add("header");
  contentContainer.appendChild(header);

  const restaurantName = document.createElement("h1");
  restaurantName.classList.add("h1");
  restaurantName.textContent = "LUCERRO";
  header.appendChild(restaurantName);

  header.appendChild(createNav());

  return header;
};

const createNav = () => {
  const nav = document.createElement("nav");

  const homeBtn = document.createElement("button");
  homeBtn.classList.add("nav-button");
  homeBtn.textContent = "Home";
  nav.appendChild(homeBtn);

  const menuBtn = document.createElement("button");
  menuBtn.classList.add("nav-button");
  menuBtn.textContent = "Menu";
  nav.appendChild(menuBtn);

  const galleryBtn = document.createElement("button");
  galleryBtn.classList.add("nav-button");
  galleryBtn.textContent = "Gallery";
  nav.appendChild(galleryBtn);

  const contactBtn = document.createElement("button");
  contactBtn.classList.add("nav-button");
  contactBtn.textContent = "Contact";
  nav.appendChild(contactBtn);

  return nav;
}

const createMain = () => {
  const main = document.createElement("div");
  main.classList.add("main");
  contentContainer.appendChild(main);

  const firstWrapper = document.createElement("div");
  firstWrapper.classList.add("wrapper");
  main.appendChild(firstWrapper);

      const barImg = document.createElement("img");
      barImg.src = bar;
      barImg.classList.add("bar-img");
      firstWrapper.appendChild(barImg);

      const catchphrase = document.createElement("p");
      catchphrase.classList.add("catchphrase");
      catchphrase.textContent = `Simple, but refined`;
      firstWrapper.appendChild(catchphrase);

    const interiorImg = document.createElement("img");
    interiorImg.src = interior;
    interiorImg.classList.add("interior-img");
    main.appendChild(interiorImg);

    const aboutUs = document.createElement("p");
    aboutUs.classList.add("about-us");
    main.appendChild(aboutUs);

  return main;
}

const createFooter = () => {
  const footer = document.createElement("footer");
  footer.classList.add("footer");
  contentContainer.appendChild(footer);

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

createHeader();
createMain();
createFooter();













