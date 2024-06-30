var login = document.getElementById("button");
login.addEventListener("click", getvalue);

function getvalue() {
    let gmail = document.getElementById("gmail").value;
    let password = document.getElementById("pass").value;
    let sdt = document.getElementById("sdt").value;
    let user = localStorage.getItem('gmail');
    let repass = document.getElementById("repass");
    var data = JSON.parse(user);

    if (user == null) {
        alert("Sai thông tin");
    } else if (gmail == data.gmail && password == data.pass && sdt == sdt.data && pass === repass ) {
        alert("Đăng nhập thành công");
        location.href = "../html/index.html";
    } else {
        alert("Đăng nhập thất bại");
    }
}