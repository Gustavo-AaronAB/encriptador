var botonEncriptar = document.querySelector(".boton_encriptar");
var botonDesencriptar = document.querySelector(".boton_desencriptar");
var figura = document.querySelector(".contenedor_figura");
var contenedor = document.querySelector(".contenedor_resultado");
var resultado = document.querySelector(".texto_resultado");

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

function encriptar() {
    ocultarAdelante();
    var cajaTexto = recuperarTexto();
    resultado.textContent = encriptarTexto(cajaTexto);
}

function desencriptar() {
    ocultarAdelante();
    var cajaTexto = recuperarTexto();
    resultado.textContent = desencriptarTexto(cajaTexto);
}

function recuperarTexto() {
    var cajaTexto = document.querySelector(".caja_texto");
    return cajaTexto.value;
}

function ocultarAdelante() {
    figura.classList.add("ocultar"); 
    contenedor.classList.remove("ocultar"); 
}

function encriptarTexto(mensaje) {
    var texto = mensaje;
    var textoFinal = "";

    for (var i = 0; i < texto.length; i++) {
        if (texto[i] == "a") {
            textoFinal += "ai";
        } else if (texto[i] == "e") {
            textoFinal += "enter";
        } else if (texto[i] == "i") {
            textoFinal += "imes";
        } else if (texto[i] == "o") {
            textoFinal += "ober";
        } else if (texto[i] == "u") {
            textoFinal += "ufat";
        } else {
            textoFinal += texto[i];
        }
    }
    return textoFinal;
}

function desencriptarTexto(mensaje) {
    var texto = mensaje;
    var textoFinal = "";

    for (var i = 0; i < texto.length; i++) {
        if (texto[i] == "a") {
            textoFinal += "a";
            i += 1;
        } else if (texto[i] == "e") {
            textoFinal += "e";
            i += 4;
        } else if (texto[i] == "i") {
            textoFinal += "i";
            i += 3;
        } else if (texto[i] == "o") {
            textoFinal += "o";
            i += 3;
        } else if (texto[i] == "u") {
            textoFinal += "u";
            i += 3;
        } else {
            textoFinal += texto[i];
        }
    }
    return textoFinal;
}

var botonCopiar = document.querySelector(".boton_copiar"); 
botonCopiar.addEventListener("click", function() {
    var contenido = document.querySelector(".texto_resultado").textContent;
    navigator.clipboard.writeText(contenido);
});
