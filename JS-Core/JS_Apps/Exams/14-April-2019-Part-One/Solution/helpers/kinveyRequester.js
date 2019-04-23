const requester = function () {
    const baseUrl = 'https://baas.kinvey.com/';

    const request = function (url, method, headers, data) {
        data = data || {};
        headers = headers || {};

        headers['Content-Type'] = 'application/json';

        if (storage.getData('authToken')) {
            headers.Authorization = 'Kinvey ' + JSON.parse(storage.getData('authToken'));
        }
        
        return $.ajax({
            url: baseUrl + url,
            method: method,
            headers: headers,
            data: JSON.stringify(data)
        });
    };

    const get = function (url, headers, data) {
        return request(url, 'GET', headers, data);
    };

    const post = function (url, headers, data) {
        return request(url, 'POST', headers, data);
    };

    const put = function (url, headers, data) {
        return request(url, 'PUT', headers, data);
    };

    const del = function (url, headers, data) {
        return request(url, 'DELETE', headers, data);
    };

    return {
        get,
        post,
        put,
        del
    }
}();