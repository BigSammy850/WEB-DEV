// let Alerttext = 'hello';
// Alerttext = 'world';
// Alerttext = 'linked';
// alert(Alerttext);

// let number1 = 10;
// let number2 = 15;

// let sum = number1 + number2;
// alert(sum);

// let difference = number2 - number1;
// alert(difference);

// let multiply = number1 * number2;
// alert(multiply);

// let divide = number1 / number2;
// alert(divide);

// let percent = number1 % number2;
//alert(percent);

function add(a, b) {
    return a + b;
}
console.log(add(5, 10));
heading.addEventListener('click', changeHeading);
content.addEventListener('click', changeContent);
function changeHeading() {
    heading.innerHTML = 'This has been changed!';
}
function changeContent() {
    content.innerHTML = 'Was Lorem!';
}

/*Excersises

function print5(){
    console.log('1');
    console.log('2');
    console.log('3');
    console.log('4');
    console.log('5');
}
print5();
print5();*/

const submit = document.querySelector('#btn');
const text = document.querySelector('#input');
let div = document.querySelector('#output');
function readContent() {
alert(text.value);
div.innerHTML = text.value
}
submit.addEventListener('click', readContent);
