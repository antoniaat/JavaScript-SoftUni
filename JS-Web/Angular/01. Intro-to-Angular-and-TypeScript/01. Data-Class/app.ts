function solve() {
    class Request {
        method;
        uri;
        version;
        message;
        response;
        fulfilled;
    
        constructor (method: string, uri: string, version: string, message: string) {
            this.method = method;
            this.uri = uri;
            this.version = version;
            this.message = message;
            this.response = undefined;
            this.fulfilled = false;
        }
    
    }

    let myData = new Request('Get', 'http://google.com', 'HTTP/1.1', '');
}

solve();

