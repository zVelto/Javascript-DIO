
function soma(n1, n2){
    return n1 + n2
}

function validaIdade(idade){
    if(idade >=18){
        return true
    }else{
        return false
    }
}

alert(soma(5, 10))
alert(validaIdade(prompt("Qual a sua idade?")))

/*
var d = new Date
alert(d.getMinutes())
*/

/*
var count
for(count = 0; count < 5; count++){
    console.log(count)
}
*/

/*
var count = 0
while(count <= 5){
    console.log(count)
    count++
}
*/

/*
var idade = prompt("Qual a sua idade?")
if(idade >= 18) {
    alert("Maior de idade")
}else{
    alert("Menor de idade")
}
*/

/*
var frutas = [{nome:"maçã", cor:"vermelha"},{nome:"uva", cor:"roxa"}]
console.log(frutas)
alert(frutas[1].cor)
*/

/*
var lista = ["maçã", "pêra", "laranja"]
lista.push("uva")
lista.pop()
console.log(lista)
console.log(lista.toString())
console.log(lista.join(" | "))
alert(lista[2])
*/

/*
var nome = "Welton Carvalho"
var n1 = 5
var n2 = 3
var frase = "Japão é o melhor time do mundo"
//alert(nome + " tem " + idade + " anos")
//alert(idade + idade2)
console.log(nome)
console.log(n1 * n2)
console.log(frase.toLowerCase())
//alert(frase.replace("Japão", "Brasil"))
*/