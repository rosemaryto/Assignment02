
let coinFlip = Math.round(Math.random())
let choice = prompt('Select Heads or Tails').toLowerCase()

if (coinFlip < 1) {
    //HEADS
    if (choice === 'heads') {
        document.write(`The flip was heads and you chose heads...you win!`)
    } else {
        document.write(`The flip was heads and you chose tails...you lose!`)
    }
} else if (coinFlip >= 1) {
    //TAILS
    if (choice === 'tails') {
        document.write('The flip was tails and you chose tails...you win!')
    } else {
        document.write('The flip was tails and you chose heads...you lose!')
    }
} 