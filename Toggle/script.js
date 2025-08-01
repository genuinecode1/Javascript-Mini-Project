let btn = document.getElementById("btn");
let btn_text = document.getElementById("btn-text");
let btn_icon = document.getElementById("btn-icon");
let logo = document.getElementById("logo");


btn.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        btn_icon.src = "images/sun.png";
        btn_text.innerHTML = "Light"
        logo.src = "/images/logo-white.png"
    }else{
        btn_icon.src = "images/moon.png";
        btn_text.innerHTML = "Dark"
        logo.src = "/images/logo.png"
    }
}