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
    number.addEventListener("click", inputNumber);
})

//function for input of numbers into current screen
function inputNumber(event) {
    //insertedNumber is the variable for the text that is inside the HTML for the number clicked
    let insertedNumber = event.target.innerHTML;
    //will return the HTML text from inserted number into the HTML text of currentScreen
    return currentScreen.innerHTML += insertedNumber;
    //currentScreen.innerHTML was declared first as the new number will go after the previous one 
}

//implementing click trigger for each operator in the array that has been imported from line 7
//the action will also push the inputs that are on currentScreen to previousScreen to allow a clear currentScreen for a new set of numbers
operators.forEach (operator => {
    operator.addEventListener("click",inputOperator );
})

function inputOperator(event) {
    //This will mean when an operator button is clicked the HTML input from currentScreen will now transfer over to previousScreen
    previousScreen.innerHTML = currentScreen.innerHTML;
    //insertedOperator is the variable for the text that is inside the HTML of the operator that is clicked
    let insertedOperator = event.target.innerHTML;
    //this will return nothing ifnothing has been inputed into the currentScreen
    if (currentScreen.innerHTML === ("")) {
        return;
        //if the operator from the HTML isn't nothing then it will call the function computAnswer
    } else if (insertedOperator !== "") {
        //if condition is true then it will return the function computeAnswer
        return computeAnswer();
    }  
    //This line will clear the HTML inputs in currentScreen to allow a new set of inputs to be entered
    currentScreen.innerHTML = ("");
}



