
const path = require('path');
const express = require('express');
const parser = require('body-parser');

const mainRoutes = require('./routes/main')

const device = require('express-device')
const app = express();


app.use(device.capture())
app.use(parser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'pug')

app.use(mainRoutes);


PORT = 3000;

app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`)
})