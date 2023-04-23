import './css/styles.css';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { fetchCountries } from './js/fetchCountries';
import countryTmp from './js/template/country-info';
import countriesTmp from './js/template/countries-list';

const DEBOUNCE_DELAY = 300;
const refs = {
  searchInput: document.querySelector('#search-box'),
  countryList: document.querySelector('.country-list'),
  countryInfo: document.querySelector('.country-info'),
};

refs.searchInput.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY));

function onInput(e) {
  const queryData = e.target.value.trim();

  if (queryData == '') {
    clearElem(refs.countryList);
    clearElem(refs.countryInfo);
    return;
  }

  fetchCountries(queryData)
    .then(data => renderCountry(data))
    .catch(err => {
      Notify.failure('Oops, there is no country with that name');
    });
}

function renderCountry(data) {
  if (data.length >= 10) {
    Notify.info('Too many matches found. Please enter a more specific name.');
  } else if (data.length === 1) {
    refs.countryInfo.innerHTML = countryTmp(data[0]);
    clearElem(refs.countryList);
  } else {
    refs.countryList.innerHTML = countriesTmp(data);
    clearElem(refs.countryInfo);
  }
}

function clearElem(el) {
  el.textContent = '';
}
