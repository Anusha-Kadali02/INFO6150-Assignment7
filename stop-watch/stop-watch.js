window.onload = function () {
    var hours = 0;
    var minutes = 0;
    var seconds = 0;
    var tens = 0;
    var timeLabel = document.getElementById("timeLabel");
    var buttonStart = document.getElementById('button-start');
    var buttonStop = document.getElementById('button-stop');
    var buttonReset = document.getElementById('button-reset');
    var Interval;

    const currentDate = new Date().toISOString().split('T')[0];
    document.getElementById("date").value = currentDate;
  
    buttonStart.onclick = async function() {
      clearInterval(Interval);
      await startTimerAsync();
    }
  
    buttonStop.onclick = function() {
      clearInterval(Interval);
    }
  
    buttonReset.onclick = function() {
      clearInterval(Interval);
      hours = 0;
      minutes = 0;
      seconds = 0;
      tens = 0;
      updateTimeLabel();
    }
  
    function updateTimeLabel() {
      timeLabel.innerHTML = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
    }
  
    async function startTimerAsync() {
      return new Promise((resolve) => {
        Interval = setInterval(() => {
          tens++;
          
          if (tens > 99) {
            seconds++;
            tens = 0;
          }
      
          if (seconds > 59) {
            minutes++;
            seconds = 0;
          }
      
          if (minutes > 59) {
            hours++;
            minutes = 0;
          }
      
          updateTimeLabel();
        }, 10);
        resolve();
      });
    }
  
    function pad(number) {
      return (number < 10 ? '0' : '') + number;
    }
  
    updateTimeLabel();
  }
  