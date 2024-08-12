const toggleButton = document.getElementById("toggle-button");

const toggle = async () => {
    const checked = toggleButton.checked;
    localStorage.setItem('language', checked ? "en" : "uk");
    const language = await localStorage.getItem('language')
     
    if (language === "en") {
        console.log("en")
    
    } else {
        console.log("uk");
        
    }
    
    
} 

toggleButton.addEventListener("change", toggle)