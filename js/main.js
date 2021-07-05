import {appendOffer} from './popupOffer.js';
import {validateFields} from './formValidate.js';
import {toggleFormStatus} from './formStatus.js';

const map = document.querySelector('#map-canvas');

validateFields();
appendOffer(map);

// true = enable form; false = disable form
toggleFormStatus(true);

