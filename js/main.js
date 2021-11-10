let h1 = document.getElementsByTagName('h1');
let element = document.createElement('p');
element.innerText = 'Hello Test P';
h1[0].appendChild(element);

h1[0].addEventListener('mouseenter', function () {
    console.log('The Mouse Entered');
});


let form = document.getElementById('form');
let someName = null;
let arr = [];

console.log(form.getElementsByTagName('input'));

function handlerInput(param, index) {
    arr.push(form.getElementsByTagName('input')[index - 1].value)
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(arr);
});

document.getElementById('sel').addEventListener('change',() => {
    console.log(document.getElementById('sel').value);
})