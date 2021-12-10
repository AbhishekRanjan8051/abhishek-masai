const millisec = (time) => {
  if (time == Date.getMilliseconds) {
    return "milliseconds";
  } else {
    return null;
  }
};

const Sec = (time) => {
  return Math.floor(time / 1000) + " " + "Seconds";
};

const Min = (time) => {
  let sum = 0;
  sum = Math.floor(time / 1000 / 60);
  if (sum == 1) {
    return sum + " " + "Minute";
  } else {
    return sum + " " + "Minutes";
  }
};

const Mins = (time) => {
  let sum = 0;
  sum = Math.floor(time / 1000 / 60);
  return sum + " " + "minutes";
};

module.exports = { millisec, Sec, Min, Mins };
