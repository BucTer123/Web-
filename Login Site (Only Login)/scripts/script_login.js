const usr = document.getElementById("username_input");
const psw = document.getElementById("password_input");
const btn = document.getElementById("button_login");

btn.addEventListener("click", function () {
    if (psw.value === "" || usr.value === "") {
        window.alert("ERROR!");
        window.alert("Write username and password !");
    } else {
        window.open("main_file/main.html");
    }
})