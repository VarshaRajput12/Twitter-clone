// DOM elements

const mainPage = document.querySelector(".main_page");
const loginPage = document.querySelector(".login_page");
const middleContent = document.querySelector(".middle_content");
const btnTop = document.querySelector(".top_btn");
const newsFeedPage = document.querySelector(".feeds_page");



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
    const inputPassword = document.querySelector(".user_info");
     
    if(inputUserInfo.value !== "" && inputPassword.value !== ""){
        mainPage.style.display = "none"
        newsFeedPage.style.display = "block"
    }else{
        goToLoginPage()
    }

})