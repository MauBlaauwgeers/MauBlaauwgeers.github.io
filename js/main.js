let loginPage = document.querySelector(".login-page");
let loginbutton = document.querySelector(".login-login");
let closePage = document.querySelector(".login-close");
let logIn = document.querySelector(".inloggen");

logIn.addEventListener("click", showHideLogin);
closePage.addEventListener("click", showHideLogin);
loginbutton.addEventListener("click", loggingIn);

function showHideLogin() {
    let showHide = loginPage.style.display
    if (showHide == "block") {
        loginPage.style.display = "none"
    } else {
        loginPage.style.display = "block"
    }
}

let inputText = document.querySelector(".input-text")
let inputEmail = document.querySelector(".input-email")
let inputPassword = document.querySelector(".input-company")

function loggingIn() {
    if (inputText.value == "" || inputEmail.value == "" || inputPassword.value == "") {
        if (inputText.value == "") {
            inputText.style.border = "solid red 3px"
            setTimeout(function () {
                inputText.style.border = "solid #8c53ff 3px"
            }, 1000)
        }
        if (inputEmail.value == "") {
            inputEmail.style.border = "solid red 3px"
            setTimeout(function () {
                inputEmail.style.border = "solid #8c53ff 3px"
            }, 1000)
        }
        if (inputPassword.value == "") {
            inputPassword.style.border = "solid red 3px"
            setTimeout(function () {
                inputPassword.style.border = "solid #8c53ff 3px"
            }, 1000)
        }
    } else {
        showHideLogin()
        inputText.value = ""
        inputEmail.value = ""
        inputPassword.value = ""
    }
}