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
    console.log(textoEncriptado);
}
encriptar("Dialogo boeno");

function desencriptar(mensaje) {
    let texto = mensaje;
    let textoDesencriptado = texto.replace(/ufat/g, "u")
    .replace(/ober/g, "o")    
    .replace(/ai/g, "a")
    .replace(/imes/g, "i")
    .replace(/enter/g, "e");
    console.log(textoDesencriptado);
}

desencriptar("Dimesailobergober boberenternober")