const express = require('express');
const app = express();
const port = 3001;
const db = require('./db');

const hostname = '0.0.0.0';


app.listen(port, hostname, () => {
        console.log(`Server running! hanbatcom.systems:${port}`);
});

app.get('/', function(req, res) {
        res.send("<h1>Hello World!</h1>");
});

app.get('/env', (req, res) => {
        let envList = new Object();
        let showList = new Object();
        db.query('SELECT * FROM env ORDER BY id DESC LIMIT 7', function(error, results, fields) {
                if (error) {
                        console.log(error);
                } else {
                        envList = JSON.parse(JSON.stringify(results));
                        showList = JSON.stringify(envList.reverse());
                        res.send(showList);
                }
        });
});

app.get('/newEnv', (req, res) => {
        let envList = new Object();
        let showList = new Object();
        db.query('SELECT * FROM env ORDER BY id DESC LIMIT 1', function(error, results, fields) {
                if (error) {
                        console.log(error);
                } else {
                        envList = JSON.parse(JSON.stringify(results));
                        showList = JSON.stringify(envList.reverse());
                        res.send(showList);
                }
        });
});