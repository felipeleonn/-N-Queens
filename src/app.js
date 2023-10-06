const express = require('express')
const app = express()
const path = require('path');

const router = require('./route')

app.use(express.static("public"));  

app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

app.listen(3000, () => console.log("Servidor en puerto 3000"))



app.use(router);