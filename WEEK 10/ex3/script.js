let upPressed = false;
let downPressed = false;
let leftPressed = false;
let rightPressed = false;

const player = document.querySelector('#player');

function keyUp(event) {
    if (event.key === 'ArrowUp') {
        upPressed = false;
    } else if (event.key === 'ArrowDown') {
        downPressed = false;
    } else if (event.key === 'ArrowLeft') {
        leftPressed = false;
    } else if (event.key === 'ArrowRight') {
        rightPressed = false;
    }
}

function keyDown(event) {
    if (event.key === 'ArrowUp') {
        upPressed = true;
    } else if (event.key === 'ArrowDown') {
        downPressed = true;
    } else if (event.key === 'ArrowLeft') {
        leftPressed = true;
    } else if (event.key === 'ArrowRight') {
        rightPressed = true;
    }
}
function move() {
    pointCheck();
    const position = player.getBoundingClientRect();
    

    if (downPressed == true) {
        let newBottom = position.bottom + 1;

        let btmL = document.elementFromPoint(position.left, newBottom);
        let btmR = document.elementFromPoint(position.right, newBottom);
        if (btmL.classList.contains('avoid') == false && btmR.classList.contains('avoid') == false) {
            player.style.top = position.top + 1 + 'px';
        }
    }

    if (leftPressed == true) {
        let newLeft = position.left - 1;

        let leftT = document.elementFromPoint(newLeft, position.top);
        let leftB = document.elementFromPoint(newLeft, position.bottom);
        if (leftT.classList.contains('avoid') == false && leftB.classList.contains('avoid') == false) {
            player.style.left = position.left - 1 + 'px';
        }
    }

    if (upPressed == true) {
        let newTop = position.top - 1;

        let topL = document.elementFromPoint(position.left, newTop);
        let topR = document.elementFromPoint(position.right, newTop);
        if (topL.classList.contains('avoid') == false && topR.classList.contains('avoid') == false) {
            player.style.top = position.top - 1 + 'px';
        }
    }

    if (rightPressed == true) {
        let newRight = position.right + 1;

        let rightT = document.elementFromPoint(newRight, position.top);
        let rightB = document.elementFromPoint(newRight, position.bottom);
        if (rightT.classList.contains('avoid') == false && rightB.classList.contains('avoid') == false) {
            player.style.left = position.left + 1 + 'px';
        }
    }
}

setInterval(move, 5);

document.addEventListener('keyup', keyUp);
document.addEventListener('keydown', keyDown);

const points = document.querySelectorAll('.point');
function pointCheck() {
    const position = player.getBoundingClientRect();

    for (let i = 0; i < points.length; i++) {
        let pos = points[i].getBoundingClientRect();
        if (
            position.right > pos.left &&
            position.left < pos.right &&
            position.bottom > pos.top &&
            position.top < pos.bottom
        ) {
            points[i].style.display = 'none';
        }
    }
}

const colours = document.querySelectorAll('li');
for(let i = 0; i < 10; i++) {
colours[i].addEventListener('click', setColor);
}
function setColor() {
player.style.backgroundColor = this.id;
}

let x = document.querySelector('#closeside');
function hideAside(){
    let aside = document.querySelector('aside');
    if (aside.style.display == 'none') {
        aside.style.display = 'block';
    } else {
        aside.style.display = 'none';
    }

}
function showAside() {
    let aside = document.querySelector('aside');
    if (aside.style.display == 'none') {
        aside.style.display = 'block';
    } else {
        aside.style.display = 'none';
    }
}

x.addEventListener('click', hideAside);
player.addEventListener('click', showAside);