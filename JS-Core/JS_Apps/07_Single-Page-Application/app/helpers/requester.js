const requester = function(){
    const baseUrl = 'https://baas.kinvey.com/';

    const call = function(url, data, headers, method){
        data = data || {};
        headers = headers || {};
        url = baseUrl + url;

        headers["Content-Type"] = 'application/json';
        headers["X-Kinvey-API-Version"] = 3;

        if(!!storage.getData('authToken')) {
            headers.Authorization = 'Kinvey ' + storage.getData('authToken');
        }

        return $.ajax({
            url: url,
            method: method,
            headers: headers,
            data: JSON.stringify(data)
        });
    };

    const get = function(url, data, headers){
        return call(url, data, headers, 'GET');
    };

    const post = function(url, data, headers){
        return call(url, data, headers, 'POST');
    };

    const put = function(url, data, headers){
        return call(url, data, headers, 'PUT');
    };

    const del = function(url, data, headers){
        return call(url, data, headers, 'DELETE');
    };

    return {
        get, 
        post,
        put,
        del
    };
}();