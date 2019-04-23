const storage = function () {
    const appKey = "kid_S1htVfcmm";
    const appSecret = "d62f982c84374a1f9879b4cdb757f03e";

    const saveData = function (key, value) {
        localStorage.setItem(appKey + key, JSON.stringify(value));
    };

    const getData = function (key) {
        return localStorage.getItem(appKey + key);
    };

    const deleteData = function (key) {
        localStorage.removeItem(appKey + key);
    };

    const saveUser = function (data) {
        storage.saveData('userInfo', data);
        storage.saveData('authToken', data._kmd.authtoken);
        storage.saveData('events', data.organizerOn);
    };

    const deleteUser = function () {
        storage.deleteData('userInfo');
        storage.deleteData('authToken');
    };

    return {
        appKey,
        appSecret,
        saveData,
        getData,
        deleteData,
        saveUser,
        deleteUser
    }
}();