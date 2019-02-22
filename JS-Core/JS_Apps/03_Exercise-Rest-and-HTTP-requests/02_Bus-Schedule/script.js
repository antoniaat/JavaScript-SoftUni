function solve() {
    let currentId = "depot";

    function depart() {
        $.ajax({
            type: 'GET',
            dataType: 'json',
            url: `https://judgetests.firebaseio.com/schedule/${currentId}.json`,
            success: function (data) {
                $('#info .info').text(`Next stop ${data.name}`);
                $('#depart').attr("disabled", "true");
                $('#arrive').prop("disabled", false);
            }
        });
    }

    function arrive() {
        $.ajax({
            type: 'GET',
            dataType: 'json',
            url: `https://judgetests.firebaseio.com/schedule/${currentId}.json`,
            success: function (data) {
                $('#info .info').text(`Arriving at ${data.name}`);
                currentId = data.next;
                $('#depart').prop("disabled", false);
                $('#arrive').attr("disabled", "true");
            }
        });
    }

    return {
        depart,
        arrive
    };
}

let result = solve();