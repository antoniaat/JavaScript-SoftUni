const storage = function () {
    const appKey = 'kid_ByZQkV4JN';
    const appSecret = 'a4991b1523544ee29e1e41c809b93ff1';

    const saveData = function (key, value) {
        localStorage.setItem(appKey + key, JSON.stringify(value));
    };

    const getData = function (key) {
        return JSON.parse(localStorage.getItem(appKey + key));
    };

    const deleteData = function(key) {
        localStorage.removeItem(appKey + key);
    };

    const saveUser = function(data){
        storage.saveData('userInfo', {
            id: data._id,
            username: data.username,
            firstName: data.first_name,
            lastName: data.last_name
        });

        storage.saveData('authToken', data._kmd.authtoken);
    };

    const deleteUser = function(){
        storage.deleteData('authToken');
        storage.deleteData('userInfo');
    };

    return {
        saveData,
        getData,
        deleteData,
        appKey,
        appSecret,
        saveUser,
        deleteUser
    }
}();