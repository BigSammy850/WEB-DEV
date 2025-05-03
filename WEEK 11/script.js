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

    let verticalDirection = Math.random() < 0.5 ? -1 : 1; // Random initial vertical direction
    let horizontalDirection = Math.random() < 0.5 ? -1 : 1; // Random initial horizontal direction

    // Move the circle in the current direction
    setInterval(function () {
        // Update vertical position
        up += verticalDirection * 2; // Move by 2 pixels per interval
        if (up < 0 || up > window.innerHeight - enemy.offsetHeight) {
            // If it collides vertically, choose a new random direction
            verticalDirection = Math.random() < 0.5 ? -1 : 1;
            horizontalDirection = Math.random() < 0.5 ? -1 : 1; // Randomize horizontal direction too
        }

        // Update horizontal position
        left += horizontalDirection * 2; // Move by 2 pixels per interval
        if (left < 0 || left > window.innerWidth - enemy.offsetWidth) {
            // If it collides horizontally, choose a new random direction
            verticalDirection = Math.random() < 0.5 ? -1 : 1; // Randomize vertical direction too
            horizontalDirection = Math.random() < 0.5 ? -1 : 1;
        }

        // Apply the updated position to the circle
        enemy.style.top = up + 'px';
        enemy.style.left = left + 'px';
    }, 10); // Move every 10 milliseconds
}
