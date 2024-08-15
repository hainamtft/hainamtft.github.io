// import { Firebase } from "./firebase.js";

// const firebase = new Firebase();

// function sleep(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

// async function handleSubmitSignup(e) {
//   e.preventDefault();
//   const email = document.getElementById("emailSignup").value;
//   const password = document.getElementById("passwordSignup").value;

//   console.log("Email:", email);
//   console.log("Password:", password);

//   if (!email || !password) {
//     Swal.fire({
//       text: "Please enter both email and password.",
//       icon: "warning",
//     });
//     return;
//   }

//   try {
//     await firebase.register(email, password);
//     Swal.fire({
//       text: "Đăng nhập thành công",
//       icon: "success",
//     });
//     await sleep(5000);
//     window.location.href = "./dangki.html";
//   } catch (error) {
//     Swal.fire({
//       text: error.message,
//       icon: "error",
//     });
//     await sleep(5000);
//   }
// }

// document.getElementById("form").addEventListener("submit", handleSubmitSignup);
import { Firebase } from "./firebase.js";

const firebase = new Firebase();

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function handleSubmitSignup(e) {
  e.preventDefault();
  const email = document.getElementById("emailSignup").value;
  const password = document.getElementById("passwordSignup").value;

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
    await firebase.register(email, password);
    Swal.fire({
      text: "Đăng ký thành công",
      icon: "success",
    });
    await sleep(5000);
    window.location.href = "./dangnhap.html";
  } catch (error) {
    Swal.fire({
      text: error.message,
      icon: "error",
    });
    await sleep(5000);
  }
}

document.addEventListener('DOMContentLoaded', (event) => {
  document.getElementById("form").addEventListener("submit", handleSubmitSignup);
});