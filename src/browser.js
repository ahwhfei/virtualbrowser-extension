import messageType from './messages';
import server from './server';

class Browser {
    static launch(options) {
        server.socket.emit(messageType.launchBrowser, options);
    }

    static newPage(url) {
        server.socket.emit(messageType.newPage, {url});
    }
}

export default Browser