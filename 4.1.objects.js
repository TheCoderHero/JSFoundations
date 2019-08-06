'use strict';

//QUESTION -> What is an object?
//ANSWER   -> A representation of a real world object and a data type
//            that stores keyed collections of data.

//QUESTION -> How do you create an object?
//ANSWER   -> With an Object Contructor or an Object Literal.

//Object Constructor
let user = new Object();

//Object Literal
let blankUser = {};

//QUESTION -> What is the data stored in the object called?
//ANSWER   -> The object's properties.

//QUESTION -> How are properties named?
//ANSWER   -> With key : value pairs.

let definedUser = {
    name: "The Coder Hero",
    age: 37,
    "code language": "JavaScript",
};

//QUESTION -> Can I use any data type for a property name?
//ANSWER   -> No! All property names are strings. Other data types
//            are converted to a string. 123 becomes '123'

//QUESTION -> Do I have to define keys with quotation marks?
//ANSWER   -> No! Only double worded keys require quotation marks.

//QUESTION -> How do I access a property of the object?
//ANSWER   -> With the object name and property name.

console.log( definedUser.name );
console.log( definedUser[ "age" ] );

//QUESTION -> Can I add properties to an object later in the code?
//ANSWER   -> Yes! Using dot notation, you can add properties.

definedUser.isAwesome = true;

//QUESTION -> Can I remove properties of an object?
//ANSWER   -> Yes! using the ( delete ) operation.

delete definedUser.age;

//QUESTION -> How do you handle multi-word properties?
//ANSWER   -> Using bracket notation.

definedUser[ "can code" ] = true;
console.log( definedUser[ "can code" ] );
delete definedUser[ "can code" ];

//QUESTION -> Can you store key names in variables?
//ANSWER   -> Yes! Bracket notation must be used for variables.

definedUser.question = "What is your coding language?";
let codeQuestion = "question";

console.log( definedUser[ codeQuestion ] );

//QUESTION -> Why is this useful?
//ANSWER   -> You can store the key dynamically during runtime
//            and then access the object's property.

let folder = prompt( "Which property would you like access to?", "name" );
console.log( definedUser[ folder ] );

//QUESTION -> Can you set an object property with a variable?
//ANSWER   -> Yes! In an Object Literal you can use square bracket notation.
//            This is called a Computed Property.

let bugz = prompt( "Which bugz is in your code?", "typeError" );

let coderBugz = {
    [bugz]: 1,
};

console.log( coderBugz.typeError ); //-> 1

//QUESTION -> Can you do complex expressions with square brackets?
//ANSWER   -> Yes! Square brackets allows you to perform computations and evaluations.

let completeBugz = {
    [ 'Uncaught ' + bugz ] : 2, 
};

console.log( completeBugz[ 'Uncaught typeError'] ); //-> 2

//QUESTION -> Why do we use bracket notation?
//ANSWER   -> Bracket notation allows any property name or variable to be used.

//QUESTION -> When should you use dot notation?
//ANSWER   -> For single word properties that are known before run time.

//QUESTION -> Are there property names that are reserved?
//ANSWER   -> Unlike variables, only _proto_ is reserved.

let crazyObject = {
    for: 10,
    let: 20,
    return: 30,
};

console.log( crazyObject.for + crazyObject.let + crazyObject.return ); //-> 60

//QUESTION -> Can functions return objects?
//ANSWER   -> Yes! Functions can return collections of data which are stores as an object.

function returnObjectData() {
    return {
        number: 10,
        string: 'Hello World!',
        boolean: true,
        null: null,
        undefined: undefined,
    };
}

let dataTypeObject = returnObjectData();
console.log( dataTypeObject.number ); //-> 10

//QUESTION -> Can a function pass arguments to an object that has the same property names?
//ANSWER   -> Yes! This is called Property Value Shorthand

function makeDeveloper(name, age, language) {
    return {
        name: name,
        age: age,
        language: language,
    };
}

let newDeveloper = makeDeveloper( 'Mark', 21, 'HTML' );
console.log( newDeveloper.language );

//QUESTION -> Is there a shorter way to do this? 
//ANSWER   -> Yes! You only have to write the argument/property name.

function makeWebDeveloper (name, age, language){
    return {
        name,
        age,
        language,
    };
}

let newWebDev = makeWebDeveloper( 'Kyle', 22, 'CSS' );
console.log( newWebDev.name );

//QUESTION -> Will the code throw an error if I try to access a property
//            that doesn't exist?
//ANSWER   -> No! The return value will be undefined

console.log( newWebDev.keyboard ); //-> undefined

//QUESTION -> Is there a way to check if a property is or is not in the object?
//ANSWER   -> Yes! Use the "key" ( in ) object operator.

console.log( "name" in newWebDev ); //-> true
console.log( "pant size" in newWebDev ); //-> false

