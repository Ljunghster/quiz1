const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/scores', (req, res) => {
    db.Score.find({})
        .then(scores => {
            scores = scores.sort((score1, score2) => {
                if (score1.score < score2.score) {
                    return 1;
                }

                if (score1.score > score2.score) {
                    return -1;
                }

                return 0;
            });
            scores = scores.slice(0, 3);
            res.status(200).json(scores);
        })
        .catch(err => {
            res.status(500).send(err);
        });
});

router.post('/scores', (req, res) => {
    console.log(req.body)
    const { name, score, time } = req.body;

    db.Score.create({ name, score, time })
        .then(score => {
            res.status(200).json(score);
        })
        .catch(err => {
            res.status(500).send(err);
        });
});

module.exports = router;
