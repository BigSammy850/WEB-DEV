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

setInterval(move, 0.5); 

document.addEventListener('keyup', keyUp);
document.addEventListener('keydown', keyDown);