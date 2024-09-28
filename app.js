var hours = 0;
var minutes = 0;
var seconds = 0;
var counter = 0;

var timer = false;


//function to start a stopwatch
function start() {
    timer = true;
    stopWatch();
}


//function to stop a stopwatch
function stop() {
    timer = false;
}

//function to Restart a stopwatch
function reStart() {
    timer = true;
     hours = 0;
     minutes = 0;
     seconds = 0;
     counter = 0;
    document.getElementById('count').innerHTML = '00';
    document.getElementById('sec').innerHTML = '00';
    document.getElementById('min').innerHTML = '00';
    document.getElementById('hr').innerHTML = '00';
    stopWatch()
}


//function of StopWatch
function stopWatch() {
    if (timer == true) {
        counter++;
        setTimeout(stopWatch, 10);
        document.getElementById('count').innerHTML = counter;

        if (counter == 100) {
            seconds++;
            document.getElementById('sec').innerHTML = seconds;
            counter = 0;
        }
        if (seconds == 60) {
            minutes++;
            document.getElementById('min').innerHTML = minutes;
            seconds = 0;
        }
        if (seconds == 60) {
            hours++;
            document.getElementById('hr').innerHTML = hours;
            minutes = 0;
        }
        if (hours < 10) {
            document.getElementById('hr').innerHTML = '0' + hours;
        }
        if (minutes < 10) {
            document.getElementById('min').innerHTML = '0' + minutes;
        }
        if (seconds < 10) {
            document.getElementById('sec').innerHTML = '0' + seconds;
        }
    }
}