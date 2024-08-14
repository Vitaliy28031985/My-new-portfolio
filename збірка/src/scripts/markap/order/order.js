const point = document.querySelector(".order");

export const order = (lang) => {
     if (lang === "uk") {
         const render = ` 
         <h4 class="order-title">Замовити проект</h4>
    <div class="order-content">
    <form class="form">
     <div class="input-container">
        <input name="name" class="input" type="text" placeholder="Ваше ім'я">
        <input name="email" type="text" class="input" placeholder="Ваш e-mail">
     </div>
     <textarea name="message" class="textarea" placeholder="Повідомлення"></textarea>
     <button type="submit" class="button">Надіслати</button>
    </form>
    </div>
         `;
          point.innerHTML = '';
        point.insertAdjacentHTML("afterbegin", render);
    } else {
         const render = `
         <h4 class="order-title">Order a project</h4>
    <div class="order-content">
    <form class="form">
     <div class="input-container">
        <input name="name" class="input" type="text" placeholder="Your name">
        <input name="email" type="text" class="input" placeholder="Your e-mail">
     </div>
     <textarea name="message" class="textarea" placeholder="Message"></textarea>
     <button type="submit" class="button">Send</button>
    </form>
    </div>
         `;
          point.innerHTML = '';
        point.insertAdjacentHTML("afterbegin", render);
    }
}