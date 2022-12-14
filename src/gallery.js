

const createGallery = () => {
  const gallery = document.createElement("div");
  gallery.classList.add("gallery");

  const items = document.createElement("p");
  items.textContent = "Gallery Page";
  gallery.appendChild(items);

  return gallery;
}

const loadGallery = () => {
  const main = document.querySelector(".main");
  main.textContent = '';
  main.appendChild(createGallery());
}

export default loadGallery;