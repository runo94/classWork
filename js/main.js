'use strict';


// let hOne = document.getElementsByClassName('item');

// function test() {
//     this.style.backgroundColor = '#ff0000'
// }

// for (let i = 0; i < hOne.length; i++) {
//     hOne[i].addEventListener('click', test)
// }


// console.log(this);


// let some = () => {
//     console.log(this);
// }


// function pow(x, n) {
//     if (n == 1) {
//         return x
//     } else {
//         console.log(n);
//         return x * pow(x, n - 1)
//     }
// }

// console.log(pow(2, 4));


// let arr = [
//     'asd',
//     123,
//     [213, 222, 'qwe']
// ]


// function newArr(array) {
//     for (let i = 0; i < array.length; i++) {
//         if (typeof array[i] === 'string') {
//             array[i] = array[i] + 'y';
//         } else if (Array.isArray(array[i])) {
//             array[i] = newArr(array[i])
//         }
//     }

//     return array;
// }

// console.log(newArr(arr));

let arrTwo = [3, 10, 22, 11, 43, 123];
let newArray = [];

function someName(array, i = 0) {

    if (i < array.length) {
        if (array[i] % 2 === 0) {
            newArray.push(array[i]);
        }
        someName(array, i + 1);
    }
    return newArray;


}

console.log(someName(arrTwo));