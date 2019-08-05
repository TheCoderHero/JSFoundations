'use strict';

let userName = 'The Coder Hero';

//QUESTION -> What is a function declaration?
//ANSWER   -> Giving a function a name.

function showGreeting(){
    let message = "I'm Javascript!";
    console.log( 'Hello ' + userName + '! ' + message );
}

//QUESTION -> Is there another way to create a function?
//ANSWER   -> Yes! A Function Expression.

let greetHero = function() {
    console.log( `Hello ${ userName }! I'm JavaScript!` );
};

//QUESTION -> Does a function expression work differently?
//ANSWER   -> No! Both functions store data into a variable.

showGreeting();
greetHero();

//QUESTION -> Is there a way to see the code?
//ANSWER   -> Yes! You can print out the data stored in the variable.

console.log( greetHero );
console.log( showGreeting );

//QUESTION -> What is special about function expressions?
//ANSWER   -> We can use them like regular variables.

//QUESTION -> What is an example of thie functionality?
//ANSWER   -> Copying the function code to another variable.

let copyOfGreetHero = greetHero;

copyOfGreetHero();
console.log( copyOfGreetHero );

//QUESTION -> Why is there a semi-colon at the end of a Function Expression?
//ANSWER   -> Because it is not a code block, but an assignment ( = ) operation.

//QUESTION -> What is the typical reason to use Function Expressions?
//ANSWER   -> As callback functions.

//QUESTION -> What is a callback function?
//ANSWER   -> A passed function that will be used later.

function autoFix( askQuestion, handleYes, handleNo ) {
    if( confirm( askQuestion ) ) {
        handleYes();
    } else { 
        handleNo();
    }
}

function showAutoBugFix() {
    console.log( 'Bug has been fixed!' );
}

function showManualBugFix() {
    console.log( `OK, we'll let you figure it out!` );
}

//QUESTION -> What are the callback functions in this function?
//ANSWER   -> showAutoBugFix and showManualBugFix.

autoFix( 'CoderBugz Detected! Would you like us to fix your bug automagically?', showAutoBugFix, showManualBugFix );

//QUESTION -> How do we do this with Function Expressions?

autoFix(
    'CoderBugz has created a new bug! AutoFix bug?',
    //The 2 functions below are considered 'anonymous'
    function() { console.log( 'CoderBugz bug has been zapped!' ); },
    function() { console.log( 'Do your thing! Zap that bug!' ); }
);

//QUESTION -> Why don't the Function Expressions have a name?
//ANSWER   -> These are called Anonymous Function Expressions.

//QUESTION -> What are the main differences between Function Declarations and Function Expressions?
//ANSWER   -> Function Expressions are created when the script gets to it.
//            Function Declarations are created when the script initializes
//            Function Expressions can only be seen from within the function
//            Function Declarations can be seen by the whole script.

//QUESTION -> Is there an easier way to write Function Expressions?
//ANSWER   -> Yes! Arrow Functions.

let startBugSearch = confirm( 'Continue scanning for bugz?' ) ?
    () => console.log( 'Let me check your code real quick!' ) :
    () => console.log( 'Sorry, we need to check!' );

startBugSearch();

//QUESTION -> How do Arrow Function work?
//ANSWER   -> Arrow Functions take arguments from left of ( => )
//            then evaluate the expression to the right of ( => )

//QUESTION -> What are the parenthesis for?
//ANSWER   -> Shows no arguments passed to the Arrow Function.

let getBugCode = function() {
    return 'Syntax Error!';
};

console.log( getBugCode() );

autoFix(
    `Don't be mad. CoderBugz is at is again. Autofix time?`,
    () => console.log( 'Issue Resolved! No more problems.' ),
    () => console.log( 'Use your super coder powers and fix that bug!' )
);

//QUESTION -> Do you always need parenthesis?
//ANSWER   -> No! Parenthesis are not needed if a single argument is used.

//QUESTION -> How do you handle multiline expressions?
//ANSWER   -> Use a code block.

let multiplyByTwo = num1 => {
    let result = num1 * 2;
    return result;
};

console.log( multiplyByTwo( 6 ) ); //-> 12