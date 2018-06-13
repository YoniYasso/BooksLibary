const express = require('express');
const path = require('path');
const app = require();

app.use(express.static(__dirname + '/dist'));
app.listen(process.env.PORT || 8080);
