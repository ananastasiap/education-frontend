// ! Comments parts where variables are the same
/*
// 9
let js = "amazing";
console.log(40 - 3 - 3 - 3);

// 10 [Values and Variables]
console.log("Jonas");

let firstName = "God";
console.log(firstName); // Camel case
// _ and $ also can be used as a start
*/


/*
// ! 12 [Data Types]
let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 2);
console.log(typeof "javascriptIsFun");

// dynamic typing
javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

// undefined
let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(year);
console.log(typeof year);

// null -- is not an object. in output is a bug
console.log(typeof null);
*/

// ! 14 Basic Operators
const currentYear = 2037;
const ageJonas = currentYear - 1991;
const ageSarah = currentYear - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const hisFirstName = "Jonas";
const hisLastName = "Schmedtmann";
console.log(hisFirstName + " " + hisLastName);

// assignment operators
let x = 10 + 5;
x += 10;
x *= 4;
x++;
x--;
console.log(x);

// comparison operators
console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(currentYear - 1991 > currentYear - 2018);

/*
// ! 15 Operator Precedence
let x, y;
x = y = 25 - 10 - 5;
console.log(x, y); // both 10
*/

// ! 17 Strings and Template Literals
const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(jonasNew);

console.log('Starting with \n\
multiple \n\
lines')

console.log(`Starting with
multiple
lines`);

/*
// ! 18 Taking Decisions_ if _ else Statements
const age = 15;
// ? const isOldEnough = age >= 18;

if (age >= 18) {
    console.log('Sarah can start driving license 😎'); // win + .
} else {
    const yearsLeft = 18 - age;
    console.log(`${age} is no enough! You need to be ${yearsLeft} years older 😥`);
}

const birthYear = 2000;
let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);
*/

// ! 20 Type Conversion and Coercion
// type conversion
const inputYear = '1991';
console.log(Number(inputYear));
console.log(inputYear + 18);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23));

// type coercion
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3); // opposite coercion
console.log('23' * 2); // so as '/' operator


// ! 21 Truthy and Falsy Values
// 5 falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean('Jonas'));

const money = 0;
if (money) {
    console.log("Don't spend it all ;)");
} else {
    console.log('Get a job!');
}

let height;
if (height) {
    console.log('DEFINED');
} else {
    console.log('UNDEFINED');
}

// ! 22 Equality Operators == vs. ===
console.log(18 == '18'); // loose
console.log(18 === '18'); // strict

const favourite = prompt('What is your favourite number?');
console.log(favourite);
console.log(typeof favourite);

if (favourite == 13) { // '13' == 13
    console.log('Cool! 13 is a great number!');
} else if (favourite == 7) {
    console.log('7 is also normal');
} else {
    console.log('There are no 13 or 7');
}

// example with !==
if (favourite !== 7) {
    console.log('Well, I hope it is 13');
} else if (favourite !== 13) {
    console.log('Choose 13 or 7');
}

// ! 24 Logical Operators
const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// const shouldDrive = hasDriversLicense && hasGoodVision;

// if (shouldDrive) {
//     console.log('Sarah is able to drive!');
// } else {
//     console.log('Sarah should not drive!');
// }

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision || isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive!');
} else {
    console.log('Sarah should not drive!');
}

// ! 26 The switch Statement
const day = prompt('What day? (lower case, please)'); // const day = 'monday'

switch (day) {
    case 'monday': // day === 'monday'
        console.log('Work');
        console.log('Jogging');
        console.log('Play video games');
        break; // without a break it would continue down a structure
    case 'tuesday':
        console.log('Work');
        console.log('Restaurant');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Work');
        console.log('Play video games');
        break;
    case 'friday':
        console.log('Cleaning a flat');
        console.log('Make a dinner');
        console.log('Watch movie');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Some trips');
        break;
    default:
        console.log('Not a valid day!');
}

// ! 27 Statements and Expressions

// 3 + 4 / true && false / 1991 --- Expressions [produce values]

// Statements: [doesn't produce values]
if (23 > 10) {
    const str = '23 is bigger'; // but str is an expression
}

// ! 28 The Conditional (Ternary) Operator
const age = 23;
age >= 18 ? console.log('I like to drink wine 🍷') : console.log('I like to drink juice 🧃');
// statement ? if true : if false;

const drink = age >= 18 ? 'to drink wine 🍷' : 'to drink juice 🧃';
console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = 'to drink wine 🍷';
} else {
    drink2 = 'to drink juice 🧃';
}
console.log(drink2);

console.log(`I like ${age >= 18 ? 'to drink wine 🍷' : 'to drink juice 🧃'}`);
