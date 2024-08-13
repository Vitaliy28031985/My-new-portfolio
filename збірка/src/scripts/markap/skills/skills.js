const point = document.querySelector(".title");
export const skills = (lang) => {
     
    if (lang === "uk") {
        const render = ` <h4 class="technology-title">Мої навики</h4>`;
          point.innerHTML = '';
        point.insertAdjacentHTML("afterbegin", render);
    } else {
        const render = ` <h4 class="technology-title">My skills</h4>`;
          point.innerHTML = '';
        point.insertAdjacentHTML("afterbegin", render);
    }
}