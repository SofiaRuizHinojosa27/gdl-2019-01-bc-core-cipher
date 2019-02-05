


 function encode(){
  let num= parseInt(document.getElementById("num").value);
  //console.log(num);
   let text= document.getElementById("secret").value;
   let cifrado=window.cipher.encode(num,text);
   document.getElementById("resultado").innerHTML= cifrado;
   }

 //document.getElementById('btnD').addEventListener('click',encode);

function decode(){
  let num=parseInt(document.getElementById("numD").value);
  let text=document.getElementById("secretD").value;
  let descifrado=window.cipher.decode(num,text);
  document.getElementById("resultadoD").innerHTML= descifrado;
}
