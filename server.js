// 1- import/require express

const express = require('express');

const sayHi= require('./sayHi');

//2-intialisation of the application

const app = express();

// 3-creation of the port 

const PORT= 7000;

// 4-create the server

app.listen(PORT, (err, res) =>
err? console.error(err): console.log(`server listening on port ${PORT}`)); 
// 5-routing 

app.get('/', (req, res) => {res.send('<h1>hello January</h1>')})
//6-middleware 
app.use(express.json())
app.use(sayHi)
app.use('/api', require('./routes/students'))


app.get('/contact', (req, res) => {res.send('<h2>this is the contact component</h2>')})
app.get('/index', (req, res) => {res.sendfile('./index.html')})
app.get('/*', (req, res) => {res.send('<h2>NOT FOUND</h2>')})