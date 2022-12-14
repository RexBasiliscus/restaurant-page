const createMenu = () => {
  const menu = document.createElement("div");
  menu.classList.add("menu");
  
  const items = document.createElement("p");
  items.textContent = "Menu Page";
  menu.appendChild(items);

  return menu;
}

const loadMenu = () => {
  const main = document.querySelector(".main");
  main.textContent = '';
  main.appendChild(createMenu());
}

export default loadMenu;