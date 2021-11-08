//HW///

/////////////////////////////////////////////4
// let arr = [];
// for (let i = 0; i < 3; i++) {

//     let val = prompt();


//     if (val === null || val === '') {
//         alert("canceled")
//         break;
//     } else {
//         arr.push(val);
//         if (arr.length == 3) {
//             alert(`your value 1 is ${arr[0]}\nyour value 2 is ${arr[1]}\nyour value 3 is ${arr[2]}`)
//         }
//     }
// }
// console.log(arr)


/////////////////////////////////////////////4
// let arr = [];

// for (let i = 1; i > 0; i++) {

//     let val = prompt();

//     if (val === null || val === '') {
//         alert("canceled");
//     } else {
//         arr.push(val);
//         if (arr.length == 3) {
//             alert(`your value 1 is ${arr[0]}\nyour value 2 is ${arr[1]}\nyour value 3 is ${arr[2]}`);
//             break;
//         }
//     }
// }

// console.log(arr)


//////////HW//////////////



// let arr = []

// for (let i = 1; i > 0; i++) {

//     arr.unshift(prompt("Ввведите кодовое слово, пожалуйста!").toLowerCase());

//     if (arr[0] === 'горошинка') {
//         let name = arr.shift();
//         alert(`Добро пожаловать принцесса ${name}!`);
//         console.log(arr);
//         break;
//     }
// }


// var myFish = ['angel', 'clown', 'mandarin', 'sturgeon','angel', 'clown', 'mandarin', 'sturgeon','angel', 'clown', 'mandarin', 'sturgeon','angel', 'clown', 'mandarin', 'sturgeon','angel', 'clown', 'mandarin', 'sturgeon',];
// var removed = myFish.splice(myFish.length/2);

// console.log(myFish);
// console.log(removed);

// const array1 = ['a', 'b', 'c'];
// const array2 = ['d', 'e', 'f'];

// console.log(array1, array2);
// console.log(array1.concat(array2));


// let months = 'Янв, Фев, Мар, Апр, Май, Июн, Июл, Авг, Сен ,Окт, Ноя, Дек,';

// let newMonths = months.split('');
// newMonths.pop()

// var re = /\s*,\s*/;
// console.log(newMonths.join(''));
// console.log(newMonths.join('').split(re));

// const sayHi = function (num = 0) {
//     alert(`Привет${num}`);
// };

// function sayOldHi() {
//     alert("Привет 2");
// }


// sayHi(1);

// sayOldHi();
// sayHi(2);
// sayHi(3);
// sayHi(4);
// sayHi(5);
// sayHi(6);
// sayHi();

// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
// }

// function showOk() {
//     alert("Вы согласны.");
// }

// function showCancel() {
//     alert("Вы отменили выполнение.");
// }

// ask("Вы согласны?", showOk, showCancel);

// const add = (a, b) => (a + b);

// console.log(add(1, 2));


////////////////////////////////////////////////////////////// INDEXOF OBJECT ////////////////////////////////////////

// let newObj = {
//     'myMethod': () => {
//         console.log('Hello World');
//     }
// }

let users = [
    { id: 1, name: "Вася" },
    { id: 2, name: "Петя" },
    { id: 3, name: "Маша" }
];

// let userOne = { id: 1, name: "Вася" };
// let usreTwo = { id: 1, name: "Вася" };

// // let result = users.indexOf({ id: 3, name: "Маша" }, 1);

// // users.map(i => {
// //     console.log();
// //     users[i].indexOf({ id: 3, name: "Маша" }, 1)
// // })

// console.log(usreTwo === userOne);

// let user = users.find(item => item.id === 1);
// alert(user.name);

// let result = users.indexOf(() => users.map(i => i.name === 'Маша') , 1);

// console.log(result);



// console.log([1, 0, 11, 10, 9, 7, 2]);

// console.log([1, 0, 11, 10, 9, 7, -2].sort((a, b) => {
//     console.log(`a = ${a}, b = ${b} result =`  ,a + b);
//     return a - b
// }));


// let arr = [1, 2, 3];
// let result = arr.reduce(function (sum, current) {
//     console.log(`${sum} + ${current}`);
//     return sum + current;
// }
// );

// let res = arr.reduceRight(function (accumulator, currentValue) {
//     return accumulator + currentValue;
// }, 10);

// console.log(res);


const contactList = [
    {
      id: 1,
      first_name: 'Vasya',
      last_name: 'Petrov',
      nick_name: '',
      phone: 093945394,
      group: [
        {
          name: 'friends',
          id: 2
        }
      ],
      actions: null
    },
    {
      id: 2,
      first_name: 'Petya',
      last_name: '',
      nick_name: 'Sizo',
      phone: 09722122,
      group: [
        {
          name: 'best_friends',
          id: 1
        }
      ],
      actions: [
        {
          name: 'missed call',
          value: 3,
          id: 1
        }
      ]
    },
    {
      id: 2,
      first_name: 'Rustem',
      last_name: '',
      nick_name: 'Box',
      phone: 09700000,
      group: [
        {
          name: 'other',
          id: 3
        }
      ],
      actions: [
        {
          name: 'missed call',
          value: 13,
          id: 1
        }
      ]
    }
];