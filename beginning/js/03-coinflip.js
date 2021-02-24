let choice = prompt("Choose heads or tails");
let randomNum = Math.round(Math.random());
let coinFlip = randomNum;

if (randomNum < 1){
    coinFlip = "heads";
} else {
    coinFlip = "tails";
}
//heads
if (coinFlip === "heads") {
    if (choice === "heads") {
        alert("The flip was heads and you chose heads...you win!")
    } else if (choice === "tails") {
        alert("The flip was heads and you chose tails...you lose!") 
    }
} else if (coinFlip === "tails") {
    if (choice === "heads") {
        alert("The flip was tails and you chose heads...you lose!")
    } else if (choice === "tails") {
        alert("The flip was tails and you chose tails...you win!") 
    }
}

