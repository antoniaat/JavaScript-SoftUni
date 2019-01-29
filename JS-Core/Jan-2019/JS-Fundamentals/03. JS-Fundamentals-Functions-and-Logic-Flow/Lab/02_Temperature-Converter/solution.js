function temperatureConverter() {
    let degrees = parseInt(document.getElementById("num1").value);
    let type = document.getElementById("type").value;
    let result = '';
    let convertedTemperature = 0;
    let correctType = false;

    function convert(degrees, type) {
        if (type.toLowerCase() === "fahrenheit") {
            convertedTemperature = (((degrees - 32) * 5) / 9);
            correctType = true;
        } else if (type.toLowerCase() === "celsius") {
            convertedTemperature = ((degrees * 9) / 5) + 32;
            correctType = true;
        }
    }

    function print(degrees, type) {
        if (correctType) {
            result = Math.round(convertedTemperature);
        } else {
            result = "Error!";
        }
    }
    convert(degrees, type);
    print(degrees, type);
    document.getElementById("result").innerHTML = result;
}