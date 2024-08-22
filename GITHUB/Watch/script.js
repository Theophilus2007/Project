
let seconds = 0;
let minutes = 0;
let hours = 0;
let interval;
let isRunning = false;

document.getElementById('start').addEventListener('click', start);
document.getElementById('pause').addEventListener('click', pause);
document.getElementById('reset').addEventListener('click', reset);

function start() {
    if (!isRunning) {
        interval = setInterval(function() {
            seconds++;
            if (seconds === 60) {
                minutes++;
                seconds = 0;
            }
            if (minutes === 60) {
                hours++;
                minutes = 0;
            }
            document.getElementById('display').innerHTML =
                pad(hours) + ':' + pad(minutes) + ':' + pad(seconds);
        }, 1000);
        isRunning = true;
        document.getElementById('start').disabled = true;
        document.getElementById('pause').disabled = false;
        document.getElementById('reset').disabled = false;
    }
}

function pause() {
    clearInterval(interval);
    isRunning = false;
    document.getElementById('start').disabled = false;
    document.getElementById('pause').disabled = true;
}

function reset() {
    clearInterval(interval);
    isRunning = false;
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById('display').innerHTML = '00:00:00';
    document.getElementById('start').disabled = false;
    document.getElementById('pause').disabled = true;
    document.getElementById('reset').disabled = true;
}

function pad(number) {
    return (number < 10 ? '0' : '') + number;
}