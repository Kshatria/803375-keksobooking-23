import {createOffers} from './data.js';

function createTitle (data, card) {
  const title = card.querySelector('.popup__title');
  if (!data.title) {
    title.remove();
    return;
  }

  title.textContent = data.title;
}

function createAddress (data, card) {
  const address = card.querySelector('.popup__text--address');
  if (!data.address.location.x || !data.address.location.y) {
    address.remove();
    return;
  }

  address.textContent = `${data.address.location.x}, ${data.address.location.y}`;
}

function createPrice (data, card) {
  const price = card.querySelector('.popup__text--price');

  if (!data.price) {
    price.remove();
    return;
  }

  price.textContent = `${data.price} ₽/ночь`;
}

function getOfferTypeRu (data) {
  switch (data) {
    case 'flat':
      return 'Квартира';
    case 'bungalow':
      return 'Бунгало';
    case 'house':
      return 'Дом';
    case 'palace':
      return 'Дворец';
    case 'hotel':
      return 'Отель';
  }
}

function createType (data, card) {
  const type = card.querySelector('.popup__type');
  if (!data.type) {
    type.remove();
    return;
  }

  type.textContent = getOfferTypeRu(data.type);
}

function getDeclinationWord (value, words) {
  if (value >= 5) {
    return words[2];
  }
  if (value === 1) {
    return words[0];
  }
  return words[1];
}

function getWords (dataStr, dataVal) {
  if (dataStr === 'rooms') {
    return getDeclinationWord(dataVal, ['комната', 'комнаты', 'комнат']);
  }

  if (dataStr === 'guests') {
    return getDeclinationWord(dataVal, ['гостя', 'гостей', 'гостей']);
  }
}

function createCapacity (data, card) {
  const capacity = card.querySelector('.popup__text--capacity');

  if (!data.rooms || !data.guests) {
    capacity.remove();
  }

  capacity.textContent = `${data.rooms} ${getWords('rooms', data.rooms)} для ${data.guests} ${getWords('guests', data.guests)}`;
}

function createTime (data, card) {
  const time = card.querySelector('.popup__text--time');

  if (!data.checkin || !data.checkout) {
    time.remove();
    return;
  }

  time.textContent = `Заезд после ${data.checkin}, выезд до ${data.checkout}`;
}

function createFeatures (data, card) {
  const features = card.querySelectorAll('.popup__feature');
  const featuresWrap = card.querySelectorAll('.popup__features');

  if (!data.features) {
    featuresWrap.remove();
    return;
  }

  const featureList = data.features.map((el) => `popup__feature--${el}`);

  features.forEach((el) => {
    const modifer = el.classList[1];
    if (!featureList.includes(modifer)) {
      el.remove();
    }
  });
}

function createDescription (data, card) {
  const description = card.querySelector('.popup__description');

  if (!data.description) {
    description.remove();
    return;
  }

  description.textContent = data.description;
}

function createPhotos (data, card) {
  const photos = card.querySelector('.popup__photos');
  const popupPhoto = photos.querySelector('.popup__photo');
  const photosArray = [];

  if (!data.photos) {
    photos.remove();
    return;
  }

  for (let i = 0; i < data.photos.length; i++) {
    photosArray.push(popupPhoto.cloneNode(true));
  }

  popupPhoto.remove();

  photosArray.forEach((el, i) => {
    el.setAttribute('src', data.photos[i]);
    photos.appendChild(el);
  });
}

function createAvatar (data, card) {
  const avatar = card.querySelector('.popup__avatar');

  if (!data.avatar) {
    avatar.remove();
    return;
  }

  avatar.setAttribute('src', data.avatar);
}

function createPopupOffer (offer) {
  const offerData = offer.OFFER;
  const offerAuthor = offer.AUTHOR;
  const card = document.querySelector('#card')
    .content
    .querySelector('.popup')
    .cloneNode(true);

  createTitle(offerData, card);
  createAddress(offerData, card);
  createPrice(offerData, card);
  createType(offerData, card);
  createCapacity(offerData, card);
  createTime(offerData, card);
  createFeatures(offerData, card);
  createDescription(offerData, card);
  createPhotos(offerData, card);
  createAvatar(offerAuthor, card);

  return card;
}

export function appendOffer (index) {
  return createPopupOffer(createOffers()[index]);
}
