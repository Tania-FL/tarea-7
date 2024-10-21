// Ejercicio 1 : Bucle for para imprimir todos los números pares del 1 al 100

// for (let i = 1; i <= 100; i++){
//     if (i % 2 == 0){
//     console.log(i);
//     }

// }

//Ejercicio 2: Escribe un programa que determine si un número es par o impar. 
// Si el número es par, imprime "El número es par", de lo contrario, imprime "El número es impar".

// function determinarPar(numero){
//     if (numero % 2 == 0){
//         console.log("El número es par");
//     } else {
//         console.log("El número es impar");
//     }
// }
// determinarPar(100);
// determinarPar(43);

// Ejercicio 3
// Escribe un programa que imprima los números del 1 al 100, pero si el número es divisible por 3, 
// imprime "Fizz" en su lugar, y si el número es divisible por 5, imprime "Buzz". 
// Si el número es divisible por ambos, 3 y 5, imprime "FizzBuzz".

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

