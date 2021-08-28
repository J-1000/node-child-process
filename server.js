const express = require('express');
const app = express();

app.get('/default', (req, res) => { });

app.get('/promise', (req, res, next) => { });

app.get('/child-process', (req, res) => { });

app.listen(3000, () => console.log('Server listening on port 3000'));