const point = document.querySelector(".about-content");
export const about = (lang) => {
    if (lang === "uk") {
        const render = `
        <h4 class="about-title">Про мене</h4>
          <p class="text">З 2022 року працюю у сфері веб-розробки.
          Працював над різноманітними проектами як в команді так і самостійно.
          Проект яким я пишаюся - це «EstimateApp». Веб-застосунок, створений за допомогою стеку MERN (MongoDB, Express, React.js, Node.js). Застосунок має практичне значення, оскільки ним уже користуються деякі ремонтно-будівельні бригади.
          На сьогоднішній день, здебільшого я працюю на фрілансі. Займаюся версткою сайтів, створюю веб-застосунки з допомогою React та Node.js.</p>
        `;
        point.innerHTML = '';
        point.insertAdjacentHTML("afterbegin", render);
    } else {
        const render = `
        <h4 class="about-title">About me</h4>
          <p class="text">Since 2022, I have been working in the field of web development. I worked on different projects, some were team projects and others were my personal projects. But the project I am proud of is EstimateApp. The application was created using MERN technology (MongoDB, Express, React.js, Node.js). The application has a practical application, as it is used by several repair and construction teams.
          Today I mostly work as a freelancer, developing websites, building web applications using React and Node.js.
         </p>
        `;
         point.innerHTML = '';
         point.insertAdjacentHTML("afterbegin", render);
    }

}