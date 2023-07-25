#!/usr/bin/env node


import { question } from 'readline-sync';
import getNameAndSayHello from '../src/getNameSayHello.js';
import randomizer from '../src/valueRandomize.js';

console.log('Welcome to the Brain Games!');
const userName = getNameAndSayHello();
console.log(`Hello, ${userName}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');
do {
    const gameQuestion = 1;
    const gameValue = randomizer();

    console.log(`Question: ${gameValue}`);

    const userAnswer = question('Your answer: ');

    console.log(userAnswer);

    console.log();
} while (question <= 3);

