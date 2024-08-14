import { projectsUk } from '../../API/api';
import { projectsEn } from '../../API/api';

const point = document.querySelector(".projects-list");

const fetchData = async () => {
    try {
        const projectData = await projectsUk();
        return projectData; 
    } catch (error) {
        console.error("Error fetching project data:", error.message); 
        return null; 
    }
}

const fetchDataEn = async () => {
    try {
        const projectData = await projectsEn();
        return projectData; 
    } catch (error) {
        console.error("Error fetching project data:", error.message); 
        return null; 
    }
}

export const projects = async (lang) => {
    if (lang === "uk") {
          const data = await fetchData();
          console.log('uk', data)
        const render = data.map(({avatar, titleUk, descriptionUk, technologies, gitLink, pageLink}) => 
         ` 
          <li class="project-container">
        <div class="project-item">
        <div class="front">
            <h5 class="project-title">${titleUk}</h5>
            <img src="${avatar}" alt="">
        </div>
        <div class="back">
            <div class="content">
            <p class="description"><span>Опис:</span>${descriptionUk}</p>
            <p class="technology"><span>Використані технології:</span>${technologies}</p>
            <div class="icons">
            <a href="${gitLink}" class="git icon"><img alt="Github Generic Flat icon" loading="lazy" width="25" height="25" decoding="async" data-nimg="1" class="_e0usu53" src="https://cdn-icons-png.freepik.com/512/2504/2504911.png?ga=GA1.1.731316322.1722436473" style="color: transparent;"></a>
            <a href="${pageLink}" class="page icon"><img alt="File Juicy Fish Outline icon" loading="lazy" width="25" height="25" decoding="async" data-nimg="1" class="_e0usu53" style="color:transparent" src="https://cdn-icons-png.freepik.com/512/3826/3826214.png?ga=GA1.1.731316322.1722436473"></a>
        </div>
        </div>
        </div>
    </li>
        `   
        ).join("");
          point.innerHTML = '';
        point.insertAdjacentHTML("afterbegin", render);
    } else {
     const data = await fetchDataEn();
        const render = data.map(({avatar, titleEn, descriptionEn, technologies, gitLink, pageLink}) => 
         ` 
          <li class="project-container">
        <div class="project-item">
        <div class="front">
            <h5 class="project-title">${titleEn}</h5>
            <img src="${avatar}" alt="">
        </div>
        <div class="back">
            <div class="content">
            <p class="description"><span>Description:</span>${descriptionEn}</p>
            <p class="technology"><span>Technologies:</span>${technologies}</p>
            <div class="icons">
            <a href="${gitLink}" class="git icon"><img alt="Github Generic Flat icon" loading="lazy" width="25" height="25" decoding="async" data-nimg="1" class="_e0usu53" src="https://cdn-icons-png.freepik.com/512/2504/2504911.png?ga=GA1.1.731316322.1722436473" style="color: transparent;"></a>
            <a href="${pageLink}" class="page icon"><img alt="File Juicy Fish Outline icon" loading="lazy" width="25" height="25" decoding="async" data-nimg="1" class="_e0usu53" style="color:transparent" src="https://cdn-icons-png.freepik.com/512/3826/3826214.png?ga=GA1.1.731316322.1722436473"></a>
        </div>
        </div>
        </div>
    </li>
        `   
        ).join("");
          point.innerHTML = '';
        point.insertAdjacentHTML("afterbegin", render);
    }
}