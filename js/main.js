'use strict';


// const pass = prompt('Enter PASS');

// const mapOfMarauder = new Promise(
//     (success, failed) => {
//         if (pass === 'Торжественно клянусь что замышляю только шалость') {
//             success('Господа Лунатик, Бродяга, Сохатый и Хвост! Поставщики вспомогательных средств для волшебников-шалунов с гордостью представляют свое новейшее изобретение КАРТУ МАРОДЕРОВ.')
//         } else {
//             failed('Господа Лунатик, Сохатый, Бродяга и Хвост приветствуют мистера Снейпа и требуют, что бы он не совал свой нос не в свои дела.')
//         }
//     })

// function askPass() {
//     mapOfMarauder
//         .then(result => {
//             console.log(result)
//         }, error => {
//             console.log(error);
//         })
//         .finally(
//             some => { console.log('А я дядя петр') }
//         )
// };

// askPass();


function name(params) {

    let promise = new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error("Ошибка!")), 1000);
        setTimeout(() => resolve('SUCCESS'), 2000);
    });
    // .catch(f) это тоже самое, что promise.then(null, f)
    promise.catch(console);
    promise.then(console.log)
}


(function () {
    var x = 30;
    console.log(x);
})()

let arr = [1, 2, 3, 4, 5, 6]

let sum = arr.reduceRight((acc, curr) => acc + curr, 0)
console.log(sum);

// async function showAvatar() {

//     // запрашиваем JSON с данными пользователя
//     let response = await fetch('https://random-data-api.com/api/users/random_user?size=10');
//     let user = await response.json();

//     // запрашиваем информацию об этом пользователе из github
//     let githubResponse = await fetch(`https://api.github.com/users/runo94`);
//     let githubUser = await githubResponse.json();

//     // отображаем аватар пользователя
//     let img = document.createElement('img');
//     img.src = githubUser.avatar_url;
//     img.className = "promise-avatar-example";
//     document.body.append(img);

//     // ждём 3 секунды и затем скрываем аватар
//     await new Promise((resolve, reject) => setTimeout(resolve, 3000));

//     img.remove();

//     return githubUser;
//   }

//   showAvatar();


// async function loadJson(url) {
//     let response = await fetch(url);

//     if (response.status == 200) {
//         let result = await response.json();
//         return result;
//       }

//       throw new Error('NE RABOTAIT');
//   }

//   loadJson('no-such-user.json') // (3)
//     .catch(alert); // Error: 404


// async function wait() {
//     await new Promise(resolve => setTimeout(resolve, 1000));

//     return 10;
// }

// function f() {
//     wait().then(response => console.log(response))
//     // ...что здесь написать?
//     // чтобы вызвать wait() и дождаться результата "10" от async–функции
//     // не забывайте, здесь нельзя использовать "await"
// }

// f()

// function makeCounter() {
//     let count = 0;

//     return function() {
//       return count++;
//     };
//   }

//   let counter = makeCounter();
//   let counter2 = makeCounter();

//   alert( counter() ); 
//   alert( counter() ); 

//   alert( counter2() ); 
//   alert( counter2() ); 


function suma(a) {
    return function (b) {
        return a + b
    }
}

function mult(a) {
    return function (b) {
        return a * b
    }
}

function calc(func) {
    return function (a) {
        return function (b) {
            return func(a)(b);
        }
    }
}

console.log(calc(suma)(1)(2), calc(mult)(1)(2));

function calculate(func, a, b) {
    switch (func) {
        case 'mult':
            return (function(a, b) {
                return a * b
            })(a,b)
            break;
        case 'sum': 
            return
            
            break;
        default:
            break;
    }
}

console.log(calculate('mult', 1, 2));

