firstNum = parseFloat(prompt('Enter a number'))
secondNum = parseFloat(prompt('Enter another number'))
if (firstNum > secondNum) {
    document.write(`${firstNum} is the larger number`);
} else if (firstNum < secondNum) {
    document.write(`${secondNum} is the larger number`)
} else {
    document.write(`${firstNum} and ${secondNum} are equal`)
}