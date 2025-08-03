var pass = document.getElementById("password");
var msg = document.getElementById("message");
var strength = document.getElementById("strength");

pass.addEventListener("input", () =>{
    if(pass.value.length>0){
        msg.style.display = "block";
    }else{
        msg.style.display = "none";
    }
    if(pass.value.length<4){
        strength.innerHTML = "weak";
        pass.style.borderColor = "#ff5925";
        msg.style.color = "#ff5925";
    }else if(pass.value.length>=4 && pass.value.length<8){
        strength.innerHTML = "Medium"
        pass.style.borderColor = "yellow";
        msg.style.color = "yellow";
    }else{
        strength.innerHTML = "Hard"
        pass.style.borderColor = "#26d730";
        msg.style.color = "#26d730";
    }
})