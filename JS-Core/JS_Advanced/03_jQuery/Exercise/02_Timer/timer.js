function timer() {
    let timer;

    $('#start-timer').click(startTimer);
    $('#stop-timer').click(stopTimer);

    let hours = $('#hours').text();
    let minutes = $('#minutes').text();
    let seconds = $('#seconds').text();

    function startTimer() {
        if (!timer) {
            timer = setInterval(step, 1000);
        }

        // $('#start-timer').attr('disabled', true);
        // $('#stop-timer').attr('disabled', false);

        function step() {
            seconds++;
            $('#seconds').text(seconds < 10 ? ('0' + seconds.toString()) : seconds);

            if (seconds >= 60) {
                minutes++;
                seconds = 0;

                $('#minutes').text(minutes < 10 ? ('0' + minutes.toString()) : minutes);
            }

            if (minutes >= 60) {
                hours++;
                minutes = 0;

                $('#hours').text(hours < 10 ? ('0' + hours.toString()) : hours);
            }
        }
    }

    function stopTimer() {
        // $('#start-timer').attr('disabled', false);
        // $('#stop-timer').attr('disabled', true);
        clearInterval(timer);
        timer = undefined;
    }
}