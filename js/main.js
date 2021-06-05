function getRandomСoordinate(minNum, maxNum, digitsAfterPoint) {
  if (minNum < 0 || maxNum < 0 || minNum >= maxNum || digitsAfterPoint < 0) {
    return;
  }
  const minInteger = Math.ceil(minNum),
    maxInteger = Math.floor(maxNum);
  if (!digitsAfterPoint) {
    return Math.floor(Math.random() * (maxInteger - minInteger + 1)) + minInteger;
  }
  return (Math.random() * (maxInteger - minInteger) + minInteger).toFixed(digitsAfterPoint);
}

getRandomСoordinate(40, 50, 3);
