#!/usr/bin/env node
/* eslint-disable no-console */

import readlineSync from 'readline-sync';
import getNameGreetings from '../src/cli.js';

const getEvenNumber = () => {
  getNameGreetings();
  console.log('Answer "yes if the number is even, otherwise answer "no"');
  readlineSync.question('Question: ');
};

