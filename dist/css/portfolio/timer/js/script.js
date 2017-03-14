/**
 * Created by kozin on 27.09.2016.
 */

document.addEventListener('DOMContentLoaded', function () {
    var hours = document.getElementById("hours");
    var minutes = document.getElementById("minutes");
    var seconds = document.getElementById("seconds");
    var start = document.getElementById("start");
    var stop = document.getElementById("stop");
    var h = 0;
    var m = 0;
    var s = 0;
    var clearId;

    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;

    var timer = function () {
       clearId = setInterval(function () {
            s++;
            if (s == 60) {
                s = 0;
                m++;
            }
            if (m == 60) {
                m = 0;
                h++;
            }
            if (h == 24) {
                h = 0;
            }
            seconds.innerHTML = s;
            minutes.innerHTML = m;
            hours.innerHTML = h;

            if (s < 10) {
                seconds.innerHTML = "0" + s;
            } else {
                seconds.innerHTML = s;
            }
            if (m < 10) {
                minutes.innerHTML = "0" + m;
            } else {
                minutes.innerHTML = m;
            }
            if (h < 10) {
                hours.innerHTML = "0" + h;
            } else {
                hours.innerHTML = h;
            }

        }, 1000);
    };
    var timerStop = function () {
        clearInterval(clearId);
    };

    start.addEventListener("click", timer);
    stop.addEventListener("click", timerStop);

});
