//load hhtp module
const http = require('http');

//create a HTTP server and register the connecte handler
const server = http.createServer((request, response) => {
    //check if the route is /
    if (request.url === '/') {
        response.write("Hello from node.js");
        response.end();
    }
    if (request.url === '/dummy/api/players') {
        //go to database and get players
        //here we mimic this by calling the function getPlayers
        //which returns an array of Player objects
        //load hhtp module
        const getPlayers = require('./app7-players');

        let players = getPlayers();
        response.write(JSON.stringify(players));
        response.end();
    }
});
//tell the server to listen on port 55000
server.listen(55000);
console.log("Server started and listening on port 55000");