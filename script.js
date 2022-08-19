//DOM all calculator components

//Numbers button (Numbers stored as array)
const numbers = document.querySelectorAll(".calculator__number")
//Operators button (Operators stored as array)
const operators = document.querySelectorAll(".calculator__operator")
//Clear button
const clear = document.querySelector("#C")
//Delete button
const deleteNumber = document.querySelector("#DEL")
//Equals button
const equals = document.querySelector("#equals")
//Previous output
const previousScreen = document.querySelector(".calculator__output-previous")
//Current output
const currentScreen = document.querySelector(".calculator__output-current")

//implementing click trigger for each item in the array of numbers that has been imported from line 4
numbers.forEach (number => {
    //every click will activate inputNumber function
    number.addEventListener("click", inputNumber)
});



//function for input of numbers into current screen
function inputNumber(event) {
    //insertedNumber is the variable for the text that is inside the HTML for the number clicked
    let insertedNumber = event.target.innerHTML;
    //will return the HTML text from inserted number intocthe HTML text of currentScreen
    return currentScreen.innerHTML += insertedNumber;
    //currentScreen.innerHTML was declared first as the new number will go after the previous one 
}