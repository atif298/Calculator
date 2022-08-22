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

//Round to 2 decimal places
const twoDP = document.querySelector(".calculator__2dp")



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


//EQUALS
//implementing click trigger for when the equals operator is clicked. When clicked it will run the computeAnswer function
equals.addEventListener("click", computeAnswer);

function computeAnswer () {
    //if inserted operator is equal to nothing then the if statement will return nothing
    if (currentScreen.innerHTML === "") {
        return;
    }
    //we are now turning the string values of the current and previous screens into integers
    let a = Number(currentScreen.innerHTML);
    let b = Number(previousScreen.innerHTML);
    //let has been used to declare the variable answer to be different depending on the operator
    let answer;
    //it will now identify which operator it was and compute the following formula
    switch (computeOperator) {
        case "multiply":
            //in this case it will multiply the previous number to the current as the previous number was first entered into the calculator
            answer = b * a ;
            break;
            //divide
        case "divide":
            answer = b / a ;
            break;
            //add
        case "add":
            answer = b + a ;
            break;
            //subtract
        case "subtract":
            answer = b - a ;
            break;
            //if for some reason no operator was selected even after the if statement it will just return nothing.
        default:
            return;
    }
    //this will return the calculated result back as a string so that another operator can be used on it without causing an interferance as inputs are given as strings 
    currentScreen.innerHTML = (answer);

    //THIS WAS ADDED IN AS A SOLUTION TO OVERWRITE THE PREVIOUS OPERATOR WAS NOY FOUND
    //INSTEAD FOR NOW WE ASK THE USER TO CLEAR ALL TO ALLOW TO USE A NEW OPERATOR
    // - BY USING INDIVIDUAL ID'S FOR OPERATORS (SIMIILAR TO HOW I DID FOR EQUALS) I MAY BE ABLE TO SOLVE THISPROBLEM
    return previousScreen.innerHTML = "PRESS C TO START NEW CALCULATION"
}


//CLEAR
//implementing click trigger for when clear has been clicked to run the function allClear
clear.addEventListener("click", allClear);

function allClear () {
    // //this will remove any HTML textinside currentScreen
    // currentScreen.innerHTML = "";
    // //this will remove any HTML textinside previousScreen
    // previousScreen.innerHTML = "";
    //this will refreshwhole page and true means it will also refresh without any stored cache
    window.location.reload(true);
}


//DELETE
////implementing click trigger for when deleteNumber has been clicked to run the function backspace
deleteNumber.addEventListener('click', backspace);
function backspace() {
    //this ([...]) is creating an array with the same values of text inside currentScreen but in the variable currentNumber
    let currentNumber = [...currentScreen.innerHTML];
    //removes last number in array
    currentNumber.pop();
    //this (.join) will convert the array into a string and assign it to the currentNumber variable
    currentNumber = currentNumber.join("");
    //this will mean currentNumber string is now assigned and placed into the text in the HTML of currentScreen
    currentScreen.innerHTML = currentNumber;
}


//implementing click trigger for when 2DP has been clicked to run the function twodp
twoDP.addEventListener('click', twoDecPoint);

//2DP
function twoDecPoint() { 
    //making the type of currentScreen HTML equal to a variableand then equal to a number so we can calculate 2DP
    let x = Number(currentScreen.innerHTML);
    //rounded variable will hold this calculation
    //Math.round, rounds to nearest integer, epsilon used for acurate number, divided by 100 for 2dp
    rounded = Math.round((x + Number.EPSILON) * 100) / 100;
    //return this value into the current screen
    return currentScreen.innerHTML = rounded;
}