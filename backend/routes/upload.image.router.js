const express = require("express");
const uploadRouter = express.Router();
const { dbConnect } = require("../connectDB");
const models = require('../models/models');
const fs = require('fs');
var path = require('path');

uploadRouter.use(express.json());

uploadRouter.route('/:parkId')
    .post((req, res, next) => {
        const data = req.body.image;
        dbConnect.query("SELECT image_url FROM park WHERE park_id = " + req.params.parkId + ";", {
            type: dbConnect.QueryTypes.SELECT
        }).then(result => {
            var number = 0;
            var url = '';
            if (result.length != 0) {
                const image_url = result[0].image_url.split(',');
                for (let i = 0; i < image_url.length; ++i) {
                    var last = image_url[i].lastIndexOf('-');
                    number = Math.max(Number(image_url[i].slice(last + 1, -3)), number);
                }
                url = result[0].image_url;
            }
            number = number + 1;
            for (let i = 0; i < data.length; ++i) {
                const name = data[i].fileAsBase64;
                const base64data = new Buffer.from(name.replace(/^data:image\/\w+;base64,/, ""), 'base64');
                fs.writeFileSync('public/images/park-image-' + req.params.parkId + '-' + number + '.jpg', base64data);
                if (url == '') {
                    url = 'images/park-image-' + req.params.parkId + '-' + number + '.jpg';
                } else {
                    url = url + ',images/park-image-' + req.params.parkId + '-' + number + '.jpg';
                }
                number = number + 1;
            }
            console.log(url);
            models.Park.update({image_url: url}, {
                where: {
                    park_id: req.params.parkId
                }
            }).then(() => {
                res.json({ sucess: true });
            }, err => next(err))
        }, err => next(err))
        .catch(err => next(err));
    })

module.exports = uploadRouter;