// exemplo da carteira de habilitação

var idade = 25
var idadeMinima = 18;

console.log('antes do if')
if(idade>=idadeMinima){
    console.log("pode tirar a carteira")
}
if(idade<idadeMinima){
    console.log("ainda não pode tirar a carteira")
}

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[fruits.length] = "asaaa";
fruits.push("sokdso");
console.log(fruits)