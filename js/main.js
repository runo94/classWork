// 'use strict';

// let animal = {
//     eats: true
// };

// let rabbit = {
//     jumps: true,
//     __proto__: animal
// };

// let user = {
//     type: 'human',
//     breath: true,
//     camputer: true
// }

// let moder = {
//     muteAll: true,
//     answersQ: true,
//     __proto__: user
// }

// let  admin = {
//     banAll: true,
//     type: 'superman',
//     __proto__: moder
// }

// for (let prop in user) {
//     let isOwn = user.hasOwnProperty(prop);
//     if (isOwn) {
//         alert(`Our: ${prop}`);
//     } else {
//         alert(`Inherited: ${prop}`);
//     }
// }

// // console.log(admin);


function isEmpty(attr) {
    if(typeof attr === 'object' && !Array.isArray(attr) ) {
        console.log(Object.keys(attr));
        return Object.keys(attr).length > 0 
    }
}

let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false