const countdownTo = 1009600000; // time in miliseconds to countdown to (around 12 days)
const countdownDate = new Date().getTime() + countdownTo;

// Update the count down every 1 second
const x = setInterval(function() {
  // Get today's date and time
  const now = new Date().getTime();

  // Find the distance between now and the countdown date
  const distance = countdownDate - now;

  // Time calculations for days, hours, minutes and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result
  document.getElementById("timer-seconds").innerHTML = seconds;
  document.getElementById("timer-minutes").innerHTML = minutes;
  document.getElementById("timer-hours").innerHTML = hours;
  document.getElementById("timer-days").innerHTML = days;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "LAUNCHED!";
  }
}, 1000);