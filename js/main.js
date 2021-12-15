'use strict';

// function Calculator() {
//     this.a;
//     this.b;

//     this.read = () => {
//         this.a = +prompt('a');
//         this.b = +prompt('b');
//     }

//     this.sum = () => this.a + this.b;
//     this.mult = () => this.a * this.b;
// }

// let calculator = new Calculator();

// calculator.read();

// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mult() );


// function Accumulator(value) {

//     this.value = value;

//     this.read = () => this.value += this.value + Number(prompt('???'))
// }

// let accumulator = new Accumulator(1);

// accumulator.read();
// accumulator.read();

// alert(accumulator.value);

// function h(x) {
//     return x + 1;
// }
// // g(x) = x^2
// // number -> number
// function g(x) {
//     return x * x;
// }
// // f(x) = convert x to string
// // number -> string
// function f(x) {
//     return x.toString();
// }


// console.log(f(g(h(1))));

// function dot(vector1, vector2) {
//     return vector1.reduce((sum, element, index) => sum += element * vector2[index], 0);
// }
// const v1 = [1, 3, -5];
// const v2 = [4, -2, -1];

// console.log(dot(v1, v2));

// function curriedDot(vector1) {
//     return function (vector2) {
//         return vector1.reduce((sum, element, index) => sum += element * vector2[index], 0);
//     }
// }
// // Taking the dot product of any vector with [1, 1, 1]
// // is equivalent to summing up the elements of the other vector.
// const sumElements = curriedDot([1, 1, 1]);

// console.log(sumElements([1, 3, -5])); // -1
// console.log(sumElements([4, -2, -1])); // 1


const giveMe3 = R.curry(function (item1, item2, item3) {
    return `
      1: ${item1}
      2: ${item2}
      3: ${item3}
    `;
});
const giveMe2 = giveMe3(R.__, R.__, 'French Hens');   // Specify the third argument.
const giveMe1 = giveMe2('Partridge in a Pear Tree');  // This will go in the first slot.
const result = giveMe1('Turtle Doves');               // Finally fill in the second argument.
console.log(result);