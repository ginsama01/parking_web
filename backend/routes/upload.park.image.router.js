const express = require("express");
const uploadRouter = express.Router();
const authenticate = require('../authenticate');
const multer = require('multer');
const { dbConnect } = require("../connectDB");
const models = require('../models/models');

uploadRouter.use(express.json());

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images');
    },

    filename: (req, file, cb) => {
        dbConnect.query("SELECT image_url FROM park WHERE park_id = " + req.params.parkId + ";", {
            type: dbConnect.QueryTypes.SELECT
        }).then(images => {
            var image = images[0].image_url;
            if (image == null) {
                image = 'images/' + file.originalname;
            } else {
                image = image + ',images/' + file.originalname;
            }
            models.Park.update({image_url: image}, {
                where: {
                    park_id: req.params.parkId
                }
            }).then(() => {
                cb(null, file.originalname);
            }, (err) => next(err))
            .catch(err => next(err));
        }, (err) => next(err))
        .catch(err => next(err));
    }
});

const imageFileFilter = (req, file, cb) => {
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif|PNG)$/)) {
        return cb(new Error('You can upload only image files!'), false);
    }
    cb(null, true);
};

const upload = multer({ storage: storage, fileFilter: imageFileFilter });

uploadRouter.route('/:parkId')
    .post(upload.single('file'), (req, res, next) => {
        res.statusCode = 201;
        res.json({success: true});
    })


module.exports = uploadRouter;