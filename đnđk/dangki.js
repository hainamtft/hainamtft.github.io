// var button = document.getElementById("button");
// button.addEventListener("click", getvalue);

// function getvalue() {
//     const name = document.getElementById("username").value;
//     const gmail = document.getElementById("gmail").value;
//     const pass = document.getElementById("pass").value;
//     const sdt = document.getElementById("sdt").value;

//     if (name === "" && gmail === "" && pass === "" && sdt === "") {
//         alert("Vui lòng điền đầy đủ thông tin");
//         return;
//     }

//     if (pass.length < 6) {
//         alert("Mật khẩu phải trên 6 chữ số");
//         return;
//     }

//     const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
//     if (!gmailRegex.test(gmail)) {
//         alert("Email phải có @gmail.com");
//         return;
//     }

//     if (sdt.length !== 10 && sdt.length !== 11) {
//         alert("Số điện thoại sai định dạng");
//         return;
//     }

//     // Swal.fire({
//     //     title: "The Internet?",
//     //     text: "That thing is still around?",
//     //     icon: "success"
        
//     //   });
   
//       function sleep(ms) {
//         return new Promise(resolve => setTimeout(resolve, ms));
//       }
      
//       async function showAlert() {
//         await Swal.fire({
//           title: "The Internet?",
//           text: "That thing is still around?",
//           icon: "success"
//         });
      
     
//         await sleep(2000);
      
       
//         console.log("The alert was shown and 2 seconds have passed");
//       }
      
     
//       showAlert();
//     location.href = "./dangnhap.html";
// }
