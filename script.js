// DOM elements

const mainPage = document.querySelector(".main_page");
const loginPage = document.querySelector(".login_page");
const middleContent = document.querySelector(".middle_content");
const btnTop = document.querySelector(".top_btn");
const newsFeedPage = document.querySelector(".feeds_page");
const loginModal = document.querySelector(".login_modal");
const modalLX = document.querySelector(".login_modal i");
const loginFormBtn = document.querySelector(".login_form_btn");



const goToLoginPage = ()=>{
    mainPage.style.display = "none"
    loginPage.style.display = "grid"
}

middleContent.addEventListener("click", (e)=>{
    if(e.target.classList[1] === "main_btn" ){
        goToLoginPage()
    }
});

btnTop.addEventListener("click", ()=>{
    const inputUserInfo = document.querySelector(".user_info");
    const inputPassword = document.querySelector(".password");
     
    if(inputUserInfo.value !== "" && inputPassword.value !== ""){
        mainPage.style.display = "none"
        newsFeedPage.style.display = "block"
    }else{
        goToLoginPage()
        loginModal.style.display = "block"
    }

})

// login page
modalLX.addEventListener("click", ()=> {
    loginModal.style.display = "none"
})

loginFormBtn.addEventListener("click",)


loginFormBtn.addEventListener("click", ()=>{
    const login_user_info = document.querySelector(".login_user_info");
    const login_password = document.querySelector(".login_password");
     
    if(login_user_info.value !== "" && login_password.value !== ""){
        loginPage.style.display = "none"
        newsFeedPage.style.display = "block"
    }else{
        goToLoginPage()
        loginModal.style.display = "block"
    }

})