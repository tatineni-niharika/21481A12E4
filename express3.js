const express = require('express');
const axios = require('axios');
const app = express();
const port = 9876;

// Configure the window size
const windowSize = 10;
let numberWindow = [];

// Helper function to fetch numbers from the Test Server API
async function fetchNumbers(type) {
  try {
    const response = await axios.get(`http://testserver.com/numbers/${type}`, { timeout: 500 });
    return response.data;
  } catch (error) {
    // Handle errors and timeouts
    return null;
  }
}

// Helper function to calculate the average
function calculateAverage(numbers) {
  const sum = numbers.reduce((acc, val) => acc + val, 0);
  return (sum / numbers.length).toFixed(2);
}

// Define the API endpoint
app.get('/numbers/:numberid', async (req, res) => {
  const numberId = req.params.numberid;
  const validIds = ['p', 'f', 'e', 'r'];

  // Validate the number ID
  if (!validIds.includes(numberId)) {
    return res.status(400).send('Invalid number ID');
  }

  // Fetch numbers from the Test Server API
  const newNumbers = await fetchNumbers(numberId);

  if (newNumbers) {
    // Update the number window with unique values
    newNumbers.forEach(num => {
      if (!numberWindow.includes(num)) {
        numberWindow.push(num);
      }
    });

    // Limit the stored numbers to the window size
    while (numberWindow.length > windowSize) {
      numberWindow.shift(); // Remove the oldest number
    }
  }

  // Calculate the average
  const avg = calculateAverage(numberWindow);

  // Format the response
  const response = {
    windowPrevState: [...numberWindow],
    windowCurrState: newNumbers ? [...numberWindow, ...newNumbers] : [...numberWindow],
    numbers: newNumbers || [],
    avg: avg
  };

  // Send the response
  res.json(response);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
