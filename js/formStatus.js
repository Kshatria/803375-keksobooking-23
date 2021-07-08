function disableForm (form) {
  const formClass = form.classList[0];
  form.classList.add(`${formClass}--disabled`);

  form.querySelectorAll('fieldset').forEach((el) => {
    el.setAttribute('disabled', 'disabled');
  });

  form.querySelectorAll('select').forEach((el) => {
    el.setAttribute('disabled', 'disabled');
  });
}

function enableForm (form) {
  const formClass = form.classList[0];
  form.classList.remove(`${formClass}--disabled`);

  form.querySelectorAll('fieldset').forEach((el) => {
    el.removeAttribute('disabled');
  });

  form.querySelectorAll('select').forEach((el) => {
    el.removeAttribute('disabled');
  });
}

export function toggleFormStatus (status) {
  const formFields = document.querySelector('.ad-form'),
    formFilters = document.querySelector('.map__filters');

  if (status) {
    enableForm(formFields);
    enableForm(formFilters);
    return;
  }

  disableForm(formFields);
  disableForm(formFilters);
}
