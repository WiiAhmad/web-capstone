const express = require('express');
const axios = require('axios');
const cors = require('cors'); // Import the cors package
const app = express();
const port = 3001;

// Use the cors middleware
app.use(cors());
app.use(express.json());

app.post('/api/sentiment', async (req, res) => {
  const { comment } = req.body;
  const apikey = "UBNIR4fK6wlyQHimI9RqR8oqcd1TFLrfo55Rkm-RLmoj";

  try {
    const tokenResponse = await axios.post('https://iam.cloud.ibm.com/identity/token', null, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json'
      },
      params: {
        'grant_type': 'urn:ibm:params:oauth:grant-type:apikey',
        'apikey': apikey
      }
    });

    const mltoken = tokenResponse.data.access_token;
    console.log('Comment :', comment);
    console.log('ml token : ', mltoken);
    const payloadScoring = {
      input_data: [{ values: [[comment]] }]
    };
    //console.log('payload scoring :', payloadScoring);

    const responseScoring = await axios.post(
      'https://us-south.ml.cloud.ibm.com/ml/v4/deployments/lstmkel3/predictions?version=2021-05-01',
      payloadScoring,
      { headers: { 'Authorization': 'Bearer ' + mltoken } }
    );

    res.json(responseScoring.data);
    //console.log('responseScoring : ', responseScoring.data);
  } catch (error) {
    console.error("Error fetching sentiment analysis:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Backend server running at http://localhost:${port}`);
});