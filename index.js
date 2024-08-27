const sign_in_btn = document.getElementById("sign-in-btn");
const sign_up_btn = document.getElementById("sign-up-btn");
const container = document.querySelector(".container");
const submit=document.getElementById("submit")

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
  console.log("jjj")

});

sign_in_btn.addEventListener("click", () => {

  container.classList.remove("sign-up-mode");

});



submit.addEventListener("click",async()=>{
    const name=document.getElementById("user-name")
    const password=document.getElementById("user-password")
    const encodedPassword = btoa(password.value);
    localStorage.setItem("name",name.value)
    sessionStorage.setItem("name",name.value)
    localStorage.setItem("password",encodedPassword)
    sessionStorage.setItem("password",encodedPassword)  
        
    
    name.value=""
    password.value=""



})