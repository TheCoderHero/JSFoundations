'use strict';

//Writing Large Numbers
let billion = 1000000000; //Terrible, easy to mistype
let betterBillion = 1e9;  //1 with 9 0s
                          // e = * 1 + 0s
console.log(7.3e9);       // 7.3 * 1,000,000,000 -> 7300000000

//Writing Small Numbers
let microsecond = 0.000001; //Terrible, easy to mistype
let betterMS = 1e-6;        //decimal with 6 0s
                            // e- = / 1 + 0s
console.log(1.23e-6);       // 1.23 / 1,000,000 -> 0.00000123

//Hex, Binary, and Octal Numbers
//HEX
console.log( 0xff ); //-> 255
console.log( 0xFF ); //-> 255

let hex = 0xFF; //255

//BINARY
let binary = 0b11111111; //255

//OCTAL
let octal = 0o377; //255

console.log( 'Are they the same: ' + ( hex == binary ));
console.log( 'Are they the same: ' + ( octal == binary ));
console.log( 'Are they the same: ' + ( octal == hex ));

//METHOD toString(base)
let numberToConvert = 255;
console.log( numberToConvert.toString(10) ); //-> 255 DECIMAL
console.log( numberToConvert.toString(16) ); //-> ff HEX
console.log( numberToConvert.toString(2) );  //-> 11111111 BINARY

//Call method directly on number
console.log( 255..toString(16) ); //-> ff
//First dot = decimal, Second dot = method

//ROUNDING
let roundNumber = 3.123;

//Round Down
console.log( Math.floor(roundNumber) ); //-> 3

//Round Up
console.log( Math.ceil(roundNumber) ); //-> 4

//Round to nearest whole integer
console.log( Math.round(roundNumber) ); //-> 3

//Simply remove decimals
console.log ( Math.trunc(roundNumber) ); //-> 3

//Manually round number to nth decimal
//2 decimal places
console.log( Math.floor( roundNumber * 100) / 100 );
// 3.123 * 100 = 312.3 Floor = 312 / 100 = 3.12

//Round with toFixed(x) returns string representation
console.log(roundNumber.toFixed(2)); //-> 3.12

//toFixed(x) also rounds to the nearest decimal place
let newRoundedNumber = 3.126;
console.log(newRoundedNumber.toFixed(2)); //-> 3.13

//toFixed(x) will also add 0s if not enough digits are supplied
console.log(newRoundedNumber.toFixed(6)); //-> 3.126000

//toFixed(x) can be changed to a number using Number object or + unary
let actualNumber = +newRoundedNumber.toFixed(3);
console.log(actualNumber);

//Numbers larger than 64 bits return Infinity
console.log(1e500); //-> Infinity

//Precision causes comparison errors
console.log( 'Are they equal: ' + ( ( 0.1 + 0.2 ) == 0.3 ) ); //-> false
console.log( 0.1 + 0.2 );

//What can we do? Use toFixed(x) and turn it into a number
let decimalNumber = 0.1 + 0.2;
let fixedDecimal = +decimalNumber.toFixed(1);
console.log( 'Are they the same: ' + (fixedDecimal == 0.3) );

//isNaN
console.log( isNaN(NaN) ); //-> true
console.log( isNaN('The Coder Hero') ); //-> also true

//NaN does not equal NaN, it equals nothing
console.log ( NaN === NaN ); //-> false

//isFinite(value) return true for numbers but not Infinity, -Infinity, and NaN
console.log( isFinite('15') ); //-> true
console.log( isFinite('The Coder Hero') ); //-> false
console.log( isFinite(Infinity) ); //-> false

//Empty strings are considered 0 and will pass isFinite(vale)
let newString = '';
console.log( isFinite(newString) ); //-> true

//Object.is(value1, value2) works the same as === for special cases
console.log( Object.is( NaN, NaN) ); //-> true
//Outside of special cases, it works as a === comparison operator

//parseInt() and parseFloat() read numbers until they can't
console.log( +'100px' ); //-> NaN

console.log( parseInt('100px') ); //-> 100
console.log( parseFloat('12.5em') ); //-> 12.5

console.log( parseInt('12.5') ); //-> 12
console.log( parseFloat('1.2.3') ); //-> 1.2

//If string starts with a letter, both functions return NaN
console.log( parseInt('a12.5') ); //-> NaN
console.log( parseFloat('b1.2.3') ); //-> NaN

//Second argument for parseInt()
console.log( parseInt(0xFF, 16) ); //Second argument is the base number 16 = hex & octal
console.log( parseInt(0o377, 16) );

//Other Math Functions
//Math.random()
console.log( Math.random() ); //-> Random number from 0 to 1 NOT including 1

//How to get a random number between 2 numbers?
console.log( Math.floor( Math.random() * 100 ) ); //-> Some random number between 0 - 99
console.log( Math.floor( Math.random() * 101 ) + 1 ); //-> Some random number between 1 - 100

//Math.max()
console.log( Math.max(6, 8, 12, 23, 4, 56, -109, 52) ); //-> 56

//Math.min()
console.log( Math.min(6, 8, 12, 23, 4, 56, -109, 52) ); //-> -109

//Math.pow(n, power)
console.log( Math.pow(2, 10) ); //-> 1024