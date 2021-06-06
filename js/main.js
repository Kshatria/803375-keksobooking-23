// function getRandomDigits(minNum, maxNum, digitsAfterPoint) {
//   if (minNum < 0 || maxNum < 0 || minNum >= maxNum || digitsAfterPoint < 0) {
//     return;
//   }
//   const minInteger = Math.ceil(minNum),
//     maxInteger = Math.floor(maxNum);
//   if (!digitsAfterPoint) {
//     return Math.floor(Math.random() * (maxInteger - minInteger + 1)) + minInteger;
//   }
//   return (Math.random() * (maxInteger - minInteger) + minInteger).toFixed(digitsAfterPoint);
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
  const avatarIndex = `0${String(getRandomPositiveInteger(MINVALUE, MAXVALUE))}`;

  function getRandomEl (key) {
    const FIRSTINDEX = 0,
      LASTINDEX = key.length - 1;

    if (key === FEATURES) {
      return key.slice(getRandomPositiveInteger(FIRSTINDEX, LASTINDEX));
    }
    return key[getRandomPositiveInteger(FIRSTINDEX, LASTINDEX)];
  }

  const LOCATION = {
    lat: getRandomPositiveFloat(MINLAT, MAXLAT, ARCMINUTE),
    lng: getRandomPositiveFloat(MINLNG, MAXLNG, ARCMINUTE),
  };

  return {
    AUTHOR: {
      avatar: `img/avatars/user${avatarIndex}.png`,
    },
    OFFER: {
      title: 'строка — заголовок',
      address: {
        location: {
          x: LOCATION.lat,
          y: LOCATION.lng,
        },
      },
      price: getRandomPositiveInteger(MINCOST, MAXCOST),
      type: getRandomEl(TYPES),
      rooms: getRandomPositiveInteger(MINROOMS, MAXROOMS),
      guests: getRandomPositiveInteger(MINGUESTS, MAXGUESTS),
      checkin: getRandomEl(TIMECHECK),
      checkout: getRandomEl(TIMECHECK),
      features: getRandomEl(FEATURES),
      description: 'строка — описание',
      photos: getRandomEl(PHOTOS),
    },
  };
}

const createOffers = new Array(OFFERS).fill(null).map(() => createOffer());
