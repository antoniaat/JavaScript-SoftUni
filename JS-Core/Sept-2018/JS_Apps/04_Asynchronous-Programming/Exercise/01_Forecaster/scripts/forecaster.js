function attachEvents() {
    $('#submit').click(getWeather);

    function appendContainers() {
        $('#current')
            .append(`<span class="condition symbol"></span>`)

        let condition = $(`<span class="condition"></span>`);

        condition.append(`<span class="forecast-data"></span>`);
        condition.append(`<span class="forecast-data"></span>`);
        condition.append(`<span class="forecast-data"></span>`);

        $('#current').append(condition);
    }

    appendContainers();

    function getWeather() {
        let url = "https://judgetests.firebaseio.com/locations.json";
        $.ajax({
            url: url,
            type: 'GET',
            success: findLocation,
            error: displayError
        });
    }

    function findLocation(response) {
        let location = $('#location').val();
        // $('#location').val(''); // Clear the input field
        let successfulReq = false;

        for (let key in response) {
            let current = response[key];

            if (current.name === location) {
                let locationCode = current.code;
                successfulReq = true;

                sendLocationCode(locationCode);
                viewUpcomingForecast(locationCode);
            }
        }

        if (!successfulReq) {
            displayError();
        }
    }

    function sendLocationCode(locationCode) {
        $.ajax({
            url: `https://judgetests.firebaseio.com/forecast/today/${locationCode}.json`,
            type: 'GET',
            success: showTheCurrentWeather,
            error: displayError
        });
    }

    function showTheCurrentWeather(res) {
        $('#forecast')
            .css('display', 'block');

        let symbol = attachWeatherSymbol(res.forecast.condition);
        $('#current .condition.symbol').text(symbol);

        $(`.forecast-data:nth-child(1)`).text(`${res.name}`);
        $(`.forecast-data:nth-child(2)`).text(`${res.forecast.low}°/${res.forecast.high}°`);
        $(`.forecast-data:nth-child(3)`).text(`${res.forecast.condition}`);
    }

    function attachWeatherSymbol(currentWeather) {
        let symbol = '';

        if (currentWeather === 'Sunny') {
            symbol = '☀';
        } else if (currentWeather === 'Partly Sunny') {
            symbol = '⛅';
        } else if (currentWeather === 'Overcast') {
            symbol = '☁';
        } else if (currentWeather === 'Rain') {
            symbol = '☂';
        } else if (currentWeather === 'Degrees') {
            symbol = '&#176';
        }

        return symbol;
    }

    function viewUpcomingForecast(locationCode) {
        $.ajax({
            url: `https://judgetests.firebaseio.com/forecast/upcoming/${locationCode}.json`,
            type: 'GET',
            success: printUpcomingForecast,
            error: displayError
        });
    }

    function printUpcomingForecast(response) {
        for (let key in response) {
            let current = response[key];

            addCurrentUpcoming(current[0]);
            addCurrentUpcoming(current[1]);
            addCurrentUpcoming(current[2]);

            break;
        }
    }

    function attachUpcomingContainers() {
        let currentDay = $(`<span class="upcoming"></span>`);
        let symbol = attachWeatherSymbol(current.condition);

        currentDay.append(`<span class="symbol">${symbol}</span>`);
        currentDay.append(`<span class="forecast-data">${current.low}°/${current.high}°</span>`);
        currentDay.append(`<span class="symbol">${current.condition}</span>`);

        $('#upcoming').append(currentDay);
    }

    attachUpcomingContainers();

    function addCurrentUpcoming(current) {
        let currentDay = $(`<span class="upcoming"></span>`);
        let symbol = attachWeatherSymbol(current.condition);

        currentDay.append(`<span class="symbol">${symbol}</span>`);
        currentDay.append(`<span class="forecast-data">${current.low}°/${current.high}°</span>`);
        currentDay.append(`<span class="symbol">${current.condition}</span>`);

        $('#upcoming').append(currentDay);
    }

    function displayError() {
        $('#forecast')
            .css('display', 'block')
            .text('Error');
        $('#location').val('');
    }
}