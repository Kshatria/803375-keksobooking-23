import {createOffers} from './data.js';
import {createPopupOffer} from './popupOffer.js';

const offers = createOffers();
const map = document.querySelector('#map-canvas');

for (let i = 0; i < offers.length; i++) {
  map.appendChild(createPopupOffer(offers[i]).cloneNode(true));
}
