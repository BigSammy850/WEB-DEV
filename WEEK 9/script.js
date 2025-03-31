let leftPressed = false;
let rightPressed = false;
let upPressed = false;
let downPressed = false;
const circle = document.querySelector('#circle');


function keyDown(event) {
    console.log(event.key);
    switch (event.key) {
        case 'ArrowLeft':
            leftPressed = true;
        break;
        case 'ArrowRight':
            rightPressed = true;
            break;
        case 'ArrowUp':
            upPressed = true;
            break;
        case 'ArrowDown':
            downPressed = true;
            break;
        default:
            alert('Please use the arrow keys');
    }
}


function keyUp(event) {
    switch (event.key) {
        case 'ArrowLeft':
            leftPressed = false;
            break;
        case 'ArrowRight':
            rightPressed = false;
            break;
        case 'ArrowUp':
            upPressed = false;
            break;
        case 'ArrowDown':
            downPressed = false;
            break;
    }
}


function move(){
    console.log(move);
    if(leftPressed==true){
        moveLeft();
    }
    if(rightPressed==true){
        moveRight();
    }
    if(upPressed==true){
        moveTop();
    }
    if(downPressed==true){
        moveBottom();
    }
}


function moveLeft() {
    const position = circle.getBoundingClientRect();
    let positionLeft = position.left;
    if(positionLeft>0){
    circle.style.left = positionLeft - 10 + 'px';
    }
}


function moveRight() {
    const position = circle.getBoundingClientRect();
    let positionLeft = position.left;
    let positionRight = position.right;
    if(positionRight<window.innerWidth){
    circle.style.left = positionLeft + 10 + 'px';
    }
    else{
        console.log('Hit the edge');
    }
}


function moveTop() {
    const position = circle.getBoundingClientRect();
    let positionTop = position.top;
    if(positionTop>0){
    circle.style.top = positionTop - 10 + 'px';
    }
}


function moveBottom() {
    const position = circle.getBoundingClientRect();
    let positionTop = position.top;
    let positionBottom = position.bottom;
    if(positionBottom<window.innerHeight){
    circle.style.top = positionTop + 10 + 'px';
    }
    else{
        console.log('Hit the edge');
        
    }
}


document.addEventListener('keyup', keyUp);
document.addEventListener('keydown', keyDown);
timer = setInterval(move, 10);
