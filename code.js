
let miTexto;
miTexto = document.querySelector("#texto");

let btnEncriptar =document.querySelector("#encript");

let cajaTexto = document.querySelector(".cajaTexto > h3");
let cajaTexto2 = document.querySelector(".cajaTexto > p");


btnEncriptar.addEventListener("click", ()=>{
    if(miTexto.value != ""){
        cajaTexto.innerHTML = "Mensaje Encriptado";
        cajaTexto2.innerHTML = miTexto.value;
    }

},false)