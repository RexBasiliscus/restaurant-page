

const createContact = () => {
  const contact = document.createElement("div");
  contact.classList.add("contact");

  const items = document.createElement("p");
  items.textContent = "Contact Page";
  contact.appendChild(items);

  return contact;
}

const loadContact = () => {
  const main = document.querySelector(".main");
  main.textContent = '';
  main.appendChild(createContact());
}

export default loadContact;