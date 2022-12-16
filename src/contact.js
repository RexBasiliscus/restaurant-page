import loc from './assets/images/location.png';

const createContact = () => {
  const contact = document.createElement("div");
  contact.classList.add("contact");

    const para1 = document.createElement("p");
    para1.classList.add("title");
    para1.textContent = "Contact";
    contact.appendChild(para1);

    const items = document.createElement("div");
    items.classList.add("items");
    contact.appendChild(items);

      const workingHours_div = document.createElement("div");
      workingHours_div.classList.add("containers");
      items.appendChild(workingHours_div);

        const workingHoursIcon = document.createElement("i");
        workingHoursIcon.classList.add("contact-icons");
        workingHoursIcon.classList.add("fa-regular");
        workingHoursIcon.classList.add("fa-clock");
        workingHours_div.appendChild(workingHoursIcon);

        const workingHoursPara = document.createElement("p");
        workingHoursPara.classList.add("containers-text");
        workingHoursPara.classList.add("timetable");
        workingHoursPara.innerHTML =`
        <table>
          <tr>
            <td class="first-col">Monday</td> 
            <td>Closed</td>
          </tr>
          <tr>
            <td class="first-col">Tue - Thu</td> 
            <td>11:00 - 22:30</td>
          </tr>
          <tr>
            <td class="first-col">Fri - Sun</td> 
            <td>12:00 - 0:00</td>
          </tr>
        </table>`;
        workingHours_div.appendChild(workingHoursPara);

      const phoneNum_div = document.createElement("div");
      phoneNum_div.classList.add("containers");
      items.appendChild(phoneNum_div);

        const phoneNum = document.createElement("i");
        phoneNum.classList.add("contact-icons");
        phoneNum.classList.add("fa-solid");
        phoneNum.classList.add("fa-phone");
        phoneNum_div.appendChild(phoneNum);

        const phoneNumPara = document.createElement("p");
        phoneNumPara.classList.add("containers-text");
        phoneNumPara.textContent = "(+386) 1 3200 188";
        phoneNum_div.appendChild(phoneNumPara);

      const eMail_div = document.createElement("div");
      eMail_div.classList.add("containers");
      items.appendChild(eMail_div);

        const eMail = document.createElement("i");
        eMail.classList.add("contact-icons");
        eMail.classList.add("fa-regular");
        eMail.classList.add("fa-envelope");
        eMail_div.appendChild(eMail);

        const eMailPara = document.createElement("p");
        eMailPara.classList.add("containers-text");
        eMailPara.textContent = "contact@lucerro.si";
        eMail_div.appendChild(eMailPara);

      const location_div = document.createElement("div");
      location_div.classList.add("containers")
      items.appendChild(location_div);  

        const locationIcon = document.createElement("i");
        locationIcon.classList.add("contact-icons");
        locationIcon.classList.add("fa-solid");
        locationIcon.classList.add("fa-location-dot");
        location_div.appendChild(locationIcon);

        const locationPara = document.createElement("p");
        locationPara.classList.add("containers-text");
        locationPara.textContent = "Mestni trg 3, Ljubljana (Slovenia)";
        location_div.appendChild(locationPara);


      const locationImg = document.createElement("img");
      locationImg.classList.add("location");
      locationImg.src = loc;
      items.appendChild(locationImg);

  return contact;
}

const loadContact = () => {
  const main = document.querySelector(".main");
  main.textContent = '';
  main.appendChild(createContact());
}

export default loadContact;