
import * as https from 'http'
import App from './App';

const port = normalizePort(process.env.PORT || 80);

App.set('port',port);
const server = https.createServer(App);
server.listen(port);
server.on('error', onError);
server.on('listening', onListning);

function normalizePort(val: number|string): number|string|boolean {
    let port:number = (typeof val === 'string') ? parseInt(val,10) : val;
    if(isNaN(port)) return val;
    else if (port >= 0) return port;
    else return false;
}


function onError(error: NodeJS.ErrnoException) : void {
    if(error.syscall != 'listen') throw error;
    let bind = ((typeof port === 'string') ? 'Pipe' : 'Port') + port;
    switch (error.code) {
        case 'EACCES':
            console.log(`!! ERROR: ${bind} requires elevated privileges.`);
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.log(`!! ERROR: ${bind} is laready in use.`);
            process.exit(1);
        default:
            throw error;
    }
}

function onListning():void {
    let addr = server.address();
    let bind = ((typeof addr === 'string') ? `Pipe ${addr}` : `port ${addr?.port}`);
    console.log(`Listning on ${bind}`);
}
