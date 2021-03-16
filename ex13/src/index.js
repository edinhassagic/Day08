function randomRangeNumber(minNumber, maxNumber) {
  return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
}

var random = randomRangeNumber(2, 8);

console.log(random);

module.exports = randomRangeNumber;
