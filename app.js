const login = document.querySelector(".left-nav");
const signUp = document.querySelector(".right-nav");


const loginForm = document.querySelector('.login-form');
const signupForm = document.querySelector('.signup-form');

signUp.addEventListener("click", () => {
    loginForm.classList.toggle("active")
    signupForm.classList.toggle("active")
})

login.addEventListener("click", () => {
    signupForm.classList.toggle("active")
    loginForm.classList.toggle("active") 
})

signUp.addEventListener("click", () => {
    signUp.classList.add("active");
    login.classList.add("active");
})

login.addEventListener("click", () => {
    login.classList.remove("active");
    signUp.classList.remove("active");
})