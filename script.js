function startTimer(duration, display) {
  var timer = duration,
    minutes,
    seconds;

  setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = "00 : " + minutes + " : " + seconds;

    if (--timer < 0) {
      timer = 0;
      alert("Time's up!");
    }
  }, 1000);
}

window.onload = function () {
  var tenMinutes = 60 * 10;
  display = document.querySelector("#timer");
  startTimer(tenMinutes, display);
};

// Toggle slide-up effect
var crosselement =  document.getElementById('cross');
crosselement.addEventListener('click', function() {
 crosselement.appendChild('remove');
});

