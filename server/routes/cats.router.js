const express = require('express');
const router = express.Router();

router.get('/meow', (req,res) => {
    
    res.send('Meow');
});

router.get('/mammals/four-legged/feline', (req,res) => {
    res.send('Also meow');
})

module.exports = router;