import {appendOffer} from './popupOffer.js';
import {toggleFormStatus} from './formStatus.js';

const map = document.querySelector('#map-canvas');

appendOffer(map);

// true = enable form; false = disable form
toggleFormStatus(false);
