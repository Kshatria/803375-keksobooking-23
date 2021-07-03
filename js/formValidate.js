function validatePriceOfType (price, type) {
  switch (type.value) {
    case 'bungalow':
      price.setAttribute('min', '0');
      price.setAttribute('placeholder', '0');
      break;
    case 'flat':
      price.setAttribute('min', '1000');
      price.setAttribute('placeholder', '1 000');
      break;
    case 'hotel':
      price.setAttribute('min', '3000');
      price.setAttribute('placeholder', '3 000');
      break;
    case 'house':
      price.setAttribute('min', '5000');
      price.setAttribute('placeholder', '5 000');
      break;
    case 'palace':
      price.setAttribute('min', '10000');
      price.setAttribute('placeholder', '10 000');
      break;
  }
}

function validatePrice (price) {
  price.reportValidity();
}

function validateTime (timein, timeout) {
  timeout.value = timein.value;
}

function validateCapacityRooms (capacity, rooms) {
  capacity.querySelectorAll('option').forEach((el) => {
    el.setAttribute('disabled', 'disabled');
  });

  function getGuestsOptions (guests) {
    return capacity.querySelector(`option[value="${guests}"]`).removeAttribute('disabled');
  }

  switch (rooms.value) {
    case '1':
      getGuestsOptions('1');
      capacity.value = '1';
      break;
    case '2':
      getGuestsOptions('1');
      getGuestsOptions('2');
      capacity.value = '2';
      break;
    case '3':
      getGuestsOptions('1');
      getGuestsOptions('2');
      getGuestsOptions('3');
      capacity.value = '3';
      break;
    case '100':
      getGuestsOptions('0');
      capacity.value = '0';
      break;
  }
}

export function validateFields () {
  const type = document.querySelector('#type'),
    price = document.querySelector('#price'),
    timein = document.querySelector('#timein'),
    timeout = document.querySelector('#timeout'),
    rooms = document.querySelector('#room_number'),
    capacity = document.querySelector('#capacity');

  document.addEventListener('DOMContentLoaded', validateCapacityRooms(capacity, rooms));
  type.addEventListener('change', validatePriceOfType(price, type));
  price.addEventListener('input', validatePrice(price));
  timein.addEventListener('change', validateTime(timein, timeout));
  rooms.addEventListener('change', validateCapacityRooms(capacity, rooms));
}
