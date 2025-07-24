const prompt = require('prompt-sync')()
const name = prompt('what is your name ? ')
console.log("Hello", name,"Welcome to our game")

const shouldWePlay = prompt('do you want to play?')

if (shouldWePlay.toLowerCase() === "yes") {
    // Game logic
    const leftOrRight = prompt("You enter a maze. Do you want to go left or right?");
    if (leftOrRight.toLowerCase() === "left") {
        console.log("You go left and see a bridge...");
        const cross = prompt("Do you want to cross the bridge?").toLowerCase();
        if (cross === "yes" || cross === "y" || cross === "okay") {
            console.log("You crossed, but the bridge was weak and broke. You fell. You lost...");
        } else {
            console.log("Good choice... You win!");
        }
    } else if (leftOrRight.toLowerCase() === "right") {
        console.log("You go right and fall off a cliff...");
    } else {
        console.log("Invalid direction. Please choose 'left' or 'right'.");
    }
} else if (shouldWePlay.toLowerCase() === "no") {
    console.log("Okay :(");
} else {
    console.log("Invalid input...");
}


