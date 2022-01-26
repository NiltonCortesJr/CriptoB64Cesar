// Armezanando o texto digitado pelo usuário
   var fraseDigitada = document.getElementById("entrada");


// Declarando variáveis
   var metodoCesar = document.getElementById("avanco");
   var metodo = document.getElementById("metodoEscolhido")


// variáveis do botao
   var codifica = document.getElementById("codificaMsg");
   var decodifica = document.getElementById("decodificaMsg");
   var botao = document.getElementById("rodaBotao");


// variáveis de Retorno da codificação / decodificação
   var resultado = document.getElementById("saida");
   var mensagemRetornada = "";


// Mudar a mensagem do botao
   codifica.addEventListener("click", function () {
      botao.textContent = "C o d i f i c a r"
   });

   decodifica.addEventListener("click", function () {
      botao.textContent = "D e c o d i f i c a r"
   });


// Ocultando o avanço se Base 64
   function funcaoSelect(valor) {
      
      if(valor == "2"){
         document.getElementById("casoCesar").style.display = "none";
      } else if(valor == "1"){
         document.getElementById("casoCesar").style.display = "flex";
         document.getElementById("casoCesar").style.flexDirection = "column";
      }
   }


//Validando o checkbox Codificar/Decodificar

   if(metodo.value == 1){
      if(codifica.checked ){
         mensagemRetornada = cifraDeCesar(fraseDigitada.value, metodoCesar.value);
         resultado.setAttribute("value",mensagemRetornada);
      }
      else{
         mensagemRetornada = decodicaCesar(fraseDigitada.value, metodoCesar.value);
         resultado.setAttribute("value",mensagemRetornada);
      }
   }   
   

   // Cofificando se Cifra de Cesar

   function cifraDeCesar (texto, adiciona){

      var adiciona = parseInt(adiciona);
      var armazenaMensagem = texto.toLowerCase();
      armazenaMensagem = armazenaMensagem.split("");
      var mensagemCriptografada = [];
      var cesar = [];

      //Percorrendo o tamanho da mensagem

      for (var i=0; i<armazenaMensagem.length; i++){
         var msg = armazenaMensagem[i].charCodeAt();
         if (msg != 32){ 
            mensagemCriptografada.push(((msg - 97 + adiciona) % 26) + 97);
         }
         else {
            mensagemCriptografada.push(msg);
         }
      }
      for (var j=0; j<mensagemCriptografada.length; j++){
         cesar.push(String.fromCharCode(mensagemCriptografada[j]));
      }
      return cesar.join("");
   }


   // Decofificando se Cifra de Cesar

   function decodicaCesar (texto, adiciona){

      var adiciona = parseInt(adiciona);
      var armazenaMensagem = texto.split("");
      armazenaMensagem = armazenaMensagem.toLowerCase();
      var mensagemCriptografada = [];
      var cesar = [];

      //Percorrendo o tamanho da mensagem

      for (var i=0; i<armazenaMensagem.length; i++){
         var msg = armazenaMensagem[i].charCodeAt();
         if (msg != 32){
            if ((msg - 97 + adiciona) >=0 ){
               mensagemCriptografada.push(((msg - 97 - adiciona) % 26) + 97);
            }
            else{
               mensagemCriptografada.push(((msg - 97 - adiciona) + 26) + 97);
            }
         }
         else {
            mensagemCriptografada.push(msg);
         }
      }
      for (var j=0; j<mensagemCriptografada.length; j++){
         cesar.push(String.fromCharCode(mensagemCriptografada[j]));
      }
      return cesar.join("");
   }
   
// Validando checkbox para Codificar / Decodificar

   // Se método Cifra de Cesar

   // Codificando

   if(metodo.value == 1){
      if(codifica.checked ){
         mensagemRetornada = cifraDeCesar(fraseDigitada.value, metodoCesar.value);
         resultado.setAttribute("value",mensagemRetornada);
      }
      
      // Decodificando

      else{
         mensagemRetornada = decodicaCesar(fraseDigitada.value, metodoCesar.value);
         resultado.setAttribute("value",mensagemRetornada);
      }
   }


   // Se método Base 64

      // Codificando Base 64

      else if(metodo.value == 2){
         if(codifica.checked ){
            //console.log("ola")
            mensagemRetornada = window.btoa(fraseDigitada.value);
            resultado.setAttribute("value",mensagemRetornada);
         } 

      // Decodificando Base 64 
      
      else {
         mensagemRetornada = window.atob(fraseDigitada.value);
         resultado.setAttribute("value",mensagemRetornada);
      }
   }


// Clicando no botão

   document.getElementById("rodaBotao").addEventListener("click", function(event){
      event.preventDefault();
   });

// Fim do Código JavaScript