document.getElementById('demo').style.fontSize='32px';

//A palavra-chave consté um pouco enganosa. Não define um valor constante. Ele define uma referência constante a um valor.
/* por isso não se pode
Reatribuir um valor constante
Reatribuir uma matriz constante
Reatribuir um objeto constante

Mas você pode:

Altere os elementos da matriz constante
Alterar as propriedades do objeto constante*/

const cars2 =["saab",'volvo','bmw'];
//pode mudar um elemento
console.log(cars2[0]);
cars2[0] = "Bruno";
console.log(cars2)