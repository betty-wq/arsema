const express = require('express');
const logController = express.Router();
const Log = require('../models/logs.js')

logController.get('/', (req, res) => {
    res.render('Index')
})

