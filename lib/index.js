//get JSON with axios and store on computer with node filing system
import axios from 'axios';
import * as fs from 'node:fs';
import FormData from 'form-data';

// Fetch JSON as a stream
const response = await axios.get('https://api.usaspending.gov/api/v2/agency/012/awards', { responseType: 'stream' });
const form = new FormData();

// Open file as a readable stream
const fileStream = fs.createReadStream('./files');

// Pass file stream directly to form
form.append('data', fileStream, 'data.json');
const responses = await axios.post('https://api.usaspending.gov/api/v2/agency/012/awards', form);
console.log(responses.data)
console.log(response.data)

