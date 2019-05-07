const http = require('http');
const app = require('./app');

//get port num from environment variable or hard code 3000
const port = process.env.PORT || 3000;

//create server to pass listener
const server = http.createServer(app);
server.listen(port);
