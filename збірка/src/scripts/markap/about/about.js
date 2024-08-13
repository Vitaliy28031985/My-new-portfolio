const point = document.querySelector(".about-content");
export const about = (lang) => {
    if (lang === "uk") {
        const render = `
        <h4 class="about-title">Про мене</h4>
          <p class="text">З листопада 2021 року я розпочав навчання у ІТ школі “GO IT “. Протягом навчання ми реалізували багато цікавих проектів, як на ванільному Java Script, так і на React.

            Зокрема, я пишаюсь своєю роботою над проектом “Petly”. Цей проект з одного боку є соціально корисним, оскільки допомагає домашнім тваринкам знайти власників, а з іншого боку, в процесі його реалізації був застосований цілий спектр технологій, що посприяло моєму технічному зростанню.
            
            Останній командний проект, який ми реалізовували з командою випускників, був з використанням такої технології як React Native.
            
            На сьогоднішній день, здебільшого я працюю на фрілансі.</p>
        `;
        point.innerHTML = '';
        point.insertAdjacentHTML("afterbegin", render);
    } else {
        const render = `
        <h4 class="about-title">About me</h4>
          <p class="text">From November 2021, I started studying at the IT school "GO IT". During the training, we implemented many interesting projects, both on vanilla Java Script and on React. In particular, I am proud of my work on the Petly project. This project, on the one hand, is socially useful,
           as it helps pets find owners, and on the other hand, a whole range of technologies was used in the process of its implementation, which contributed to my technical growth. The last team project we implemented with the graduate team was using technology like React Native. Today, I mostly work as a freelancer.</p>
        `;
         point.innerHTML = '';
         point.insertAdjacentHTML("afterbegin", render);
    }

}