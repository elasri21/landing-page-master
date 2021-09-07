const clodeBtn = document.querySelector(".close")
const openBtn = document.querySelector(".open")
const nav = document.querySelector("nav")

openBtn.addEventListener("click", function(){
    this.style.display = "none";
    clodeBtn.style.display = "block";
    nav.style.transition = ".4s ease"
    nav.style.display = "block"
    
})
clodeBtn.addEventListener("click", function(){
    this.style.display = "none";
    nav.style.transition = ".4s ease"
    openBtn.style.display = "block";
    nav.style.display = "none"
})