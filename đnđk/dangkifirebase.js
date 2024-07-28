// import { Firebase } from "./firebase.js";
// const firebase = new Firebase();

// async function handleSubmitLogin(e) {
//   e.preventDefault(); 

//   const email = document.getElementById("email").value;
//   const pass = document.getElementById("pass").value;

//   try {
//     await firebase.login(email, pass);
//   } catch (error) {
//     alert("Lỗi: " + error.message); 
//   }
// }

// document.getElementById("form").addEventListener("submit", handleSubmitLogin);

import { Firebase } from "./firebase.js";

const firebase = new Firebase();

document.addEventListener("DOMContentLoaded", () => {

  async function handleSubmitLogin(e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const pass = document.getElementById("pass").value;

    try {
      await firebase.login(email, pass);
      alert("Đăng nhập thành công!");
    } catch (error) {
      alert("Lỗi: " + error.message);
    }
  }

  document.getElementById("form").addEventListener("submit", handleSubmitLogin);
});
