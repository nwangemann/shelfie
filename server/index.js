require('dotenv').config();
const express = require('express');
const massive = require('massive');
const {SERVER_PORT, CONNECTION_STRING} = process.env;
const app = express();
app.use(express.json());
const ctrl = require('./controller/controller')

massive(CONNECTION_STRING)
.then(db => {
    app.set("db", db)
    console.log('connected to db')
})

app.get('/api/inventory', ctrl.getInventory)

app.listen(SERVER_PORT, () => console.log(`Servin' up some heat on port ${SERVER_PORT}`));