// ----------- Countdown Timer -----------
let cdDisplay = document.getElementById('countdownDisplay');
let cdStart = document.getElementById('cdStart');
let cdPause = document.getElementById('cdPause');
let cdReset = document.getElementById('cdReset');
let cdHours = document.getElementById('cdHours');
let cdMinutes = document.getElementById('cdMinutes');
let cdSeconds = document.getElementById('cdSeconds');

let cdTotalSeconds = 0;
let cdInterval = null;

function updateCountdown() {
  let hrs = Math.floor(cdTotalSeconds / 3600);
  let mins = Math.floor((cdTotalSeconds % 3600) / 60);
  let secs = cdTotalSeconds % 60;
  cdDisplay.textContent = `${hrs.toString().padStart(2,'0')}:${mins.toString().padStart(2,'0')}:${secs.toString().padStart(2,'0')}`;
}

function startCountdown() {
  if (cdInterval) return;
  if (cdTotalSeconds === 0) {
    cdTotalSeconds = parseInt(cdHours.value)*3600 + parseInt(cdMinutes.value)*60 + parseInt(cdSeconds.value);
  }
  cdInterval = setInterval(() => {
    if (cdTotalSeconds > 0) {
      cdTotalSeconds--;
      updateCountdown();
    } else {
      clearInterval(cdInterval);
      cdInterval = null;
    }
  }, 1000);
}

function pauseCountdown() {
  clearInterval(cdInterval);
  cdInterval = null;
}

function resetCountdown() {
  clearInterval(cdInterval);
  cdInterval = null;
  cdTotalSeconds = parseInt(cdHours.value)*3600 + parseInt(cdMinutes.value)*60 + parseInt(cdSeconds.value);
  updateCountdown();
}

// Initialize countdown display
updateCountdown();

cdStart.addEventListener('click', startCountdown);
cdPause.addEventListener('click', pauseCountdown);
cdReset.addEventListener('click', resetCountdown);

// ----------- Stopwatch Timer -----------
let swDisplay = document.getElementById('stopwatchDisplay');
let swStart = document.getElementById('swStart');
let swPause = document.getElementById('swPause');
let swReset = document.getElementById('swReset');

let swTotalSeconds = 0;
let swInterval = null;

function updateStopwatch() {
  let hrs = Math.floor(swTotalSeconds / 3600);
  let mins = Math.floor((swTotalSeconds % 3600) / 60);
  let secs = swTotalSeconds % 60;
  swDisplay.textContent = `${hrs.toString().padStart(2,'0')}:${mins.toString().padStart(2,'0')}:${secs.toString().padStart(2,'0')}`;
}

function startStopwatch() {
  if (swInterval) return;
  swInterval = setInterval(() => {
    swTotalSeconds++;
    updateStopwatch();
  }, 1000);
}

function pauseStopwatch() {
  clearInterval(swInterval);
  swInterval = null;
}

function resetStopwatch() {
  clearInterval(swInterval);
  swInterval = null;
  swTotalSeconds = 0;
  updateStopwatch();
}

// Initialize stopwatch display
updateStopwatch();

swStart.addEventListener('click', startStopwatch);
swPause.addEventListener('click', pauseStopwatch);
swReset.addEventListener('click', resetStopwatch);
