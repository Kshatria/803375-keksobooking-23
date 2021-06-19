function getRandomPositiveInteger (a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

function getRandomPositiveFloat (a, b, digits = 1) {
  const lower = Math.min(Math.abs(a), Math.abs(b));
  const upper = Math.max(Math.abs(a), Math.abs(b));
  const result = Math.random() * (upper - lower) + lower;
  return result.toFixed(digits);
}

function getRandomEl (key) {
  const FIRSTINDEX = 0,
    LASTINDEX = key.length - 1;
  return key[getRandomPositiveInteger(FIRSTINDEX, LASTINDEX)];
}

function createArrayElements(key) {
  const FIRSTINDEX = 0,
    LASTINDEX = key.length - 1;
  return key.slice(getRandomPositiveInteger(FIRSTINDEX, LASTINDEX));
}

export {
  getRandomPositiveInteger,
  getRandomPositiveFloat,
  getRandomEl,
  createArrayElements
};
