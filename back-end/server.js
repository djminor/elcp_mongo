const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/elcp', {
    useNewUrlParser: true
});

app.post('/api/words', async(req, res) => {
    const word = new Word({
        word: req.body.word,
        language: req.body.language,
        engWord: req.body.engWord
    });
    try {
        await word.save();
        res.send(word);
    } catch(error) {
        console.log(error);
        res.sendStatus(500);
    }
});

const wordSchema = new mongoose.Schema({
    word: String,
    language: String,
    engWord: String
}); 

app.get('/api/words', async(req, res) => {
    try {
        let words = await Word.find();
        res.send(words);
    }   catch(error) {
        console.log(error);
        res.sendStatus(500);
    }
});

const Word = mongoose.model('Word', wordSchema);

app.listen(3000, () => console.log('Server open on port 3000!'));