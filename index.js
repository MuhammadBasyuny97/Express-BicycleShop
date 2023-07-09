
const express = require('express');
const app = express();
const bicycles = require('./data/data.json');
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req,res) => {
    res.render('bicycles', {bicycles});
})

app.get('/bicycle' , (req,res) => {
    console.log(req.query.id);
    const bicycle = bicycles.find( b => b.id === req.query.id);
    console.log(bicycle);
    res.render('overview', {bicycle});
})

app.listen(3000, (req,res) => {
    console.log('Server is running successfully on Port 3000');
})