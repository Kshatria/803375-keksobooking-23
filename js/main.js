import {createAllOffers} from './popupOffer.js';
import {validateFields} from './formValidate.js';

const map = document.querySelector('#map-canvas');

createAllOffers(map);
validateFields();
