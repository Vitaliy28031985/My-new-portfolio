import { navMarkap } from '../markap/header/header';
import { skills } from '../markap/skills/skills';
import { about } from '../markap/about/about';
import { order } from '../markap/order/order';
import { footer } from '../markap/footer/footer';

const toggleButton = document.getElementById("toggle-button");

const lang = localStorage.getItem('language');

if (lang) {
  lang === "en" ? toggleButton.checked = true : toggleButton.checked = false;

    navMarkap(lang);
    skills(lang);
    about(lang);
    order(lang);
    footer(lang);
}


const toggle = () => {
    const checked = toggleButton.checked;
    localStorage.setItem('language', checked ? "en" : "uk");
    const language = localStorage.getItem('language');
   
     
    if (language === "en") {
        navMarkap(language);
        skills(language);
        about(language);

        order(language);
        footer(language);
        console.log("en")
       
    
    } else {
        navMarkap(language);
        skills(language);
        about(language);

        order(language);
        footer(language);
        console.log("uk");
       
        
    }
  
    
} 

toggleButton.addEventListener("change", toggle)