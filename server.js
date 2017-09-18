/* Hey! This file runs a server. When people connect to our web site, this helps them find the game they are
looking for. Have questions about what's happening here? Ask Steven! */
const express = require('express'),
    config = require('./package'),
    server = express();


server.set('port', (process.env.PORT || 5678));
server.use(express.static('public'));

server.get('/', (req, res) => {
    res.send("Hello world!");
});

server.listen(config.port, () => {
  console.log(`Server listening on port ${server.get('port')}`);
});
