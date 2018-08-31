function solve() {
    class Request {
        response;
        fulfilled;

        constructor(public method: string,
             public uri: string, 
             public version: string, 
             public message: string) {
            this.response = undefined;
            this.fulfilled = false;
        }
    }

    let myData = new Request('Get', 'http://google.com', 'HTTP/1.1', '');
    console.log(myData);
}

solve();