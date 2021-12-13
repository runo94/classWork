
// var a = 10;
// let b = 20;

// function pure (x, y) {
//     return x+y
// }

// a = 30;
// console.log(pure(a,b))
// console.log(notpure());


// function notpure() {
//     return a+b
// }

// let array = [1,2,3,4,5,6,7,8]


// function doubleD(arr) {
//     return arr.map(n => n * 2)
// }

// console.log(doubleD([1]));

// Array.prototype.map = function() {
//   return [3]
// }

// console.log(doubleD([1]));
// console.log(doubleD(array));

// function User(name) {
//     this.name = name;
//     this.isAdmin = false;
// }

// let user = new User("Вася");
// console.log(user);

// function BigUser() {
//     this.name = "Вася";
//     return { name: "Godzilla" };
// }

// console.log(new BigUser().name);

// function SmallUser() {
//     this.name = "Вася";
//     return;
// }

// console.log(new SmallUser().name);

// function User(name) {
//     this.name = name;
//     this.sayHi = function () {
//         alert("Меня зовут: " + this.name);
//     };
// }
// let vasya = new User("Вася");

// vasya.sayHi();


// let animal = {
//     eats: true
// };

// function Rabbit(name) {
//     this.name = name;
// }

// Rabbit.prototype = animal;
// let rabbit = new Rabbit("White Rabbit");
// console.log(rabbit);

// let animal = {
//     eats: true
// };

// let rabbit = Object.create(animal);
// console.log(rabbit.eats);

// console.log(Object.getPrototypeOf(rabbit));
// Object.setPrototypeOf(rabbit, {});
// console.log(animal);

// class User {
//     constructor(name, email, password) {
//         this.name = name;
//         this.email = email;
//         this.password = password;
//     }
//     sayHi = () => {
//         const user = {
//             email: '123@qq.xa'
//         }
//         if (this.email === user.email) {
//             console.log(`Hi, ${this.name} !`);
//         } else {
//             console.log(`Who are u!?`)
//         }
//     }
// }

// const userPetya = new User('Petya', 'peya11@qq.xa', '0000');
// userPetya.sayHi();

// console.log(User.prototype);

// class User {
//     constructor(name, pw) {
//         this.name = name;
//         this.pw = pw;
//     }

//     get name() {
//         return this._name;
//     }

//     get pw() {
//         return this._pw
//     }

//     set pw(value) {
//         if(String(value).length < 6) {
//             console.error('TOOO SHORT!!!!!');
//             return;
//         }
//         this._pw = value;
//     }

//     set name(value) {
//         if (value.length < 4) {
//             alert("Имя слишком короткое.");
//             return;
//         }
//         this._name = value;
//     }
// }

// let user = new User("Иван", 123);

// console.log(user);

// user.name = 'Jora'
// user.pw = 121234;
// console.log(user);

let arr = [1, 2, 3, 4, 5]

let res = arr.reduce((acc, curr) => acc + curr, 0);

console.log(res);
// 0 + 1
// 1 + 2
// 3 + 3
// 6 + 4
// 10 + 5
// 15

function outer () {
    let x = 5
    return function inner() {
        x++
        return x;
    }
}

let a = outer();

console.log(a);