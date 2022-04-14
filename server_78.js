//
//const express = require('express');

import express from 'express';
import { allowedNodeEnvironmentFlags } from 'process';

const app = express();

app.get('/',(req, res) => {
    res.send('Welcome 鄭芷琳 209410678');
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));