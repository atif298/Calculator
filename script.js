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
const equals = document.querySelector(".calculator__equals")

//Previous output
const previousScreen = document.querySelector(".calculator__output-previous")

//Current output
const currentScreen = document.querySelector(".calculator__output-current")

let insertedOperator = "";
let operation = "";



//NUMBERS INPUT
//implementing click trigger for each item in the array of numbers that has been imported from line 4
numbers.forEach (number => {
    //every click will activate inputNumber function
    number.addEventListener("click", inputNumber);
})

//function for input of numbers into current screen
function inputNumber(event) {
    //insertedNumber is a let variable (as each input button will be a different insertedNumber next to another insertedNumber) for the text that is inside the HTML for the number clicked
    let insertedNumber = event.target.innerHTML;
    //will return the HTML text from inserted number into the HTML text of currentScreen
    return currentScreen.innerHTML += insertedNumber;
    //currentScreen.innerHTML was declared first as the new number will go after the previous one 
}


//OPERATOR INPUT
//implementing click trigger for each operator in the array that has been imported from line 7
//the action will also push the inputs that are on currentScreen to previousScreen to allow a clear currentScreen for a new set of numbers
operators.forEach (operator => {
    operator.addEventListener("click", inputOperator);
})

function inputOperator(event) {
    //this will mean when an operator button is clicked the HTML input from currentScreen will now transfer over to previousScreen
    previousScreen.innerHTML = currentScreen.innerHTML;
    //this will empty the currentScreen text inside the HTML to allow theuser to input another set of numbers
    currentScreen.innerHTML = ("");
    //insertedOperator is the variable for the text that is inside the HTML of the operator that is clicked
    insertedOperator = event.target.innerHTML;
    //If the text inside the HTML operator is not equal to nothing then is will activate the function computeOperator
    if (insertedOperator !== "") {
    //if condition is true then it will activate the function computeOperator  
        computeOperator();
     }    
}

function computeOperator () {
    //let has been used to declare the variable operation to be different depending on the operator
    let operation = "";
    // if a operator has been input it will now identify which mathematically named string it is allocated to
    switch (insertedOperator) {
        case "X":
            //multiply
            operation = "multiply" ;
            break;
            //divide
        case "÷":
            operation = "divide" ;
            break;
            //add
        case "+":
            operation = "add" ;
            break;
            //subtract
        case "-":
            operation = "subtract" ;
            break;
            //if for some reason no operator was selected even after the if statement it will just return nothing.
        default:
            return;
    }//After identifying which case it belongs to it will allocae the string from operation into the function variable computeOperator
    return computeOperator = operation;
}



