const point = document.querySelector(".contact-list");

export const footer = (lang) => {
     
    if (lang === "uk") {
        const render = ` 
       <li>
        Тел:
        <a class="contact-link" href="tel:+380971428868">+38 (097)-14-28-868</a>
      </li>
      <li>
        Email:
        <a class="contact-link" href="mailto:vitaliy_piddubchak@ukr.net"
          >vitaliy_piddubchak@ukr.net</a
        >
      </li>
        `;
          point.innerHTML = '';
        point.insertAdjacentHTML("afterbegin", render);
    } else {
        const render = `
         <li>
        Phone:
        <a class="contact-link" href="tel:+380971428868">+38 (097)-14-28-868</a>
      </li>
      <li>
        Email:
        <a class="contact-link" href="mailto:vitaliy_piddubchak@ukr.net"
          >vitaliy_piddubchak@ukr.net</a
        >
      </li>
        `;
          point.innerHTML = '';
        point.insertAdjacentHTML("afterbegin", render);
    }
}