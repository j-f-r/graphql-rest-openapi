const { server } = require('./src/app');

server().listen(3000, function () {
    console.log('Listening on port 3000');
});