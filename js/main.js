import {createAllOffers} from './popupOffer.js';
import {toggleFormStatus} from './formStatus.js';

const map = document.querySelector('#map-canvas');

createAllOffers(map);

// true = enable form; false = disableform
toggleFormStatus(false);
