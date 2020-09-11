const express = require('express');
const mongoose = require('mongoose');
const app = express();

const port = process.env.PORT || 5000;
const path = require('path');

app.use(express.static('client/build'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/quiz');

const routes = require('./routes');
app.use('/api', routes);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/client/build/index.html'));
});

app.listen(port, () => {
    console.log(`App listening on port ${port}.`);
});
