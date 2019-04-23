const validator = function () {

    const userAction = function (params) {
        let isRegisterAction = params.rePassword;
        let username = params.username;
        let password = params.password;

        let rePassword;
        let isRePasswordValid;
        
        let usernamePattern = /[A-Za-z0-9]{4,}/g;
        let passwordPattern = /[A-Za-z0-9]{6,}/g;

        let isUsernameValid = usernamePattern.test(username);
        let isPasswordValid = passwordPattern.test(password);

        if(isRegisterAction){
            rePassword = params.rePassword;
            isRePasswordValid = (password === rePassword);
        }

        let result = {
            result: false
        };

        if (isUsernameValid && isPasswordValid && isRePasswordValid) {
            result.username = username;
            result.password = password;
            result.rePassword = rePassword;
            result.result = true;
        } else if(isUsernameValid && isPasswordValid && isRegisterAction === undefined) {
                result.username = username;
                result.password = password;
                result.result = true;
        } else {
            result.username = isUsernameValid;
            result.password = isPasswordValid;

            if(isRegisterAction){
                result.rePassword = isRePasswordValid;
            }
        }

        return result;
    };

    const eventAction = function (params) {
        let namePattern = /^[\sA-Za-z0-9]{4,}$/g;
        let datePattern = /^[\sA-Za-z0-9.-]{6,}$/g;
        let descriptionPattern = /(.){20,}/g;
        let urlPattern = /^http[s]?:\/\/(.+)$/g;

        let isNameValid = namePattern.test(params.name);
        let isDateValid = datePattern.test(params.dateTime);
        let isDescriptionValid = descriptionPattern.test(params.description);
        let isUrlValid = urlPattern.test(params.imageURL);

        let result = {
            result: false
        };

        if(isNameValid && isDateValid && isDescriptionValid && isUrlValid){
            result.result = true;
            result.name = params.name;
            result.dateTime = params.dateTime;
            result.description = params.description;
            result.imageURL = params.imageURL;
        } else {
            result.name = isNameValid;
            result.dateTime = isDateValid;
            result.description = isDescriptionValid;
            result.imageURL = isUrlValid;
        }

        return result;
    };

    const getTheIncorrectData = function (userInfo) {

        let result = '';

        if (!userInfo.username) {
            result += 'Username field should contain only lower and upper case English letters. And must be at least 4 characters! ';
        }

        if (!userInfo.password) {
            result += 'Password field should contain only lower and upper case English letters. And must be at least 6 characters! ';
        }

        if(userInfo.rePassword && !userInfo.rePassword){
            result += 'Repeated password field should be exactly as the password field!';
        }

        return result;
    };

    const getIncorrectEventData = function (userInfo) {
        let result = '';

        if(!userInfo.name){
            result += 'The name of the event must be at least 4 English letters.';
        }

        if(!userInfo.dateTime){
            result += 'The event date and time should be valid.';
        }

        if(!userInfo.description){
            result += 'The event description should be at least 20 characters.';
        }

        if(!userInfo.imageURL){
            result += 'Image URL should start with http://... or https://...';
        }
        return result;
    };

    return {
        userAction,
        getTheIncorrectData,
        eventAction,
        getIncorrectEventData
    }
}();