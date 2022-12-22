'use strict';

// ! TASK 33
function describeCountry (country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}
console.log(describeCountry('Finland', 6, 'Helsinki'));
console.log(describeCountry('Germany', 83, 'Berlin'));
console.log(describeCountry('Spain', 47, 'Madrid'));

// ! TASK 34
// function percentageOfWorld1(population) {
//     return population / 7900 * 100;
// }
// const percentageOfWorld = percentageOfWorld1(83);
// console.log(percentageOfWorld);
// console.log(percentageOfWorld1(47));
// console.log(percentageOfWorld1(6));

const percentageOfWorld2 = function(population) {
    return population / 7900 * 100;
};
const percentageOfWorldResult2 = percentageOfWorld2(83);
console.log(percentageOfWorldResult2);
console.log(percentageOfWorld2(47));
console.log(percentageOfWorld2(6));

// ! TASK 35
const percentageOfWorld3 = population => population / 7900 * 100;
const percentageOfWorldResult3 = percentageOfWorld3(83);
console.log(percentageOfWorldResult3);

// ! TASK 36
function percentageOfWorld1(population) {
    return population / 7900 * 100;
}

const describePopulation = function(country, population) {
    const percentage = percentageOfWorld1(population);
    return `${country} has ${population} million people, which is about ${percentage}% of the world.`;
};
console.log(describePopulation('Finland', 6));
console.log(describePopulation('Germany', 83));
console.log(describePopulation('Spain', 47));

// ! 38 Coding Challenge #1
const calcAverage = (a, b, c) => (a + b + c) / 3;
let dolphinsAverage = calcAverage(44, 23, 71);
let koalasAverage = calcAverage(65, 54, 49);

const checkWinner = (avgDolhins, avgKoalas) => {
    if (avgDolhins >= avgKoalas * 2) {
        return `Dolphins are our winners (${avgDolhins} vs. ${avgKoalas}).`;
    } else if (avgKoalas >= avgDolhins * 2) {
        return `Koalas are our winners (${avgKoalas} vs. ${avgDolhins}).`;
    } else {
        return 'No winners 🤍';
    }
};
console.log(checkWinner(dolphinsAverage, koalasAverage));

// ! TASK 39
// function percentageOfWorld1(population) {
//     return population / 7900 * 100;
// }

const populations = [50, 150, 200, 23];
console.log(populations.length === 4 ? true : false);

const percentages = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]), percentageOfWorld1(populations[2]), percentageOfWorld1(populations[3])];
console.log(percentages);

// ! TASK 40
const neighbours = ['Denmark', 'Netherlands', 'Belgium'];
neighbours.push('Utopia');
console.log(neighbours);
neighbours.pop(neighbours.length - 1);
console.log(neighbours);
if (!neighbours.includes('Germany')){
    console.log('Is it Germany? Or not a central European country?');
} else {
    console.log('Oh, it\'s in central Europe.');
}
neighbours[0] = 'Sweden';
console.log(neighbours);

// ! 41 Coding Challenge #2
const calcTip = function(bill) {
    if (bill >= 50 && bill <= 300) {
        return bill * 0.15;
    } else {
        return bill * 0.2;
    }
};
console.log(calcTip(100));

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);

const total  = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(total);

// ! TASK 42-43-44
const myCountry = {
    country: 'Germany',
    capital: 'Berlin',
    language: 'german',
    population: 83,
    neighbours: ['Denmark', 'Netherlands', 'Belgium'],

    describe: function() {
        console.log(`${this.country} has ${this.population} milion ${this.language}-speaking people,
        ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`);
    },

    checkIsIsland: function() {
        this.isIsland = this.neighbours.length > 1 ? true : false;
        return this.isIsland;
    }
};

console.log(`${myCountry.country} has ${myCountry.population} milion ${myCountry.language}-speaking people,
            ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`);

myCountry.population += 2;
console.log(myCountry.population);

myCountry['population'] -= 2;
console.log(myCountry.population);

// ! 43 Coding Challenge
const winnie = { // order doesn't matter
    firstName: 'Winnie', // property: value
    lastName: 'the Pooh',
    age: 2037 - 1991,
    job: 'bear',
    friends: ['Eeyore', 'Piglet', 'Christopher']
};

console.log(`${winnie.firstName} has ${winnie.friends.length} friends, and his best friend is called ${winnie.friends[1]}.`);

// ! 44 Coding Challenge
const winniePooh = { // order doesn't matter
    firstName: 'Winnie', // property: value
    lastName: 'the Pooh',
    birthYear: 1926,
    job: 'bear',
    friends: ['Eeyore', 'Piglet', 'Christopher'],
    hasDriverLicense: true,

    calcAge: function() {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummary: function() {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job},
        and he has ${this.hasDriverLicense ? 'a' : 'no'} driver's license.`;
    }
};

console.log(winniePooh.getSummary());

// ! 45 Coding Challenge #3
const mark = {
    fistName: 'Mark',
    lastName: 'Miller',
    mass: 78,
    height: 1.69,

    calcBMI: function() {
        this.bmi = this.mass / (this.height * 2);
        return this.bmi;
    }
};

const john = {
    fistName: 'John',
    lastName: 'Smith',
    mass: 92,
    height: 1.95,

    calcBMI: function() {
        this.bmi = this.mass / (this.height * 2);
        return this.bmi;
    }
};

if (mark.bmi > john.bmi) {
    console.log(`${mark.fistName} ${mark.lastName}'s BMI (${mark.calcBMI()}) is higher than ${john.fistName} ${john.lastName}'s BMI (${john.calcBMI()}).`);
} else {
    console.log(`${john.fistName} ${john.lastName}'s BMI (${john.calcBMI()}) is higher than ${mark.fistName} ${mark.lastName}'s BMI (${mark.calcBMI()}).`);
}

// ! TASK 46
for (let i = 1; i <= 50; i++) {
    console.log(`Voter number ${i} is currenty voting`);
}

// ! TASK 47
function percentageOfWorld1(population) {
    return population / 7900 * 100;
}

const populations2 = [50, 150, 200, 23];
const percentages2 = [];
for (let i = 0; i < populations2.length; i++) {
    percentages2.push(percentageOfWorld1(populations2[i]));
}
console.log(percentages2);

// ! TASK 48
const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden',
'Russia']];
for (let i = 0; i < listOfNeighbours.length; i++) {
    for (let j = 0; j < listOfNeighbours[i].length; j++) {
        console.log(`Neighbour: ${listOfNeighbours[i][j]}`);
    }
}

// ! TASK 49
function percentageOfWorld1(population) {
    return population / 7900 * 100;
}

const populations3 = [50, 150, 200, 23];
const percentages3 = [];
let i = 0;
while (i < populations3.length) {
    const perc = percentages3.push(percentageOfWorld1(populations3[i]));
    i++;
}
console.log(percentages3);

// ! 50 Coding Challenge #4
// main
const calcTips = function(bill) {
    if (bill >= 50 && bill <= 300) {
        return bill * 0.15;
    } else {
        return bill * 0.2;
    }
};

const billsOfSteven = [22, 295, 176,  440, 37, 105, 10, 1100, 86, 52];
const tipsofSteven = [];
const totalOfSteven = [];

for(let i = 0; i < billsOfSteven.length; i++) {
    tipsofSteven.push(calcTips(billsOfSteven[i]));
    totalOfSteven.push(billsOfSteven[i] + tipsofSteven[i]);
}

console.log(tipsofSteven);
console.log(totalOfSteven);

// bonus
const calcAverageNum = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum / arr.length;
};
console.log(calcAverageNum([2, 3, 7]));