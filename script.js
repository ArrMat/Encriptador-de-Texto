//La letra "a" es convertida para "ai"
//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

function encriptar(mensaje) {
    let texto = mensaje;
    let textoEncriptado = texto.replace(/e/g, "enter")
    .replace(/i/g, "imes")    
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
    return textoEncriptado;
}

function desencriptar(mensaje) {
    let texto = mensaje;
    let textoDesencriptado = texto.replace(/ufat/g, "u")
    .replace(/ober/g, "o")    
    .replace(/ai/g, "a")
    .replace(/imes/g, "i")
    .replace(/enter/g, "e");
    return textoDesencriptado;
}

let mensaje = document.querySelector(".mensaje textarea");
let resultado = document.querySelector(".resultado textarea");
let botonCopiar = document.getElementById("boton-copiar");
let botonEncriptar = document.getElementById("boton-encriptar");
let botonDesencriptar = document.getElementById("boton-desencriptar");

botonEncriptar.addEventListener("click",()=>{
    document.querySelector(".resultado textarea").value = encriptar(mensaje.value);});

botonDesencriptar.addEventListener("click",()=>{
    document.querySelector(".resultado textarea").value = desencriptar(mensaje.value);
})

botonCopiar.addEventListener("click",()=>{
    resultado.removeAttribute("disabled");
    navigator.clipboard.writeText(resultado.value);
    alert("texto copiado");
} )