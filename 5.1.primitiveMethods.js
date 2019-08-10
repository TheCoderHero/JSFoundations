'use strict';

let hero = {
    name: 'The Coder Hero',
    sayName: function() {
        console.log('I am ' + this.name + '!');
    },
};

hero.sayName();

//Object Wrappers: String, Number, Boolean, and Symbol
let catchphrase = 'stop evil bugz!';
console.log( catchphrase.toUpperCase() );

let powerPunch = 100.99767; //7 rounds up the number to 1.00 OR 101.00
console.log( powerPunch.toFixed(2) );

//Primitive constructors are not good to use
console.log(typeof 0); //-> 'number'
console.log(typeof new Number(5)); //-> 'object'

let ten = new Number(0);
if(ten) { //ten will ALWAYS be true because it is an object
    console.log('ten is truthy!');
}

//Primitive Object functions can be good to use for conversion
let stringToNumber = Number('101');