const point = document.querySelector(".header-nav");

export const navMarkap = (lang) => {
    if(lang === "uk") {
    const render = `
     <ul class="header-nav-container">
        <li class="header-nav-item">
          <a href="#hero" class="header-nav-link">Головна</a>
        </li>
        <li class="header-nav-item">
          <a href="#about" class="header-nav-link">Про мене</a>
        </li>
        <li class="header-nav-item">
          <a href="#projects" class="header-nav-link">Роботи</a>
        </li>
        <li class="header-nav-item">
          <a href="https://drive.google.com/file/d/1L-QE-UTUXtyNDxPVWqpRRzR2Ahl-wVCY/view?usp=sharing" target="blank" class="header-nav-link">Моє резюме</a>
        </li>
      </ul>
      <button class="menu" id="open"><i class="fa-solid fa-bars"></i></button>
      
      <div class="menu-list-container" id="menu">
        <button class="close" id="close"><i class="fa-sharp fa-regular fa-circle-xmark"></i></button>
     <ul >
      <li class="header-nav-item">
        <a href="#hero" class="header-nav-link header-nav-link--mobile">Головна</a>
      </li>
      <li class="header-nav-item">
        <a href="#about" class="header-nav-link header-nav-link--mobile">Про мене</a>
      </li>
      <li class="header-nav-item">
        <a href="#projects" class="header-nav-link header-nav-link--mobile">Роботи</a>
      </li>
      <li class="header-nav-item">
        <a href="https://drive.google.com/file/d/1L-QE-UTUXtyNDxPVWqpRRzR2Ahl-wVCY/view?usp=sharing" target="blank" class="header-nav-link header-nav-link--mobile">Моє резюме</a>
      </li>
     </ul>
    </div>
    `
    point.innerHTML = '';
        point.insertAdjacentHTML("afterbegin", render);
    }

    else {
         const render = `
     <ul class="header-nav-container">
        <li class="header-nav-item">
          <a href="#hero" class="header-nav-link">Home</a>
        </li>
        <li class="header-nav-item">
          <a href="#about" class="header-nav-link">About me</a>
        </li>
        <li class="header-nav-item">
          <a href="#projects" class="header-nav-link">My works</a>
        </li>
        <li class="header-nav-item">
          <a href="https://drive.google.com/file/d/1L-QE-UTUXtyNDxPVWqpRRzR2Ahl-wVCY/view?usp=sharing" target="blank" class="header-nav-link">My resume</a>
        </li>
      </ul>
      <button class="menu" id="open"><i class="fa-solid fa-bars"></i></button>
      
      <div class="menu-list-container" id="menu">
        <button class="close" id="close"><i class="fa-sharp fa-regular fa-circle-xmark"></i></button>
     <ul >
      <li class="header-nav-item">
        <a href="#hero" class="header-nav-link header-nav-link--mobile">Home</a>
      </li>
      <li class="header-nav-item">
        <a href="#about" class="header-nav-link header-nav-link--mobile">About me</a>
      </li>
      <li class="header-nav-item">
        <a href="#projects" class="header-nav-link header-nav-link--mobile">My works</a>
      </li>
      <li class="header-nav-item">
        <a href="https://drive.google.com/file/d/1L-QE-UTUXtyNDxPVWqpRRzR2Ahl-wVCY/view?usp=sharing" target="blank" class="header-nav-link header-nav-link--mobile">My resume</a>
      </li>
     </ul>
    </div>
    `
    point.innerHTML = '';
        point.insertAdjacentHTML("afterbegin", render); 
    }

}

