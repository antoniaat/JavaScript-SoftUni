function validateRequest(obj) {
    const messageRegex = /^([^\$\<\>\\\&\'\"]+)$/gm;
    const uriRegex = /^([\w.]+)$/gm;

    function objValidation() {
        if(!obj.hasOwnProperty('method')){
            throw new Error('Invalid request header: Invalid Method')
        } else if (!obj.hasOwnProperty('uri')) {
            throw new Error('Invalid request header: Invalid URI')
        } else if (!obj.hasOwnProperty('version')) {
            throw new Error('Invalid request header: Invalid Version')
        } else if (!obj.hasOwnProperty('message')) {
            throw new Error('Invalid request header: Invalid Message')
        }

        return true;
    }

    if (objValidation()) {
        let methodValidation = obj.method === 'GET'
            || obj.method === 'POST'
            || obj.method === 'DELETE'
            || obj.method === 'CONNECT';

        let uriValidation = obj.uri !== '' || obj.uri === '*';

        let versionValidation = obj.version === 'HTTP/0.9'
            || obj.version === 'HTTP/1.0'
            || obj.version === 'HTTP/1.1'
            || obj.version === 'HTTP/2.0';

        if (methodValidation) {
            if (uriValidation || uriRegex.test(obj.uri)) {
                if (versionValidation) {
                    if (messageRegex.test(obj.message) || obj.message === '') {
                        console.log(obj);
                        return;
                    } else {
                        throw new Error('Invalid request header: Invalid Message')
                    }
                } else {
                    throw new Error('Invalid request header: Invalid Version')
                }
            } else {
                throw new Error('Invalid request header: Invalid URI')
            }
        } else {
            throw new Error('Invalid request header: Invalid Method')
        }
    }
}

let test0 = {
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
};

let test1 = {
    method: 'OPTIONS',
    uri: 'git.master',
    version: 'HTTP/1.1',
    message: '-recursive'
};

let test2 = {
    method: 'POST',
    uri: 'home.bash',
    message: 'rm -rf /*'
};

validateRequest(test2);