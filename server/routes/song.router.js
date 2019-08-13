const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');
// WE KNOW, FOR SURE, THIS ROUTE HAS '/api/'


router.get('/all-songs', (req, res) => {
    const queryText = 'SELECT * FROM "songs";';

    pool.query(queryText)
        .then((result) => {
            console.log(result)
            res.send(result.rows);
        })
        .catch((err) => {
            console.log('Error: ', err);
            res.sendStatus(500);
        });
});

router.post('/song', (req, res) => {
    const newSong = req.body;
    const queryText = `INSERT INTO "songs" ("artist", "track", "published")
                        VALUES ($1, $2, $3);`;
    
    pool.query(queryText, [newSong.artist, newSong.track, newSong.published])
        .then((result) => {
            res.sendStatus(201);
        })
        .catch((err) => {
            console.log('Error posting: ', err);
            res.sendStatus(500);
        });

});

module.exports = router;