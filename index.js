const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const colors = require('colors');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const service = require('./service');

app.post('/', service);

app.listen(PORT);

console.log(colors.green('Magic happens at http://localhost:' + PORT));
