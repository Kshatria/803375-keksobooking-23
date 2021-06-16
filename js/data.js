import {
  getRandomPositiveInteger,
  getRandomPositiveFloat,
  getRandomEl,
  createArrayElements
} from './util.js';

import {
  OFFERS,
  MINVALUE,
  MAXVALUE,
  MINROOMS,
  MAXROOMS,
  MINGUESTS,
  MAXGUESTS,
  MINLAT,
  MAXLAT,
  MINLNG,
  MAXLNG,
  ARCMINUTE,
  MINCOST,
  MAXCOST,
  TYPES,
  TIMECHECK,
  FEATURES,
  PHOTOS
} from './constants.js';

const location = {
  x: getRandomPositiveFloat(MINLAT, MAXLAT, ARCMINUTE),
  y: getRandomPositiveFloat(MINLNG, MAXLNG, ARCMINUTE),
};

const avatarIndex = `0${getRandomPositiveInteger(MINVALUE, MAXVALUE)}`;

function createOffer() {
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

function createOffers () {
  return Array.from({length: OFFERS}, () => createOffer());
}

export {createOffers};
