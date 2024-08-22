const point = document.querySelector(".proj-title");
export const  projectsTitle = (lang) => {
     
    if (lang === "uk") {
        const render = ` <h4 class="projects-title">Мої Роботи</h4>`;
          point.innerHTML = '';
        point.insertAdjacentHTML("afterbegin", render);
    } else {
        const render = `<h4 class="projects-title">My Works</h4>`;
          point.innerHTML = '';
        point.insertAdjacentHTML("afterbegin", render);
    }
}