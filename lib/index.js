import axios from 'axios';
import express from "express"
import router from "./routes/index.js"

const router = express.Router();
const app = express();
app.use(express.json());
app.use('/', router);
app.listen(4000, () => console.log('listening on port 4000'))

const url = 'https://api.usaspending.gov/api/v2/agency/019/'
const fetch = async () => {
    const response = await axios.get(url)
    return response.data
}
const urls = 'https://api.usaspending.gov/api/v2/agency/012/budget_function/'
const fetchs = async () => {
    const responses = await axios.get(urls)
    return responses.data
}
const urlss = 'https://api.usaspending.gov/api/v2/agency/020/budget_function/'
const fetchss = async () => {
    const responsess = await axios.get(urlss)
    return responsess.data
}
fetch();
fetchs();
fetchss();