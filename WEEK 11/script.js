document.addEventListener("click", function (event) {
    let div = document.createElement("div");
    document.body.appendChild(div);
    random1 = Math.floor(Math.random() * 255) + 1;
    random2 = Math.floor(Math.random() * 255) + 1;
    random3 = Math.floor(Math.random() * 255) + 1;

    randomSize = Math.floor(Math.random() * 200) + 20;
    randomOpacity = Math.random();

    div.style.width = randomSize + "px";
    div.style.height = randomSize + "px";
    div.style.opacity = randomOpacity;
    div.style.backgroundColor = "rgb(" + random1 + "," + random2 + "," + random3 + ")";
    div.style.position = "absolute";
    div.style.borderRadius = "100%";
    div.style.top = (event.clientY - randomSize/2) + "px";
    div.style.left = (event.clientX - randomSize/2) + "px";

    move(div);


})

function move(enemy) {
    let up = parseInt(enemy.style.top) || 0;
    let left = parseInt(enemy.style.left) || 0;

    let direction = Math.floor(Math.random() * 4)+1;

    let verticalDirection = 0; // Default to no vertical movement
    let horizontalDirection = 0; // Default to no horizontal movement


    switch (direction) {
        case 1:
            verticalDirection = -1; // Move up
            break;
        case 2:
            verticalDirection = 1; // Move down
            break;
        case 3:
            horizontalDirection = -1; // Move left
            break;
        case 4:
            horizontalDirection = 1; // Move right
            break;
    }

    // Move the circle in the current direction
    setInterval(function () {
        // Update vertical position
        up += verticalDirection * 2; // Move by 2 pixels per interval
        if (up < 0) {
            up = 0;
            verticalDirection = 1; // Reverse direction to down
        } else if (up > window.innerHeight - enemy.offsetHeight) {
            up = window.innerHeight - enemy.offsetHeight;
            verticalDirection = -1; // Reverse direction to up
        }

        // Update horizontal position
        left += horizontalDirection * 2; // Move by 2 pixels per interval
        if (left < 0) {
            left = 0;
            horizontalDirection = 1; // Reverse direction to right
        } else if (left > window.innerWidth - enemy.offsetWidth) {
            left = window.innerWidth - enemy.offsetWidth;
            horizontalDirection = -1; // Reverse direction to left
        }

        // Apply the updated position to the circle
        enemy.style.top = up + 'px';
        enemy.style.left = left + 'px';
    }, 10); // Move every 10 milliseconds
}
