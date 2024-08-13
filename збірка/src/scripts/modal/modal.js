

const buttonOpen = document.getElementById("open");
const menuList = document.getElementById("menu");
const buttonClose = document.getElementById('close');

menuList.classList.add('toggle-menu')

const toggleMenu = () => {
    menuList.classList.toggle('toggle-menu');
}

buttonOpen.addEventListener('click', toggleMenu);
buttonClose.addEventListener('click', toggleMenu);