//QUESTION -> How does the "key" ( in ) object operator work?
//ANSWER   -> The object key must be in quotes. Then the code loops through the object's
//            properties to find a match.

//QUESTION -> How do you loop through an object?
//ANSWER   -> Use a for ( let placeholder in object ) Loop

for ( let key in newWebDev ) {
    console.log( "Folder: " + key );
    console.log( "Folder Content: " + newWebDev[key] );
}

//QUESTION -> How useful is this loop?
//ANSWER   -> Very useful. We will mark this code here for future reference!

/*****************************
 * OBJECT FOR...IN LOOP
 ****************************/

//QUESTION -> Do objects maintain their created order?
//ANSWER   -> Yes and No! Integers are ordered numerically.
//            Non-integers are ordered by creation order.

let numbers = {
    51 : "Fifty-One",
    4 : "Four",
    92 : "Ninety-Two",
    15 : "Fifteen",
    105 : "One Hundred and Five",
    "efg": 51,
    "abc": 10,
    "hij": 1,
};

for ( let key in numbers ){
    console.log( key );
}

//QUESTION -> Can I make integers string to resolve the issue?
//ANSWER   -> No! The string will be converted to an integer.

//QUESTION -> Is there a way to order integers by creation order?
//ANSWER   -> Yes! Make them strings and add a letter or symbol to the front.

let areaCodeKeys = {
    "+559" : "Fresno",
    "+602" : "Phoenix",
    "+310" : "Los Angeles",
    "+512" : "Austin",
};

for ( let areaCode in areaCodeKeys ) {
    console.log( areaCode );
}

//QUESTION -> Are objects copied like primitive data types?
//ANSWER   -> No! Objects are copied by reference!

let mainCabinet = {
    folder_01: "Top Secret",
    folder_02: "Public",
    folder_03: "Empty",
};

let adminAccess = mainCabinet;

//QUESTION -> What happens if you change the copied reference?
//ANSWER   -> Both the copy and origional are changed.

adminAccess.folder_01 = "Public";
console.log( mainCabinet.folder_01 );

//QUESTION -> Is there a way to compare objects?
//ANSWER   -> Yes! But only by comparing the references.

//QUESTION -> When will object comparison equal true?
//ANSWER   -> When both objects reference a single object.

let objA = {}; // object 1
let objB = objA;

console.log( objA == objB ); //-> true
console.log( objA === objB ); //-> true

//QUESTION -> When will object comparison equal false?
//ANSWER   -> When both objects reference different objects.

let objC = {}; // object 1
let objD = {}; // object 2

console.log( objC == objD ); //-> false;
console.log( objC === objD ); //-> false

//QUESTION -> Can objects be declared as constant?
//ANSWER   -> Yes! But that does not make their properties constant.

const cabinet = {
    folder_a: "Images",
    folder_b: "Text Docs",
    folder_c: "Homework",
};

cabinet.folder_d = "Memes";
delete cabinet.folder_c;
cabinet.folder_a = "Music";

//QUESTION -> What does making an Object constant do?
//ANSWER   -> Prevents you from reassigning the Object.

const objectName = {
    name: 'An Object',
    data: 'Properties',
};

//QUESTION -> What happens if you try to reassign a constant Object?
//ANSWER   -> Uncaught TypeError: Assignment to constant variable

/***********************************
 * ERROR CODERBUGZ CONTAINMENT FIELD
 *
 *      objectName = {
 *          number: 10;
 *      };
 *
 * ERROR CODERBUGZ CONTAINMENT FIELD
 **********************************/

//QUESTION -> What if I need an independent copy of an Object?
//ANSWER   -> Create a new Object and copy over the properties.

let hero = {
    name: "The Coder Hero",
    age: 37,
    alignment: 'Good',
};

let evilClone = { };

for( let key in hero ) {
    evilClone[ key ] = hero[ key ];
}

evilClone.name = 'The Evil Coder Hero';
evilClone.alignment = 'Evil';

console.log( evilClone );

//QUESTION -> Is there another way to do this?
//ANSWER   -> Yes! Object Method ( assign )

/******************************************************
 * Object.assign( destination, source1, source2, ... )
 ******************************************************/

let superPower1 = { web: 'HTML' };
let superPower2 = { design: 'CSS' };
let superPower3 = { program: 'JavaScript' };
let superPower4 = { database: 'PostgreSQL' };

Object.assign( hero, superPower1, superPower2, superPower3, superPower4 );

console.log( hero );

//QUESTION -> Do properties get over-written using the ( assign ) method?
//ANSWER   -> Yes! If an object has the same property, it will be overwritten.

//QUESTION -> Can you use ( assign ) method for an empty object?
//ANSWER   -> Yes! This is actually easier to write than the ( for...in ) loop.

let newHero = Object.assign( {}, hero );