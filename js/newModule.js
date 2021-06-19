import {createOffers} from './data.js';

const offersData = createOffers()[0].OFFER;

const getOfferTypeRu = () => {
  let offerTypeRus = undefined;
  switch (offersData.type) {
    case 'flat':
      offerTypeRus = 'Квартира'; break;
    case 'bungalow':
      offerTypeRus = 'Бунгало'; break;
    case 'house':
      offerTypeRus = 'Дом'; break;
    case 'palace':
      offerTypeRus = 'Дворец'; break;
    case 'hotel':
      offerTypeRus = 'Отель'; break;
  }
  return offerTypeRus;
};

const getWords = (dataStr, dataVal) => {
  const getWordRu = (value, words) => {
    if (value >= 5) {
      return words[2];
    }
    if (value > 1 && value < 5) {
      return words[1];
    }
    if (value === 1) {
      return words[0];
    }
  };

  if (dataStr === 'rooms') {
    return getWordRu(dataVal, ['комната', 'комнаты', 'комнат']);
  }

  if (dataStr === 'guests') {
    return getWordRu(dataVal, ['гостя', 'гостей', 'гостей']);
  }
};

const featureList = offersData.features.map((el) => `popup__feature--${el}`);

export function newModule () {
  const card = document.querySelector('#card')
    .content
    .querySelector('.popup')
    .cloneNode(true);
  const popupTitle = card.querySelector('.popup__title')
    .textContent = offersData.title;
  const popupAddress = card.querySelector('.popup__text--address')
    .textContent = offersData.address;
  const popupPrice = card.querySelector('.popup__text--price')
    .textContent = offersData.price;
  const popupType = card.querySelector('.popup__type')
    .textContent = getOfferTypeRu();
  const popupCopacity = card.querySelector('.popup__text--capacity')
    .textContent = `${offersData.rooms} ${getWords('rooms', offersData.rooms)} для ${offersData.guests} ${getWords('guests', offersData.guests)}`;
  const popupTime = card.querySelector('.popup__text--time')
    .textContent = `Заезд после ${offersData.checkin}, выезд до ${offersData.checkout}`;
  const popupFeatures = card.querySelectorAll('.popup__feature')
    .forEach((el) => {
      const modifer = el.classList[1];
      if (featureList.includes(modifer) === false) {
        el.remove();
      }
    });

  console.log(popupFeatures);
  console.log(offersData);
}
