import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyCRWIVlXQnEwuBR67ggUulOZCMPYThZ3nY",
    authDomain: "hnam-1a67b.firebaseapp.com",
    databaseURL: "https://hnam-1a67b-default-rtdb.firebaseio.com",
    projectId: "hnam-1a67b",
    storageBucket: "hnam-1a67b.appspot.com",
    messagingSenderId: "1023573683053",
    appId: "1:1023573683053:web:229a2a9495b4fb25064864",
    measurementId: "G-5DGX9B37FM"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

document.getElementById("button").addEventListener('click', function(e) {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const gmail = document.getElementById("gmail").value;
    const phonenumber = document.getElementById("sdt").value;

    set(ref(db, 'user/' + username), {
        username: username,
        gmail: gmail,
        phonenumber: phonenumber
    })
    .then(() => {
        alert("Đăng ký thành công!");
    })
    .catch((error) => {
        alert("Lỗi: " + error.message);
    });
});
