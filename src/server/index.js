var path = require('path');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mockAPIResponse = require('./mockAPI.js');
var aylien = require('aylien_textapi');
const dotenv = require('dotenv');

dotenv.config();
// set aylien API credentials
var textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
});
// aylian API function
const test = textapi.sentiment(
    {
        text: 'John has brown eyes.'
    },
    function(error, response) {
        if (error === null) {
            console.log(response);
        }
    }
);

const app = express();

app.use(express.static('dist'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
console.log(__dirname);

app.get('/', function(req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('dist/index.html'));
});

// designates what port the app will listen to for incoming requests
app.listen(8080, function() {
    console.log('Example app listening on port 8080!');
});
// Mock API
app.get('/test', function(req, res) {
    res.send(mockAPIResponse);
});
// Aylien API
app.post('/aylien', function(req, res) {
    console.log('POST request is being processed.');
    console.log('Input is ', req.body);
    const output = textapi.sentiment(
        {
            text: req.body.text
        },
        function(error, response) {
            if (error === null) {
                console.log(response);
            }
        }
    );
    console.log(output);
    res.send(req.body);
});
