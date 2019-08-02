'use strict';

//QUESTION -> What is a function?
//ANSWER   -> A block of code that performs an action.

//QUESTION -> When should we use a function?
//ANSWER   -> Whenever you want to use a block of code more than once.

//QUESTION -> How do we declare a function?

function printToConsole( text ) {
    console.log( text );
}

//QUESTION -> How do we call our function?
//ANSWER   -> By using the name, like a variable.

printToConsole( 'The Coder Hero' );
printToConsole( 'CoderBugz' );

//QUESTION -> Can I declare variables inside of functions?
//ANSWER   -> Yes!

function printVariable() {
    let thisNumber = 10;
    let thisString = "This is a string!";
    let thisBoolean = true;

    console.log( thisNumber );
    console.log( thisString );
    console.log( thisBoolean );
}

//QUESTION -> Can I access those variables from outside the function?
//ANSWER   -> No! Function variables are local to the function.

//Question -> What happens if I try to access a function variable outside of the function?
//ANSWER   -> Uncaught ReferenceError: 'variable' is not defined.

/***********************************
 * ERROR CODERBUGZ CONTAINMENT FIELD
 *
 * console.log( thisNumber );
 *
 * ERROR CODERBUGZ CONTAINMENT FIELD
 **********************************/

//QUESTION -> Can a function access variables outside of it?
//ANSWER   -> Yes! Function have full access to variables found outside of it.

let accessVariable = 10;

function changeAccessVariable( newNumber ) {
    accessVariable = newNumber;
    console.log( accessVariable ); //-> 5
}

//QUESTION -> Can function variables have the same name as outer variables?
//ANSWER   -> Yes!

let localVariable = 'A String!';

function printFunctionVariable() {
    let localVariable = "Another String!";
    console.log( localVariable );
}

//QUESTION -> Which variable does a function use first?
//ANSWER   -> A function will use its own variables first.

printFunctionVariable();

//QUESTION -> What are variables outside of functions called?
//ANSWER   -> Global Variables.

//QUESTION -> Can we pass data to functions?
//ANSWER   -> Yes! Data passed to functions are called function parameters or function arguments.

function printTwoNumbers( numberOne, numberTwo ) { //Arguments = numberOne and numberTwo
    console.log( numberOne );
    console.log( numberTwo );
}

printTwoNumbers( 5, 10 );

//QUESTION -> Can I set a default value to a function argument?
//ANSWER   -> Yes! Using the ( = ) assignment operator.

function printDefaultNumbers( smallNumber = 10, largeNumber = 100 ) {
    console.log( smallNumber );
    console.log( largeNumber );
}

printDefaultNumbers(); //No Arguments Passed

//QUESTION -> Can a function pass data back?
//ANSWER   -> Yes! This is called returning data.

function returnNumberTimesTwo( number ) {
    return number * 2;
}

console.log( returnNumberTimesTwo( 3 ) ); //-> 6
console.log( returnNumberTimesTwo( 5 ) ); //-> 10

//QUESTION -> Can you have multiple returns in a function?
//ANSWER   -> Yes! Returns can be used to break up functionality.

function isEven( number ) {
    if( number % 2 === 0 ) {
        return true;
    } else {
        return false;
    }
}

console.log( isEven( 44 ) ); //-> true
console.log( isEven( 999 ) ); //-> false

//QUESTION -> Do I have to return a value?
//ANSWER   -> No! Return can be used to break out of a function. If return is used
//            but no data is returned, or there is no return statement, then the function returns undefined.

//QUESTION -> Can I add a newline after a return?
//ANSWER   -> No! JavaScript assumes a semi-colon after a return.

//QUESTION -> How do we name functions?
//ANSWER   -> Functions are actions, so name functions with Verb/Noun combinations.

// ** The following examples use let for informational purposes only **

//Good Function Names
let printMessage;
let calculateSquareRoot;
let getHeroName;

//Bad Function Names
let message;
let squareRoot;
let heroName;

//QUESTION -> How many actions should a function perform?
//ANSWER   -> Ideally, 1 action to 1 function. The function name should
//            describe what action is being performed.

//QUESTION -> What if I need to perform more than one action?
//ANSWER   -> Create a new function and call it from another function.

function printOddNumbersLessThan( number ) {
    for( let x = 1; x < number; x++ ) {
        //Here we perform another action so we need a second function
        if ( !checkForOddNumber( x ) ) {
            continue;
        }
        
        console.log( x );
    }
}

function checkForOddNumber( number ) {
    if( number % 2 === 0 ) {
        return false;
    } else {
        return true;
    }
}

printOddNumbersLessThan( 54 );

//QUESTION -> How does this help us in coding?
//ANSWER   -> The second function increases the readability of the function.