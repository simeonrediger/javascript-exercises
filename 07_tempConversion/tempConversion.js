const convertToCelsius = function(tempInF) {
  return Math.round(10 * (tempInF - 32) * 5 / 9) / 10;
};

const convertToFahrenheit = function(tempInC) {
  return Math.round(10 * (tempInC * 9 / 5 + 32)) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
