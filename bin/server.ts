import http from 'http';
import { app } from '../app/app';
import config from '../src/config/config';

const port = normalizePort(config.port || '3000');

const server = http.createServer(app);

app.set('port', port);

server.listen(port);
server.on('error', onError);

console.log("Running " + config.info + " Server in Port: " + port);

function normalizePort(val: any) {
    const portNormalize = parseInt(val, 10);

    if (isNaN(portNormalize)) {
        return val;
    }
    if (portNormalize >= 0) {
        return portNormalize;
    }
    return false;
}

function onError(error: any) {
    if (error.syscall !== 'listen') {
        throw error;
    }
    const bind = typeof port === 'string' ?
        'Pipe ' + port :
        'Port ' + port;

    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}