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

let mensaje = document.getElementById("mensaje");
let resultado = document.getElementById("resultado");
let botonCopiar = document.getElementById("boton-copiar");
let botonEncriptar = document.getElementById("boton-encriptar");
let botonDesencriptar = document.getElementById("boton-desencriptar");

botonEncriptar.addEventListener("click",()=>{
    document.getElementById("resultado").value = encriptar(mensaje.value);

    if (resultado.value === "") {
        document.getElementById("resultado").style.display="none";
        document.querySelector(".imagen").style.display="inline-block";
    } else {
        document.querySelector(".imagen").style.display="none";
        document.getElementById("resultado").style.display="inline-block";
    }
});

botonDesencriptar.addEventListener("click",()=>{
    document.getElementById("resultado").value = desencriptar(mensaje.value);

    if (resultado.value === "") {
        document.getElementById("resultado").style.display="none";
        document.querySelector(".imagen").style.display="inline-block";
    } else {
        document.querySelector(".imagen").style.display="none";
        document.getElementById("resultado").style.display="inline-block";
    }
})

botonCopiar.addEventListener("click",()=>{
    resultado.removeAttribute("disabled");
    navigator.clipboard.writeText(resultado.value);
})

