const getRandomСoordinate = (firstNum, lastNum, afterPoint) => {
  if (firstNum < 0 || lastNum < 0 || firstNum >= lastNum || afterPoint < 0) {
    return;
  }
  firstNum = Math.ceil(firstNum);
  lastNum = Math.floor(lastNum);
  if (!afterPoint) {
    return Math.floor(Math.random() * (lastNum - firstNum + 1)) + firstNum;
  }
  return (Math.random() * (lastNum - firstNum) + firstNum).toFixed(afterPoint);
};

getRandomСoordinate(40, 50, 3);
