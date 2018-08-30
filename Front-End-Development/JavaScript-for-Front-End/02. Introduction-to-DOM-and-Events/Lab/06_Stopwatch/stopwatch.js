function stopwatch() {
    let startBtn = document.getElementById('startBtn');
    let stopBtn = document.getElementById('stopBtn');

    startBtn.addEventListener("click", startClicked);
    stopBtn.addEventListener("click", stopClicked);

    let timer = null;
    let seconds = 0;

    function outputTime(value) {
        document.getElementById('time').textContent =
            ('0' + (Math.floor(value / 60))).slice(-2)  + ':' + ('0' + value % 60).slice(-2);
    }

    function startClicked() {
        seconds = 0;
        outputTime(seconds);
        stopBtn.disabled = false;
        startBtn.disabled = true;
        timer = setInterval(tick, 1000);
    }

    function stopClicked() {
        stopBtn.disabled = true;
        startBtn.disabled = false;
        clearInterval(timer);
    }

    function tick() {
        seconds++;
        outputTime(seconds);
    }
}