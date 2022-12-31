// DOM elements

const mainPage = document.querySelector(".main_page");
const loginPage = document.querySelector(".login_page");
const middleContent = document.querySelector(".middle_content");
const btnTop = document.querySelector(".top_btn");
const newsFeedPage = document.querySelector(".feeds_page");
const loginModal = document.querySelector(".login_modal");
const modalX = document.querySelector(".login_modal i");
const loginFormBtn = document.querySelector(".login_form_btn");
const post_btn = document.querySelector(".post_btn");
const modal_wrapper = document.querySelector(".modal_wrapper");
const modal = document.querySelector(".modal");
const postModalX = document.querySelector(".modal_header i");
const postModalBtn = document.querySelector(".modal_header button");
const postFooterPlus = document.querySelector(".modal_footer span");
const modal_input = document.querySelector(".modal_input");
const user = document.querySelector(".user");
const sidebar = document.querySelector(".sidebar");
const sidebar_wrapper = document.querySelector(".sidebar_wrapper");
const xBtn = document.querySelector(".sidebar_header i");
const toggle = document.querySelector(".toggle");
const circle = document.querySelector(".circle");

const goToLoginPage = () => {
  mainPage.style.display = "none";
  loginPage.style.display = "grid";
};

middleContent.addEventListener("click", (e) => {
  if (e.target.classList[1] === "main_btn") {
    goToLoginPage();
  }
});

btnTop.addEventListener("click", () => {
  const inputUserInfo = document.querySelector(".user_info");
  const inputPassword = document.querySelector(".password");

  if (inputUserInfo.value !== "" && inputPassword.value !== "") {
    mainPage.style.display = "none";
    newsFeedPage.style.display = "block";
  } else {
    goToLoginPage();
    loginModal.style.display = "block";
  }
});

// login page
modalX.addEventListener("click", () => {
  loginModal.style.display = "none";
});

loginFormBtn.addEventListener("click", () => {
  const login_user_info = document.querySelector(".login_user_info");
  const login_password = document.querySelector(".login_password");

  if (login_user_info.value !== "" && login_password.value !== "") {
    loginPage.style.display = "none";
    newsFeedPage.style.display = "block";
  } else {
    goToLoginPage();
    loginModal.style.display = "block";
  }
});

// news feed page
// post modal

post_btn.addEventListener("click", () => {
  modal.style.display = "block";
  modal_wrapper.classList.add("modal_wrapper_display");

  if (modal_input.value !== "") {
    modal_input.value = "";
    changeOpacity(0.4);
  }
});

const changeOpacity = (x) => {
  postModalBtn.style.opacity = x;
  postFooterPlus.style.opacity = x;
};

postModalX.addEventListener("click", () => {
  modal.style.display = "none";
  modal_wrapper.classList.remove("modal_wrapper_display");
});

modal_input.addEventListener("keypress", (e) => {
  if (e.target.value !== "") {
    changeOpacity(1);
  }
});

modal_input.addEventListener("blur", (e) => {
  if (e.target.value === "") {
    changeOpacity(0.4);
  }
});

// sidebar

user.addEventListener("click", () => {
  sidebar_wrapper.classList.add("sidebar_wrapper_display");
});

xBtn.addEventListener("click", () => {
  sidebar_wrapper.classList.remove("sidebar_wrapper_display");
});

// dark mode

const darkElements1 = document.querySelectorAll(".dark_mode1");
const darkElements2 = document.querySelectorAll(".dark_mode2");
const lightTexts = document.querySelectorAll(".light_text");
const borders = document.querySelectorAll(".border");

toggle.addEventListener("click", () => {
  circle.classList.toggle("move");
  Array.from(darkElements1).map((ele1) => {
    ele1.classList.toggle("dark1");
  });
  Array.from(darkElements2).map((ele2) => {
    ele2.classList.toggle("dark2");
  });
  Array.from(lightTexts).map((light_ele) => {
    light_ele.classList.toggle("light");
  });
  Array.from(borders).map((border) => {
    border.classList.toggle("border-color");
  });
});
