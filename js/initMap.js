import {toggleFormStatus} from './formStatus.js';
import {createOffers} from './data.js';
import {appendOffer} from './popupOffer.js';

const map = L.map('map-canvas')
  .on('load', () => {
    toggleFormStatus(true);
  })
  .setView({
    lat: 35.681700,
    lng: 139.753891,
  }, 16);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: 'img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainPinMarker = L.marker(
  {
    lat: 35.681700,
    lng: 139.753891,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

mainPinMarker.addTo(map);

const addressField = document.querySelector('#address');

function setDefaultAddressCoords (field) {
  field.value = mainPinMarker.getLatLng();
}

document.addEventListener('DOMContentLoaded', () => setDefaultAddressCoords(addressField));

mainPinMarker.on('moveend', (evt) => {
  addressField.value = evt.target.getLatLng();
});

const points = createOffers();

function createMarkers (el, index) {
  const icon = L.icon({
    iconUrl: 'img/main-pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const marker = L.marker({
    lat: el.OFFER.address.location.x,
    lng: el.OFFER.address.location.y,
  },
  {
    icon: icon,
  });

  marker
    .addTo(map)
    .bindPopup(
      appendOffer(index),
      {
        keepInView: true,
      },
    );
}

points.forEach((el, index)  => {
  createMarkers(el, index);
});

export function initMap () {
  return map;
}
