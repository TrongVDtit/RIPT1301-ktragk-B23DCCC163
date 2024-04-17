let timer;
let minutesInput = document.getElementById('minutesInput');
let secondsInput = document.getElementById('secondsInput');
let alarm = document.getElementById('alarm');

function startTimer() {
    let minutes = parseInt(minutesInput.value);
    let seconds = parseInt(secondsInput.value);

    if (isNaN(minutes) || isNaN(seconds) || minutes < 0 || seconds < 0 || seconds > 59) {
        alert("Vui lòng nhập số phút và giây hợp lệ.");
        return;
    }

    let totalTimeInSeconds = minutes * 60 + seconds;

    timer = setInterval(() => {
        totalTimeInSeconds--;

        let displayMinutes = Math.floor(totalTimeInSeconds / 60);
        let displaySeconds = totalTimeInSeconds % 60;

        displayMinutes = displayMinutes < 10 ? '0' + displayMinutes : displayMinutes;
        displaySeconds = displaySeconds < 10 ? '0' + displaySeconds : displaySeconds;

        document.getElementById('timer').innerText = displayMinutes + ':' + displaySeconds;

        if (totalTimeInSeconds <= 0) {
            clearInterval(timer);
            document.getElementById('timer').innerText = '00:00';
            alarm.play();
            setTimeout(() => {
                alert('Hết giờ!');
            }, 1000);
        }
    }, 1000);
}

function resetTimer() {
    clearInterval(timer);
    document.getElementById('timer').innerText = '00:00';
    minutesInput.value = '';
    secondsInput.value = '';
    alarm.pause();
    alarm.currentTime = 0;
}
