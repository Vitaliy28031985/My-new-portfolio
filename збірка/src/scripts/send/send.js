import Toastify from 'toastify-js';
import "toastify-js/src/toastify.css";
import { addMessage } from '../API/api';
const form = document.querySelector(".form");

form.addEventListener("submit", handleSubmit);

async function handleSubmit(e) {
  e.preventDefault();
 
  
  const {
    elements: { name, email, message },
  } = e.currentTarget;
 
    const data = {
        name: name.value,
        email: email.value,
        message: message.value
  }
  const lang = localStorage.getItem('language');

 
  
    if (data.email === '' || data.name === '' || data.message === '') {
      if (!lang) {
       Toastify({
  text: "Усі поля мають бути заповнені!",
  className: "info",
  style: {
     background: "red",
  }
}).showToast();
    return;
     }
    if (lang === 'uk') {
       Toastify({
  text: "Усі поля мають бути заповнені!",
  className: "info",
  style: {
     background: "red",
  }
}).showToast();
    return;
    } else {
         Toastify({
  text: "All fields must be filled!",
  className: "info",
  style: {
     background: "red",
  }
}).showToast();
    return;
  }
 
  }
  await addMessage(data);
  if (lang === 'uk') { 
  Toastify({
  text: "Дякуємо за Ваше замовлення!",
  className: "info",
  style: {
    background: "linear-gradient(to right, #00b09b, #96c93d)",
    
  }
}).showToast();
     e.currentTarget.reset();
  } else {
    Toastify({
  text: "Thank you for your order!",
  className: "info",
  style: {
    background: "linear-gradient(to right, #00b09b, #96c93d)",
    
  }
}).showToast();
     e.currentTarget.reset();
  }


}
