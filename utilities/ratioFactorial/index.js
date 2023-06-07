const ratioNumber = require("../ratio/index.js");
const factorialNumber = require("../factorial/index.js");

const ratioAndFactorial = (num1, num2, num3) => {
  const ratio = ratioNumber(num1, num2);
  const factorial = factorialNumber(num3);
  return { ratio, factorial };
};
module.exports = ratioAndFactorial;
