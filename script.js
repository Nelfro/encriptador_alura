let input = document.querySelector(".text-area");
let output = document.querySelector(".body-output-card-text");
let btnEncriptar = document.getElementById("btn-encriptar");
let btnDesencriptar = document.getElementById("btn-desencriptar");
let btnCopiar = document.getElementById("btn-copiar");
let hidding = document.getElementById("face");
let showing = document.getElementById("to-show");

input.focus();

function encriptar(){
    let textMod = input.value.replace(/(a|e|i|o|u)/g,
    function(match){
    if(match == "a"){return "ai";
    } else if(match == "e"){return "enter";
    } else if(match == "i"){return "imes";
    } else if(match == "o"){return "ober";
    } else if(match == "u"){return "ufat";
    } else{
        return match;
    }
});
return textMod;
}

function desencriptar(){
    let textMod = input.value.replace(/(ai|enter|imes|ober|ufat)/g,
    function(match){
    if(match == "ai"){return "a";
    } else if(match == "enter"){return "e";
    } else if(match == "imes"){return "i";
    } else if(match == "ober"){return "o";
    } else if(match == "ufat"){return "u";
    } else{
        return match;
    }
});
return textMod;
}

function acceptedText (){
    const pattern = /[a-zñ\d\s]/g
    const nonPattern = /[^a-zñ\d\s]/
    accepted = pattern.test(input.value);
    notaccepted = nonPattern.test(input.value);
    if(accepted == true && notaccepted == false){
        return true;
    } else{
        alert("Por favor introduzca caracteres validos");
    }
}

function copiarTexto(){
    navigator.clipboard.writeText(output.innerText);
    alert("Se copio!");
}


function mostrarTexto(){
    hidding.classList.add("to-hide");
    showing.classList.remove("to-hide");
}

function ocultarTexto(){
    hidding.classList.remove("to-hide");
    showing.classList.add("to-hide");
}

function textHeight(){
    if(window.innerWidth <= 1250){
        let lines = input.value.split("\n").lenght;
        input.style.height = (lines*36) + "px";
    } else{
        input.style.removeProperty("height");
    };
}
input.addEventListener("input", textHeight);
window.addEventListener("resize", textHeight);

btnEncriptar.addEventListener("click", function(){
    if(input.value == ""){
        hideText();
    } else if(acceptedText() == true){
        output.innerText = encriptar();
        mostrarTexto();
    }
});

btnDesencriptar.addEventListener("click", function(){
    if(input.value == ""){
        hideText();
    } else if(acceptedText() == true){
        output.innerText = desencriptar();
        mostrarTexto();
    }
});

btnCopiar.addEventListener("click", copiarTexto);