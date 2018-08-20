import io from 'socket.io-client';
import { serverConfig } from './server-config';
import messageType from './messages';

class Server {
    constructor() {
        this._socket = io(serverConfig.address);

        this._socket.on('connect', () => {
            this._socket.emit(messageType.connected, {message: 'client connected'});
        });

        this._socket.on('disconnect', () => {
            this._socket.emit(messageType.disconnect, {message: 'client disconnected'});
        });

        this._socket.on(messageType.pageDataServerToClient, (data) => {
            console.log('===>', data);
            document.head.innerHTML = data.head;
            document.body.innerHTML = data.body;
        });
    }

    get socket() {
        return this._socket;
    }
}

const server = new Server();

export default server;