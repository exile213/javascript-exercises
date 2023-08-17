const convertToCelsius = function(Fahrenheit) {

  let ToCelsius= ((Fahrenheit- 32) * 5/9);

  return Math.round(ToCelsius * 10) / 10;
};

const convertToFahrenheit = function(Celsius) {
let ToFahrenheit= ((Celsius* 9 / 5) + 32);

return Math.round(ToFahrenheit * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
