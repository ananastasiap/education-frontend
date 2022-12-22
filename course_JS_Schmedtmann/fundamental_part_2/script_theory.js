'use strict'; // activate strict mode

// ! 33 Functions
// example 1
function myNameIs() { // myNameIs(parameters) {
    console.log('My name is Ano');
}
// calling / running / invoking function
myNameIs ();

// example 2
function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const mixJuice = fruitProcessor(5, 9);
console.log(mixJuice);
// console.log(fruitProcessor(5, 9));

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

// ! 34 Function Declarations vs. Expressions
// * Function Declaration
// const age1 = calcAge1(2000);

function calcAge1(birthYear) {
    const age = 2037 - birthYear;
    return age;
    // return 2037 - birthYear;
}
const age1 = calcAge1(2000); // (argument) -- can call before define

// * Function Expressions
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
};
const age2 = calcAge2(2000);

console.log(age1, age2);

// ! 35 Arrow Functions
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(2000);
console.log(age3);

const yearsUntilRetirement = (birthYear, fisrtName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${fisrtName} retires in ${retirement} years.`;
};
console.log(yearsUntilRetirement(2000, 'Ano'));
console.log(yearsUntilRetirement(1991, 'Jonas'));

// ! 36 Functions Calling Other Functions
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    console.log(apples, oranges);
    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of oranges.`;
    return juice;
}
console.log(fruitProcessor(2, 3));

// ! 37 Reviewing Functions
const calAge = function(birthYear) {
    return 2037 - birthYear;
};

