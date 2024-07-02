const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

// Configure the window size
const windowSize = 10;
let numberWindow = [];

app.get('/numbers/:numberid', async (req, res) => {
  const numberId = req.params.numberid;
  const validIds = ['p', 'f', 'e', 'r'];
  const windowPrevState = [...numberWindow];

  // Check for a valid number ID