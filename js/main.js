// function createDiv(atrName, atrVal) {
//     let div = document.createElement('div');
//     div.setAttribute(atrName, atrVal);
//     return div;
// };

// let root = document.getElementById('root');

// root.appendChild(createDiv('class', 'first'));
// root.appendChild(createDiv('class', 'sec'));

function sayHiBye(firstName, lastName) {

    function getFullName() {
        return firstName + " " + lastName;
    }

    alert("Hello, " + getFullName());
    alert("Bye, " + getFullName());

}

sayHiBye('Anton', 'Kolesnykov')