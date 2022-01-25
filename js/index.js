const alfabeto = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

//armezanando o texto digitado pelo usuário
// var digitado = prompt("Digite o texto a ser Codificado / Decodificado: ")

// declarando as variáveis
// var fraseDigitada = document.getElementById("entrada");

// var codifica = document.getElementById("codifica");

// var decodifica = document.getElementById("decodifica");

var metodo = document.getElementById("metodoEscolhido");

// var metodoCesar = document.getElementById("avanco");

// var botao = document.getElementById("rodarBotao");

// var resultado = document.getElementById("digitavel")
// var resposta = ""


const rango = document.getElementById('rango');
// testando avanço - rango
console.log(parseInt(rango.value));



// Codificando em Base 64

var emBase64 = btoa(digitado);
console.log(emBase64);


// Decodificando para string

var deBase64 = atob(digitado);
console.log(deBase64);

metodo.addEventListener("change", function(){
    if (metodo.value == "1"){
       document.getElementById("seCesar").style.display = "block"
    }
    else{
       document.getElementById("seCesar").style.display = "none"
    }
 } )


