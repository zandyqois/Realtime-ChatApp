const express = require('express');
const cors = require('cors');
const http = require('http');
const initializeSocket = require('./controllers/socketController');

const app = express();
app.use(cors());

const server = http.createServer(app);

initializeSocket(server);

server.listen(3001, () => {
    console.log("Server listening on port 3001");
});
