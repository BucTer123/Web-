const usr = document.getElementById("username");
const psw = document.getElementById("password");
const login = document.getElementById("log");

login.addEventListener("click", function () {
    if (usr.value === "" || psw.value === "") {
        window.alert("ERROR!: Write login and password");
    } else {
        window.open("main.html");
    }
})