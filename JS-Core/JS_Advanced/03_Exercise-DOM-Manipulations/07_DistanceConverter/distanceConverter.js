function attachEventsListeners() {
    let convert = document.getElementById('convert');
    convert.addEventListener("click", convertUnits);

    function convertUnits() {
        let inputDistance = Number(document.getElementById('inputDistance').value);

        let inputsSelect = document.getElementById('inputUnits');
        let inputOption = inputsSelect.options[inputsSelect.selectedIndex].value;

        let outputSelect = document.getElementById('outputUnits');
        let outputOption = outputSelect.options[outputSelect.selectedIndex].value;

        let unitsInMeters = {
            "km": 1000,
            "m": 1,
            "cm": 0.01,
            "mm": 0.001,
            "mi": 1609.34,
            "yrd": 0.9144,
            "ft": 0.3048,
            "in": 0.0254
        };

        let inputValueInMeters = inputDistance * unitsInMeters[inputOption];
        let outputValue = inputValueInMeters / unitsInMeters[outputOption];

        let output = document.getElementById('outputDistance');
        output.disabled = false;

        document.getElementById('outputDistance').value = outputValue;
    }
}