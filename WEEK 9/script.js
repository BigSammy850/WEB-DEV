const circle = document.querySelector('#circle');
const position = circle.getBoundingClientRect();
let positionRight = position.right;
let positionLeft = position.left;
console.log(positionRight);
console.log(positionLeft);
function circleMove(event) {
    console.log(event.key);
    if (event.key == 'ArrowLeft') {
        moveLeft();
    }
    if (event.key == 'ArrowRight') {
        moveRight();
    }
    if (event.key == 'ArrowUp') {
        moveTop();
    }
    if (event.key == 'ArrowDown') {
        moveBottom();
    }
}
function moveLeft() {
    const position = circle.getBoundingClientRect();
    let positionLeft = position.left;
    circle.style.left = positionLeft - 10 + 'px';
    console.log(positionLeft);
}
function moveRight() {
    const position = circle.getBoundingClientRect();
    let positionRight = position.right;
    circle.style.left = positionRight + 10 + 'px';
    console.log(positionRight);
}
function moveTop() {
    const position = circle.getBoundingClientRect();
    let positionTop = position.top;
    circle.style.top = positionTop - 10 + 'px';
}
function moveBottom() {
    const position = circle.getBoundingClientRect();
    let positionBottom = position.bottom;
    circle.style.top = positionBottom + 1 + 'px';
}
document.addEventListener('keydown', circleMove);

// function circleClick(){
//     alert('The circle was pressed');
//     circle.style.marginLeft = '10px';
// }

// circle.addEventListener('click', circleClick);