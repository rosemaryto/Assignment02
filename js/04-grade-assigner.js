newNum = parseFloat(prompt('Enter a number between 1 and 100'))
if (newNum >= 1 || newNum <= 100) {
    if (newNum >= 60 && newNum <= 69) {
        console.log('You received a D')
    } else if (newNum >= 70 && newNum <= 79){
        console.log('You received a C')
    } else if (newNum >= 80 && newNum <= 89) {
        console.log('You received a B')
    } else if (newNum >= 90 && newNum <= 100) {
        console.log('You received a A')
    } else if (newNum < 60) {
        console.log('You received a F')
    } else {
    console.log('Only numbers between 1 and 100 are accepted')
    }
} else {
    console.log('Only numbers are accepted')
}
