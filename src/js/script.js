
let slideElement = document.querySelector("#slide"); 
let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#value");
let thePassword = document.querySelector("#thePassword");

let containerPassword = document.querySelector("#containerPassword");

let charset = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz1234567890!#$%&?@";
let newPassword = '';

sizePassword.innerHTML = slideElement.value;

slideElement.oninput = function(){
    sizePassword.innerHTML = this.value;
}

function generatePassword(){

    let pass = '';
    for(i = 0, n = charset.length; i < slideElement.value; ++i){
        pass += charset.charAt(Math.floor(Math.random() * n));
}
    console.log(pass)
    containerPassword.classList.remove("hide")
    thePassword.innerHTML = pass;
    newPassword = pass;
}
function copyPassword(){
    alert("Senha copiada")
    navigator.clipboard.writeText(newPassword);
}