function yearsTilRetirement (birthYear, fisrtName) {
    const age = calAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${fisrtName} retires in ${retirement} years.`);
        return retirement;
    } else {
        console.log(`${fisrtName} has already retired.`);
        return -1;
    }
}
const retirementBeIn = yearsTilRetirement (1955, 'Ano');
console.log(retirementBeIn);

// ! 39 Introduction to Arrays
// 1
const friends = ['Eeyore', 'Piglet', 'Christopher'];
console.log(friends);

// 2
const years = new Array(1991, 1984, 2008, 2020);

// number of elements
console.log(friends.length);

// a way to get out elements
console.log(friends[0]);
console.log(friends[friends.length  - 1]);

// add elements
friends[2] = 'Robin';
console.log(friends);
// * only primitive values are immutable but array is not a primitive value
// friends = ['Bob', 'Sam']; -- wrong

const fisrtName = 'Winnie';
const ano = [fisrtName, 'the Pooh', 2037 - 2000,
                'bear', friends];
console.log(ano);

// exercise
const calcAge =  function(birthYear) {
    return 3037 - birthYear;
};
const year = [1990, 1967, 2002, 2010, 2018];

// calcAge(year); -- wrong, we get NaN

const age90 = calcAge(year[0]);
const age67 = calcAge(year[1]);
const age18 = calcAge(year[year.length - 1]);
console.log(age90, age67, age18);

const ages = [calcAge(year[0]), calcAge(year[1]), calcAge(year[year.length - 1])];
console.log(ages);

// ! 40 Basic Array Operations (Methods)
// add elements to the end of an array
const friendsOfWinnie = ['Eeyore', 'Piglet', 'Christopher'];
const newLength = friendsOfWinnie.push('Roo'); // if we immidiately need our new length
console.log(friendsOfWinnie);
console.log(newLength);

// add to the beginning of an array
friendsOfWinnie.unshift('Kanga');
console.log(friendsOfWinnie);

// remove elements
friendsOfWinnie.pop(); // last element
const popped = friendsOfWinnie.pop();
console.log(popped);
console.log(friendsOfWinnie);

friendsOfWinnie.shift(); // fist element
console.log(friendsOfWinnie);

// index
console.log(friendsOfWinnie.indexOf('Piglet'));
console.log(friendsOfWinnie.indexOf('Bob'));

console.log(friendsOfWinnie.includes('Piglet'));
console.log(friendsOfWinnie.includes('Bob'));

friendsOfWinnie.push(23);
console.log(friendsOfWinnie.includes('23')); // FALSE: 23 is an integer -> here it's a string

// help with conditionals
if (friendsOfWinnie.includes('Roo')) {
    console.log('Hi, Roo!');
} else {
    friendsOfWinnie.push('Roo');
    console.log('We add him!');
}

// ! 42 Introduction to Objects
const winnieArray = [
    'Winnie',
    'the Pooh',
    2037 - 2000,
    'bear',
    ['Eeyore', 'Piglet', 'Christopher']
];

const winnieObject = { // order doesn't matter
    firstName: 'Winnie', // property: value
    lastName: 'the Pooh',
    age: 2037 - 1991,
    job: 'bear',
    friends: ['Eeyore', 'Piglet', 'Christopher']
};

// ! 43 Dot vs. Bracket Notation
const winnie = { // order doesn't matter
    firstName: 'Winnie', // property: value
    lastName: 'the Pooh',
    age: 2037 - 1991,
    job: 'bear',
    friends: ['Eeyore', 'Piglet', 'Christopher']
};

// ? Dot notation
console.log(winnie.lastName);

// ? Bracket notation
console.log(winnie['lastName']);

const nameKey = 'Name';
console.log(winnie['last' + nameKey]); // only for brackets
console.log(winnie['first' + nameKey]);

const interestedIn = prompt(`What do you want to know about Jonas? Choose between
        firstName,
        lastName,
        age,
        job,
        friends.`);
// console.log(winnie[interestedIn]); // correct
//console.log(winnie.interestedIn); // wrong -> undefined (falsy)

if (winnie[interestedIn]) {
    console.log(winnie[interestedIn]);
} else {
    console.log('Wrong reqest! Choose between firstName, lastName, age, job, friends.');
}

// to add properties to the Object
winnie.location = 'the Hundred Acre Wood';
winnie['twitter'] = '@bigpoohbear';
console.log(winnie);

// ! 44 Object Methods
// ? Arrays are also Objects. We can use the same methods.
// ? Create our own methods -->
const winniePooh = { // order doesn't matter
    firstName: 'Winnie', // property: value
    lastName: 'the Pooh',
    birthYear: 1926,
    job: 'bear',
    friends: ['Eeyore', 'Piglet', 'Christopher'],
    hasDriverLicense: true,

    // calcAge: function(birthYear) {  --> function in Object is a method
    //     return 2037 - birthYear;
    // }

    calcAge: function() {
        return 2037 - this.birthYear;
    }

    // calcAge: function() {
    //     this.age = 2037 - this.birthYear;
    //     return this.age;
    // }
};

console.log(winniePooh.calcAge());

// console.log(winniePooh.age);

// console.log(winniePooh.calcAge(1926));
// console.log(winniePooh['calcAge'](1926));
// console.log(winniePooh.calcAge(winniePooh.birthYear));
// console.log(winniePooh['calcAge'](winniePooh['birthYear']));

// ! 46 Iteration The for Loop
for(let rep = 1; rep <= 10; rep++) { // rep = rep + 1
    console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}

// ! 47 Looping Arrays, Breaking and Continuing
const poohArray = [
    'Winnie',
    'the Pooh',
    2037 - 2000,
    'bear',
    ['Eeyore', 'Piglet', 'Christopher']
];

const types = [];

for(let i = 0; i < poohArray.length; i++) {
    // reading array
    console.log(poohArray[i], typeof poohArray[i]);

    // filling types array
    // types[i] = typeof poohArray[i];
    types.push(typeof poohArray[i]);
}

console.log(types);

const givenYears = [1991, 2007, 1969, 2022];
const receivedAge = [];
for(let i = 0; i < givenYears.length; i++) {
    receivedAge.push(2037 - givenYears[i]);
}
console.log(receivedAge);

// ? continue and break
// * need only strings
for(let i = 0; i < poohArray.length; i++) {
    if (typeof poohArray[i] !== 'string') {
        continue;
    }
    console.log(poohArray[i], typeof poohArray[i]);
}

// * break with number
for(let i = 0; i < poohArray.length; i++) {
    if (typeof poohArray[i] !== 'number') {
        break;
    }
    console.log(poohArray[i], typeof poohArray[i]);
}

// ! 48 Looping Backwards and Loops in Loops
const thePoohArray = [
    'Winnie',
    'the Pooh',
    2037 - 2000,
    'bear',
    ['Eeyore', 'Piglet', 'Christopher']
];

for(let i = thePoohArray.length - 1; i >= 0; i--) {
    console.log(i, thePoohArray[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`------- Starting exercise ${exercise}`);

    for(let rep = 0; rep < 6; rep++) {
        console.log(`Lifting weight repetition ${rep}`);
    }
}

// ! 49 The while Loop
for(let rep = 1; rep <= 10; rep++) { // rep = rep + 1
    console.log(`FOR: Lifting weights repetition ${rep} 🏋️‍♀️`);
}

let rep = 1;
while (rep <= 10) {
    console.log(`WHILE: Lifting weights repetition ${rep} 🏋️‍♀️`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('Loop is about to end...');
}