// let factorial = 1;
// for (let i = 1; i <= 8; i++) {
//     console.log(i);
//     factorial = factorial * i;
// }

// console.log(factorial);

// ******

// let factorial = 1;

// for (let i = 1; i <= 10; i++) {
//     factorial = factorial * i;
// }

// console.log(factorial);

// ******
// function factorial(Number) {

//     let fact = 1;
//     for (let i = 1; i <= Number; i++) {
//         fact = fact * i;
//     }
//     return fact;

// }

// let firstFactorial = factorial(12);
// console.log('Factorial of 12 is :', firstFactorial);


// while loop

// function getFactorial(Number) {

//     let factorial = 1;
//     let i = 1;
//     while (i <= Number) {
//         factorial = factorial * i;
//         i++;
//     }
//     return factorial;

// }

// let myFactorial = getFactorial(7);
// console.log(myFactorial);

// reverse while loop

// function getFactorial(Number) {
//     let factorial = 1;
//     let i = Number;
//     while (i >= 1) {
//         factorial = factorial * i;
//         i--;
//     }
//     return factorial;
// }

// let myFactorial = getFactorial(6);
// console.log(myFactorial);


// for loop reverse

let factorial = 1;

function getFactorial(Number) {
    for (let i = Number; i >= 1; i--) {
        factorial = factorial * i;
    }
    return factorial;
}

let myReverseFactorialNumber = getFactorial(6);
console.log(myReverseFactorialNumber);