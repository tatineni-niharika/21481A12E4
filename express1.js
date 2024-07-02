const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

// Configure the window size
const windowSize = 10;
let numberWindow = [];

// Function to calculate average
const calculateAverage = (numbers) => {
  const sum = numbers.reduce((acc, val) => acc + val, 0);
  return (sum / numbers.length).toFixed(2);
};

app.get('/numbers/:numberid', async