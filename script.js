function handleTickInit(tick) {
  
  // format of due date is ISO8601
  // https://en.wikipedia.org/wiki/ISO_8601
  
  // '2018-01-31T12:00:00'        to count down to the 31st of January 2018 at 12 o'clock
  // '2019'                       to count down to 2019
  // '2018-01-15T10:00:00+01:00'  to count down to the 15th of January 2018 at 10 o'clock in timezone GMT+1
  
  // create the countdown counter
  const countDownDate = new Date().getFullYear() + 1;
  const counter = Tick.count.down(countDownDate.toString());

  counter.onupdate = function(value) {
    tick.value = value;
  };

}
