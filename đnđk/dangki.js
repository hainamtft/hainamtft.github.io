var button = document.getElementById("button");
button.addEventListener("click", getvalue);

function getvalue() {
    const name = document.getElementById("username").value;
    const gmail = document.getElementById("gmail").value;
    const pass = document.getElementById("pass").value;
    const sdt = document.getElementById("sdt").value;

    if (name === "" && gmail === "" && pass === "" && sdt === "") {
        alert("Vui lòng điền đầy đủ thông tin");
        return;
    }

    if (pass.length < 6) {
        alert("Mật khẩu phải trên 6 chữ số");
        return;
    }

    const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (!gmailRegex.test(gmail)) {
        alert("Email phải có @gmail.com");
        return;
    }

    if (sdt.length !== 10 && sdt.length !== 11) {
        alert("Số điện thoại sai định dạng");
        return;
    }

    // var dangky = {
    //     name: name,
    //     gmail: gmail,
    //     sdt: sdt,
    //     pass: pass
    // };
    // var json = JSON.stringify(dangky);
    // localStorage.setItem(name, json);
    alert("Tạo tài khoản thành công");
    location.href = "./dangnhap.html";
}