const PubSub = require('../helpers/pub_sub.js');

const ResultView = function () {

};

ResultView.prototype.bindEvents = function () {
  PubSub.subscribe('PrimeChecker:result', (event) => {
    const primeNumber = event.detail;
    this.displayResult(primeNumber);
    console.log(primeNumber);
  })
};

ResultView.prototype.displayResult = function (number) {
  const resultElement = document.querySelector('#result');
  resultElement.textContent = `This is a prime number: ${number}`;
};

module.exports = ResultView;
