const userModel = function () {

    const login = function (params) {

        let data = {
            username: params.username,
            password: params.password
        };

        let authStr = btoa(`${params.username}:${params.password}`);
        let headers = { Authorization: 'Basic ' + authStr };
        let url = `user/${storage.appKey}/login`;

        return requester.post(url, headers, data);
    };

    const logout = function () {
        let url = `user/${storage.  appKey}/_logout`;
        return requester.post(url);
    };

    const register = function (params) {

        let data = {
            username: params.username,
            password: params.password,
        };

        let authStr = btoa(`${storage.appKey}:${storage.appSecret}`);
        let headers = { Authorization: 'Basic ' + authStr };
        let url = 'user/' + storage.appKey;

        return requester.post(url, headers, data);
    };

    return {
        login,
        logout,
        register
    }
}();