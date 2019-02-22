function attachEventsListeners() {
    document.getElementById('daysBtn').addEventListener("click", daysClick);
    document.getElementById('hoursBtn').addEventListener("click", hoursClick);
    document.getElementById('minutesBtn').addEventListener("click", minutesClick);
    document.getElementById('secondsBtn').addEventListener("click", secondsClick);

    let days = document.getElementById('days');
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');

    function daysClick() {
        hours.value = Number(days.value) * 24;
        minutes.value = Number(hours.value) * 60;
        seconds.value = Number(minutes.value) * 60;
    }

    function hoursClick() {
        days.value = Number(hours.value) / 24;
        minutes.value = Number(hours.value) * 60;
        seconds.value = Number(minutes.value) * 60;
    }

    function minutesClick() {
        hours.value = Number(minutes.value) / 60;
        days.value = Number(hours.value) / 24;
        seconds.value = Number(minutes.value) * 60;
    }

    function secondsClick() {
        minutes.value = Number(seconds.value) / 60;
        hours.value = Number(minutes.value) / 60;
        days.value = Number(hours.value) / 24;
    }
}