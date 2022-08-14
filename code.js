
let miTexto;
miTexto = document.querySelector("#texto");
miMuneco = document.querySelector(".muneco")

let btnEncriptar =document.querySelector("#encript");
let btnDesEncriptar =document.querySelector("#desencript");

let cajaTexto = document.querySelector(".cajaTexto > h3");
let cajaTexto2 = document.querySelector(".cajaTexto > p");

function encriptar (texto){
    let valores = [/a/gi, /e/gi, /i/gi, /o/gi, /u/gi];
    const keys = ["rtta","pkde","lvri","hgdo","jkbu"];
    let textoEncript = texto;
    for (let i = 0; i < keys.length; i++) {
        textoEncript = textoEncript.replace(valores[i], keys[i]);
    }
    return textoEncript;
}

function desEncriptar (texto){
    let valores = ["a", "e", "i", "o", "u"];
    const keys = [/rtta/gi,/pkde/gi,/lvri/gi,/hgdo/gi,/jkbu/gi];
    let textoDeEncript = texto;
    for (let i = 0; i < keys.length; i++) {
        textoDeEncript = textoDeEncript.replace(keys[i], valores[i]);
    }
    return textoDeEncript;
}


btnEncriptar.addEventListener("click", ()=>{
    if(miTexto.value != ""){
        cajaTexto.innerHTML = "Mensaje Encriptado";
        cajaTexto2.innerHTML = encriptar(miTexto.value);
        miMuneco.style.display = "none";
    }else{
        miMuneco.style.display = "block";
        cajaTexto.innerHTML = "Ningun mensaje fue encontrado";
        cajaTexto2.innerHTML = "Ingrese el texto que desee encriptar o desencriptar";
    }

},false)


btnDesEncriptar.addEventListener("click", ()=>{
    if(miTexto.value != ""){
        cajaTexto.innerHTML = "Mensaje Desencriptado";
        cajaTexto2.innerHTML = desEncriptar(cajaTexto2.innerHTML);
        miMuneco.style.display = "none";
    }else{
        miMuneco.style.display = "block";
        cajaTexto.innerHTML = "Ningun mensaje fue encontrado";
    }

},false)