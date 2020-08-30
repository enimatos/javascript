

function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigada por clicar</b>";
    // alert("obrigada por clicar");
}

function redirecionar(){
    // window.open("https://digitalinnovation.one/");
    window.location.href = "https://digitalinnovation.one/";
}

// function trocar(){
//     document.getElementById("mousemove").innerHTML = "Obrigada por passar o mouse.";
//     // alert("trocar texto");
// }
function trocar(elemento){
    elemento.innerHTML = "Obrigada por passar o mouse.";
}
// function voltar(){
//     document.getElementById("mousemove").innerHTML = "Passe o mouse aqui.";
// }
function voltar(elemento){
     elemento.innerHTML = "Passe o mouse aqui.";
 }

 function load(){
     alert("pagina carregada");
 }

 function funcaoChange(elemento){
     console.log(elemento.value);
 }

var a = prompt("Digite a quantidade de pimentões vermelhos");
var b = prompt("Digite a quantidade de pimentões amarelos");

a = parseInt(a),
b = parseInt(b);

total = a+ b;
// let line = gets().split(" ");
// let A = parseInt(line[0]);
// let B = parseInt(line[1]);
// let total = 0; // Altere o valor da variável com o cálculo esperado
console.log("X = " + total);
// function soma(n1,n2){
//     return n1 + n2;
// }

// var validar = 0;
// function validarIdade(idade){
//     if(idade >=18){
//         validar = true
//     }else{
//         validar = false
//     }
//     return validar;
// }

// var idade = prompt("Qual sua idade? ");
// console.log(validarIdade(idade));
// alert(soma(3,7));

// var d = new Date();
// alert(d.getMonth()+1);
// alert(d.getUTCHours());
// alert(d.getDay());
// alert(d.getMinutes());

// var count;
// for(count=0; count <= 5; count++){
//     alert(count);
// };


// var count = 0;
// while (count <= 5){
//     alert(count);
//     console.log(count);
//     count ++;
// };



// idade = prompt("Digite sua idade: ");

// if (idade > 18){
//     alert("maior de idade");
// }else{
//     alert("menor de idade");
// };


// var frutas = [{nome: "maçã", cor: "vermelha"},{nome: "uva", cor: "roxa"}]
// console.log(frutas);
// alert(frutas[1].nome);


// var fruta = {nome: "maçã", cor: "vermelha"}
// console.log(fruta);
// console.log(fruta.nome);
// alert(fruta.cor);

// var lista = ["maçã","pêra","laranja"];
// lista.pop(); // retira último elementa da lista
//  lista.push("uva");  //acrescenta na lista
// console.log(lista.length);
// console.log(lista.reverse());
// console.log(lista[2]);
// console.log(lista);
// console.log(lista.toString());
// console.log(lista.join(" - "));

// alert(lista[1]);
/*var nome = "Elaine Matos";
var idade = 40;
var idade2 = 10;
var frase = "Japão é o melhor time do mundo"
//alert(nome + " tem " + idade + " anos");
//alert(idade + idade2);
console.log(nome);
console.log(idade);
console.log(frase.replace("Japão","Brasil"));
alert(frase.replace("Japão", nome));*/
