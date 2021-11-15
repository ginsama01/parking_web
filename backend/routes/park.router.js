const express = require('express');
const cors = require('./cors');
const models = require('../models/models');
const { dbConnect } = require('./connectDB');

const parkRouter = express.Router();

parkRouter.use(express.json());
parkRouter.use(cors.corsWithOptions);

parkRouter.route('/')
    .get((req, res, next) => {
        
    })