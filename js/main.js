// function getRandomDigits(a, b, digits) {
//   if (a < 0 || b < 0 || a >= b || digits < 0) {
//     return;
//   }
//   const lower = Math.ceil(a);
//   const upper = Math.floor(b);
//   if (!digits) {
//     return Math.floor(Math.random() * (upper - lower  + 1)) + a;
//   }
//   return (Math.random() * (upper - lower ) + lower ).toFixed(digits);
// }

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

const OFFERS = 10,
  MINVALUE = 1,
  MAXVALUE = 8,
  MINROOMS = 1,
  MAXROOMS = 8,
  MINGUESTS = 1,
  MAXGUESTS = 8,
  MINLAT = 35.65000,
  MAXLAT = 35.70000,
  MINLNG = 139.70000,
  MAXLNG = 139.80000,
  ARCMINUTE = 5,
  MINCOST = 1000,
  MAXCOST = 1000000,
  TYPES = ['palace', 'flat', 'house', 'bungalow', 'hotel'],
  TIMECHECK = ['12:00', '13:00', '14:00'],
  FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'],
  PHOTOS = [
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
  ];

function createOffer() {
  const avatarIndex = `0${getRandomPositiveInteger(MINVALUE, MAXVALUE)}`;

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

  const location = {
    x: getRandomPositiveFloat(MINLAT, MAXLAT, ARCMINUTE),
    y: getRandomPositiveFloat(MINLNG, MAXLNG, ARCMINUTE),
  };

  return {
    AUTHOR: {
      avatar: `img/avatars/user${avatarIndex}.png`,
    },
    OFFER: {
      title: 'строка — заголовок',
      address: {
        location,
      },
      price: getRandomPositiveInteger(MINCOST, MAXCOST),
      type: getRandomEl(TYPES),
      rooms: getRandomPositiveInteger(MINROOMS, MAXROOMS),
      guests: getRandomPositiveInteger(MINGUESTS, MAXGUESTS),
      checkin: getRandomEl(TIMECHECK),
      checkout: getRandomEl(TIMECHECK),
      features: createArrayElements(FEATURES),
      description: 'строка — описание',
      photos: createArrayElements(PHOTOS),
    },
  };
}

const createOffers = Array.from({length: OFFERS}, () => createOffer());
console.log(createOffers)
