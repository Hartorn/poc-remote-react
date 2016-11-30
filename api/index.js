'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');

const MOCKED_API_PORT = process.env.API_PORT || 9999;
const API_ROOT = '/api';


const app = express();
app.use(bodyParser.text());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Allow CORS.
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    next();
});


app.get(API_ROOT + '/remote/:componentName', function getAllNotifications(req, res) {
    const pluginPath = `../plugins-comp/${req.params.componentName}.js`;
    const srcCode = fs.readFileSync(path.resolve(__dirname, pluginPath), 'UTF-8');

    res.set('Content-Type', 'application/javascript');
    res.send(srcCode)
});

const server = app.listen(MOCKED_API_PORT, function serverCallback() {
    console.log('Mocked entity API listening at http://localhost:%s', MOCKED_API_PORT);
}
);