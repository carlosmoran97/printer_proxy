const express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

const app = express();

app.use(cors());


const fs = require('fs');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/hw_proxy/hello', (req, res) => {
    console.log(req);
    res.send("Hola");
});

app.post('/hw_proxy/print_xml_receipt', (req, res) => {
    console.log(req.body.params.receipt);
    res.send("Hola");
});


app.listen(3000);