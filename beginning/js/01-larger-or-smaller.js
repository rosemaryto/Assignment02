var intOne = window.prompt("Type a number");
var intTwo = window.prompt("Type another number");

if(intOne > intTwo){
    window.document.write("This number is larger: " + intOne);
} else if (intOne < intTwo) {
    window.document.write("This number is larger: " + intTwo);
} else {
    window.document.write("These numbers are the same!");
}