//Relleno un array con numeros del 0 al 10 pero sin que aparesca el 0

/* 
let array = [];

for(let i=1; i<=10;i++){
    array.push(i);
}

console.log(array);

 */

// los mismo que el anterior pero con numeros aleatorios del 1 al 50

function generar_random (min , max){
    return Math.floor(Math.random()* (max-min)) + min;
}

let array = [];

for(let i=1; i<=10;i++){
    array.push(generar_random(1,50));
}

console.log(array);