import './styles/main.scss';
import logoImg from './assets/images/logo.png';

const contentContainer = document.querySelector("#content");

const createHeader = () => {
  const header = document.createElement("div");
  header.classList.add("header");
  contentContainer.appendChild(header);

  const logo = document.createElement("img");
  logo.classList.add("logo");
  logo.src = logoImg;
  logo.alt = "logo";
  header.appendChild(logo);

  
};

createHeader();













