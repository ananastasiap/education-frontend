// ! Comments parts where variables are the same
/*
// ! 11 TASKS
// 1
let country = "Russia";
const continent = "Euroasian";
let population = 144;
// 2
console.log("This country is " + country + ".");
console.log(`Its continent is ${continent}.`);
console.log("The population is " + population + ".");
*/

/*
// ! TASKS 12.1
// 1
const isIsland = false;
let language;
// 2
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

// 13 let, const and var
let age = 30;
age = 31; // mutated this variable
console.log(age);

const birthYear = 1991;
// birthYear = 1992;
// const job; - only initial variable!
console.log(birthYear);

var job = "teacher"; // do not use
job = "director";
console.log(job);
*/

// ! TASKS 14.1
const country = 'Germany';
let populationOfGermany = 83;
console.log(populationOfGermany / 2);
console.log(populationOfGermany + 1);
let populationOfFinland = 6;
console.log(populationOfGermany > populationOfFinland);
let averagePopulation = 33;
console.log(populationOfGermany < averagePopulation);
let description = `${country} is in Europe, and its ${populationOfGermany} million people speak german`;
console.log(description);

// ! 16 Coding challenge #1
let massMark;
let heightMark;
let massJohn;
let heightJohn;

// test data 1
massMark = 78;
heightMark = 1.69;
let bmiMark = massMark / (heightMark ** 2);
console.log(bmiMark);

heightJohn = 1.95;
massJohn = 92;
let bmiJohn = massJohn / (heightJohn ** 2);
console.log(bmiJohn);

let markHigherBMI;
markHigherBMI = bmiMark > bmiJohn;
console.log(markHigherBMI);

// test data 2
massMark = 95;
heightMark = 1.88;
bmiMark = massMark / (heightMark ** 2);
console.log(bmiMark);

heightJohn = 1.76;
massJohn = 85;
bmiJohn = massJohn / (heightJohn ** 2);
console.log(bmiJohn);

markHigherBMI = bmiMark > bmiJohn;
console.log(markHigherBMI);

// ! 19 Coding Challenge #2
const markMass = 95;
const markHeight = 1.88;
const johnMass = 85;
const johnHeight = 1.76;

const marksBMI = markMass / markHeight ** 2;
const johnsBMI = johnMass / johnHeight ** 2;

if (marksBMI > johnsBMI) {
    console.log(`Mark's BMI(${marksBMI}) is higher than John's (${johnsBMI})`);
} else {
    console.log(`John's (${johnsBMI}) is higher than Mark's BMI(${marksBMI})`);
}

// ! TASK 22
const numNeighbours = prompt('How many neighbour countries does your country have?');

if (Number(numNeighbours) === 1) {
    console.log(`Only ${numNeighbours} border!`);
} else if (Number(numNeighbours) > 1) {
    console.log(`There are ${numNeighbours} borders`);
} else {
    console.log('No borders!');
}

// ! TASK 24
const language = prompt('Language?');
const population = prompt('Population?') ;
const notIsland = prompt('Not an island? (Yes or No)');
const goodForSarah = language === 'english' && Number(population) < 50 && notIsland === 'Yes';

if (goodForSarah) {
    console.log('This country is good for Sarah');
} else {
    console.log("It's not good for Sarah");
}

// ! 25 Coding Challenge #3
// standart
const dolphinsAverage = (96 + 108 + 89) / 3;
const koalasAverage = (88 + 91 + 110)/ 3;

if (dolphinsAverage > koalasAverage) {
    console.log(`Dolphins are our winners! Their score is bigger on ${dolphinsAverage - koalasAverage}.`);
} else if (koalasAverage > dolphinsAverage) {
    console.log(`Koalas are our winners! Their score is bigger on ${koalasAverage - dolphinsAverage}.`);
} else {
    console.log(`It is a draw! Score is ${dolphinsAverage}.`);
}
/*
// ? BONUS 1
const dolphinsAverage = (97 + 112 + 101) / 3;
const koalasAverage = (109 + 95 + 123)/ 3;

if (dolphinsAverage > koalasAverage && dolphinsAverage >= 100) {
    console.log(`Dolphins are our winners! Their score is bigger on ${dolphinsAverage - koalasAverage} points.`);
} else if (koalasAverage > dolphinsAverage && koalasAverage >= 100) {
    console.log(`Koalas are our winners! Their score is bigger on ${koalasAverage - dolphinsAverage} points.`);
} else {
    console.log(`It is a draw! Score is ${dolphinsAverage}.`);
}

// ? BONUS 2
const dolphinsAverage = (97 + 112 + 101) / 3;
const koalasAverage = (109 + 95 + 106)/ 3;

if (dolphinsAverage > koalasAverage && dolphinsAverage >= 100) {
    console.log(`Dolphins are our winners🏆! Their score is bigger on ${dolphinsAverage - koalasAverage} points.`);
} else if (koalasAverage > dolphinsAverage && koalasAverage >= 100) {
    console.log(`Koalas are our winners🏆! Their score is bigger on ${koalasAverage - dolphinsAverage} points.`);
} else if (dolphinsAverage === koalasAverage && dolphinsAverage >= 100 && koalasAverage >= 100) {
    console.log(`It is a draw🏆! Score is ${dolphinsAverage}.`);
} else {
    console.log('No one gets the trophy.');
}
*/

// ! TASK 26
const languagePersonNeed = prompt('What language? (lower case, please');
switch (languagePersonNeed) {
    case 'chinese':
    case 'mandarin:':
        console.log('MOST number of native speakers!');
        break;
    case 'spanish':
        console.log('2nd place in number of native speakers');
        break;
    case 'english':
        console.log('3rd place');
        break;
    case 'hindi':
        console.log('Number 4');
        break;
    case 'arabic':
        console.log('5th most spoken language');
        break;
    default:
        console.log('Great language too :D');
}

// ! TASK 28
const countryPopulation = 13;
// const check = countryPopulation >= 33 ? 'Ano\'s population is above average'
//                                         : 'Ano\'s population is below average';
// console.log(check);

const check = countryPopulation >= 33 ? 'above': 'below';
console.log(`Ano's population is ${check} average.`);


// ! 29 Coding Challenge #4
const bill = 275; // 420, 40
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}.`);