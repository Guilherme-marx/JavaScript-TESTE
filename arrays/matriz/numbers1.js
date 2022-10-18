const numbers1 = [45, 5, 9, 14, 25];
const numbers2 = numbers1.map(myFunction);
function myFunction(value, _index, _array) {
    return value * 2;
}
const numbers3 = [45, 5 ,9, 14, 25]
const numbers4 = numbers1.map(myFunction);

function myFunction(value){
    return value *2;
}
