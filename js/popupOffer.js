import {createOffers} from './data.js';

const offersData = createOffers()[0].OFFER;
const offersAuthor = createOffers()[0].AUTHOR;

function getOfferTypeRu () {
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
}

function getWords (dataStr, dataVal) {
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
}

const featureList = offersData.features.map((el) => `popup__feature--${el}`);

function createPhotosElements (wrap) {
  const popupPhoto = wrap.querySelector('.popup__photo');
  const photosArray = [];
  for (let i = 0; i < offersData.photos.length; i++) {
    photosArray.push(popupPhoto.cloneNode(true));
  }
  popupPhoto.remove();
  photosArray.forEach((el, i) => {
    el.setAttribute('src', offersData.photos[i]);
    wrap.appendChild(el);
  });
}

export function createPopupOffer () {
  const card = document.querySelector('#card')
    .content
    .querySelector('.popup')
    .cloneNode(true);
  card.querySelector('.popup__title')
    .textContent = offersData.title;
  card.querySelector('.popup__text--address')
    .textContent = offersData.address;
  card.querySelector('.popup__text--price')
    .textContent = offersData.price;
  card.querySelector('.popup__type')
    .textContent = getOfferTypeRu();
  card.querySelector('.popup__text--capacity')
    .textContent = `${offersData.rooms} ${getWords('rooms', offersData.rooms)} для ${offersData.guests} ${getWords('guests', offersData.guests)}`;
  card.querySelector('.popup__text--time')
    .textContent = `Заезд после ${offersData.checkin}, выезд до ${offersData.checkout}`;
  card.querySelectorAll('.popup__feature')
    .forEach((el) => {
      const modifer = el.classList[1];
      if (!featureList.includes(modifer)) {
        el.remove();
      }
    });
  card.querySelector('.popup__description')
    .textContent = offersData.description;
  card.querySelector('.popup__photos');
  createPhotosElements(card.querySelector('.popup__photos'));
  card.querySelector('.popup__avatar')
    .setAttribute('src', offersAuthor.avatar);

  function checkEmptyElements () {
    for (let i = 1; i < card.children.length; i++) {
      if (card.children[i].textContent === undefined ||
        card.children[i].textContent === null ||
        card.children[i].textContent === '' ||
        card.children[i].textContent === '[object Object]') {
        card.children[i].remove();
      }
    }

    if (card.children[0].getAttribute('src') === '') {
      card.children[0].remove();
    }
  }

  checkEmptyElements();
  return card;
}
