'use strict';

// ! PROBLEM 1
// 1) Understanding the problem
// Get an amplitude and do not forget about sensor errors

// 2) Breaking up into sub-problems
// get array
// remove errors
// calculate an amplitude

// REMOVE ALL 'ERROR'
const temperatures1 = [3, -2, -6, -1, 'error', 9, 13, 17, 'error', 15, 14, 9, 5];
const temperatures2 = [6, 20, -1, 'error', 9, 13, 17, 15, 16, 3, -7];

// CALCULATE AN AMPLITUDE
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

const calcTempAmplitude = function (t1, t2) {

    const temps = t1.concat(t2);

    for (let i = 0; i < temps.length; i++) {
        if (temps[i] === 'error') {
            temps.splice(i, 1);
            i--; // As the items are removed from the array the index still
                 // increments and the next item after your matched value is skipped.
                // The simple solution is to modify the above example to decrement the
                // index variable so it does not skip the next item in the array.
        }
    }

    let max = temps[0];
    for (let i = 0; i < temps.length; i++) {
        if (temps[i] > max) {
            max = temps[i];
        }
    }

    let min = temps[0];
    for (let i = 0; i < temps.length; i++) {
        if (temps[i] < min) {
            min = temps[i];
        }
    }

    return max - min;

    // let max = temps[0];
    // let min = temps[0];
    // for (let i = 0; i < temps.length; i++) {
    //  const curTemp = temps[i];
    //  if (typeof curTemp !== 'number') continue;
    //  if (curTemp > max) max = curTemp;
    //  if (curTemp < min) min = curTemp;

};

const amplitude = calcTempAmplitude(temperatures1, temperatures2);
console.log(amplitude);
// console.table();

// ! PROBMLEM 2:
// Function should receive 2 arrays of temps

// 1) Understanding the problem
// Merge 2 arrays
// 2) Breaking up into sub-problems
// How to merge 2 arrays? -> merge 2 arrays