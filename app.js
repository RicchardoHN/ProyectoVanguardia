const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

const db = require('./database');

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(express.static('public'));

const personas = require('./router/persona');
app.use(personas);

app.get('/', (req, res)=>{
    res.send('Probando Integracion Manual');
})

app.listen(port, ()=>{
    console.log('Server is up!');
})