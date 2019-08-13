const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

const songRouter = require('./routes/song.router');
const catsRouter = require('./routes/cats.router');

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/', songRouter);
app.use('/pets/', catsRouter);


app.listen(PORT, () => {
    console.log('Listening on port: ', PORT);
});