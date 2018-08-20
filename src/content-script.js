import server from './server';
import browser from './browser';

class EntryMain {
    bootstrap() {
        this._clearDocument();
        this._launchBrowser();
        this._newPage();
    }

    _clearDocument() {
        document.documentElement.innerHTML = '';
        window.stop();
    }

    _launchBrowser() {
        const options = {
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight,
            devicePixelRatio: window.devicePixelRatio
        };

        browser.launch(options);
    }

    _newPage() {
        browser.newPage(window.location.href);
    }

}

new EntryMain().bootstrap();
