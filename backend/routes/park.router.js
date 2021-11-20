const express = require('express');
const cors = require('./cors');
const models = require('../models/models');
const { dbConnect } = require('../connectDB');

const parkRouter = express.Router();

parkRouter.use(cors.cors);
parkRouter.use(express.json());

parkRouter.route('/')
    .get((req, res, next) => {
        
    })