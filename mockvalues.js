module.exports.add = (num1, num2) => {
  return num1 + num2;
};

module.exports.caculate = (num1, num2, num3) => {
  return num3 * exports.add(num1, num2);
};
