const path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const fetch = require("node-fetch");
const dotenv = require('dotenv');
dotenv.config();

const PORT = 3000

const BASE_API_URL = 'https://api.meaningcloud.com/sentiment-2.1'

const app = express()

const cors = require('cors')
app.use(cors())

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static('dist'))

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

app.post('/add-url', async (req, res, next) => {
    try {
        const url = req.body.url
        const urlRequest = `${BASE_API_URL}?key=${process.env.API_KEY}&url=${url}&lang=en`

        const response = await fetch(urlRequest)
            .then(res => res.json())
            .catch(err => {
                next(err)
            })

        const sample = {
            score_tag: response.score_tag,
            agreement: response.agreement,
            subjectivity: response.subjectivity,
            confidence: response.confidence,
            irony: response.irony
        }

        console.log('Response:', response)
        res.json(sample)

    } catch (error) {
        console.log(error.message)
    }
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

app.listen(PORT, (error) => {
    if (error) throw new Error(error)
    console.log(`Server listening on port ${PORT}!`)
})

module.exports = app
