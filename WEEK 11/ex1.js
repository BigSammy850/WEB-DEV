let dice = document.querySelectorAll(".side1");
let paragraph= document.querySelectorAll("p");  

for (i = 0; i < dice.length; i++) {
    //let text = dice[i].nextElementSibling;
    //let textClick=  textpreviousSibling;
    dice[i].addEventListener("click", function () {
        let random = Math.ceil(Math.random() * 6);
        this.classList = 'side' + random;
        this.nextElementSibling.innerHTML = "You rolled a " + random;
        //text.innerHTML = "You rolled a " + random;
    });
}

for (change of paragraph){
    change.addEventListener("click", function () {
        let random = Math.ceil(Math.random() * 6);
        this.innerHTML = "You rolled a " + random;
        this.previousElementSibling.classList= "side" + random;
    });
}

// let random=mathfloor(Math.random()*6)+1;
//     this.classList = 'side' + random;


// let myArray = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];
// for (let i = 0; i < myArray.length; i++) {
//     for (let j = 0; j < myArray[i].length; j++) {
//         console.log(myArray[i][j]);
//     }
// }

// for(let row of myArray){
//     for(let column of row){
//         console.log(column);
//     }
// }
// let maze = [
//     [0, 0, 0, 0],
//     [0, 0, 0, 0],
//     [0, 0, 0, 0],
//     [0, 0, 0, 0]
// ];

// let row = Math.floor(Math.random() * maze.length);
// let column = Math.floor(Math.random() * maze[row].length);
// maze[row][column] = 1;
// console.log(maze)