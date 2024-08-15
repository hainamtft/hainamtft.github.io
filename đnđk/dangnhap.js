// var login = document.getElementById("button");
// login.addEventListener("click", getvalue);

// function getvalue() {
//     let gmail = document.getElementById("gmail").value;
//     let password = document.getElementById("pass").value;
//     let sdt = document.getElementById("sdt").value;
//     let user = localStorage.getItem('gmail');
//     let repass = document.getElementById("repass");
//     var data = JSON.parse(user);

//     if (user == null) {
//         alert("Sai thông tin");
//     } else if (gmail == data.gmail && password == data.pass && sdt == sdt.data && pass === repass ) {
//         alert("Đăng nhập thành công");
//         location.href = "../html/index.html";
//     } else {
//         alert("Đăng nhập thất bại");
//     }
// }

import { Firebase } from "./firebase.js";

const firebase = new Firebase();

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function handleSubmitSignin(e) {
  e.preventDefault();
  const email = document.getElementById("emailSignin").value;
  const password = document.getElementById("passwordSignin").value;

  console.log("Email:", email);
  console.log("Password:", password);

  if (!email || !password) {
    Swal.fire({
      text: "Please enter both email and password.",
      icon: "warning",
    });
    return;
  }

  try {
    await firebase.login(email, password);
    Swal.fire({
      text: "Đăng nhập thành công",
      icon: "success",
    });
    await sleep(5000);
    window.location.href = "../spck/trang1.html";
  } catch (error) {
    Swal.fire({
      text: error.message,
      icon: "error",
    });
    await sleep(5000);
  }
}

document.addEventListener('DOMContentLoaded', (event) => {
  document.getElementById("form").addEventListener("submit", handleSubmitSignin);
});