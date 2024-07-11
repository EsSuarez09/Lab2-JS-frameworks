// Import functions from the mayuke JS file
import { personName, convertMinutesToHours, calculateFactorial, computeGrade } from './mayuke.js';

//We are in group#18
console.log("\n----Lab#2 of Maria, Yuka, and Kevin. Alyas (MAYUKE) ----\n");

// Callin the 4 functions below
personName("Mayuke", "Sunasem");

const minutes = 120; 
console.log(`${minutes} minutes is equal to ${convertMinutesToHours(minutes)} hour/s`);

const num = 5;
console.log(`The Factorial of ${num} is = ${calculateFactorial(num)}`);

const score = 95;
console.log(`A score of ${score} will gets a grade of ${computeGrade(score)}.`);
