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

    // Randomly choose an initial direction (0 = up, 1 = down, 2 = left, 3 = right)
    let direction = Math.floor(Math.random() * 4);

    // Move the circle in the current direction
    setInterval(function () {
        switch (direction) {
            case 0: // Move up
                up -= 2; // Move by 2 pixels per interval
                if (up < 0) {
                    up = 0; // Prevent moving out of bounds
                    direction = Math.floor(Math.random() * 4); // Choose a new random direction
                }
                break;
            case 1: // Move down
                up += 2;
                if (up > window.innerHeight - enemy.offsetHeight) {
                    up = window.innerHeight - enemy.offsetHeight; // Prevent moving out of bounds
                    direction = Math.floor(Math.random() * 4); // Choose a new random direction
                }
                break;
            case 2: // Move left
                left -= 2;
                if (left < 0) {
                    left = 0; // Prevent moving out of bounds
                    direction = Math.floor(Math.random() * 4); // Choose a new random direction
                }
                break;
            case 3: // Move right
                left += 2;
                if (left > window.innerWidth - enemy.offsetWidth) {
                    left = window.innerWidth - enemy.offsetWidth; // Prevent moving out of bounds
                    direction = Math.floor(Math.random() * 4); // Choose a new random direction
                }
                break;
        }

        // Apply the updated position to the circle
        enemy.style.top = up + 'px';
        enemy.style.left = left + 'px';
    }, 10); // Move every 10 milliseconds
}

