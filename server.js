// Step 1: Initialize Node.js Project
// In your local environment, you would run `npm init` and install the necessary packages with:
// `npm install express body-parser cors --save`

// Step 2: Create Express Server
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const app = express();

// Step 3: Serve Static Files
app.use(express.static('public')); // Assuming your HTML, CSS, and JS files are in a directory named 'public'
app.use(bodyParser.json());
app.use(cors());

// Step 4: Handle Form Submission
app.post('/submit-metadata', (req, res) => {
  const jsonData = req.body;
  console.log('Received JSON data:', jsonData);

  // Step 5: Simulate Database Interaction
  // This will save the JSON data to a file named 'metadata.json'
  fs.writeFile('metadata.json', JSON.stringify(jsonData, null, 2), (err) => {
    if (err) {
      console.error('Error writing to file', err);
      res.status(500).send('Error writing to file');
      return;
    }

    // Step 6: Respond to the Client
    res.status(200).send('Data received and saved');
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
