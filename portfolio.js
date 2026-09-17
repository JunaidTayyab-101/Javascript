let logo =document.querySelector(".logo");
let navbarbtn=document.querySelector(".navbar_btn");
let heroinfo=document.querySelector(".hero_info");
let heroimg=document.querySelector(".hero_img");
let skils=document.querySelector(".skils");
let contect=document.querySelector(".contect");
let project=document.querySelector(".project");
let lightBtn = document.querySelector("#lightBtn");
let darkBtn = document.querySelector("#darkBtn");

logo.addEventListener("click", function(){
    alert("This is a just logo :");

});
skils.addEventListener("click", function(){
    alert("My skils:");

});
contect.addEventListener("click", function(){
    alert("My contect:");

});
project.addEventListener("click", function(){
    alert("My basic projects:");

});
darkBtn.addEventListener("click", () => {
    document.body.classList.add("dark-mode");
    darkBtn.style.backgroundColor = "blue";
    lightBtn.style.backgroundColor = "";
});
lightBtn.addEventListener("click", () => {
    document.body.classList.remove("dark-mode");
    darkBtn.style.backgroundColor = "";
    lightBtn.style.backgroundColor = "blue";
});