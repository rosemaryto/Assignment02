let score = prompt('Enter a number.');
if (score >= 60 && score <= 69) {
    console.log("You received a D");
} else if (score >= 70 && score <= 79) {
    console.log("You received a C");
} else if (score >= 80 && score <= 89) {
    console.log("You received a B");
} else if (score >= 90 && score <= 100) {
    console.log("You received a A");
} else if (score <= 60) {
    console.log("You received a F");
} else {
    alert("Enter a number betwee 1 and 100.");
}

