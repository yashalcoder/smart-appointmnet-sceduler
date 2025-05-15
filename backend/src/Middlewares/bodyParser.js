// src/middleware/bodyParser.js

import express from 'express';

// Middleware function to parse JSON and URL-encoded data
const bodyParserMiddleware = (app) => {
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
};

export default bodyParserMiddleware;
