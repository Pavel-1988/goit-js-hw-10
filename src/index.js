import './css/styles.css';
import './css/country.css'
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { fetchCountries } from './js/fetchCountries';
import { refs } from './js/refs';
import {similarMarkup,uniqueMarkup} from './js/markup'


const DEBOUNCE_DELAY = 300;

refs.searchInp.addEventListener('input', debounce(onInputCountry, DEBOUNCE_DELAY));

function onInputCountry() {
    const countryName = refs.searchInp.value;
   
    if (countryName === '') {
        Notify.failure('Oops, there is no country with that name');
        refs.countryList.innerHTML = '';
        refs.countryInfo.innerHTML = '';
        return;
    }

        fetchCountries(countryName)
        .then(countrys => {           
            if (countrys.length > 10) {
                Notify.info("Too many matches found. Please enter a more specific name.");
                refs.countryList.innerHTML = '';
                refs.countryInfo.innerHTML = '';
                return
            }
            if (( countrys.length > 1)&&( countrys.length <= 10)) {
                const similar = countrys.map(country => similarMarkup(country));
                refs.countryList.innerHTML = similar.join('');
                refs.countryInfo.innerHTML = '';
            }
            if (countrys.length === 1) {
                const unique = countrys.map(country => uniqueMarkup(country));
                refs.countryList.innerHTML = '';
                refs.countryInfo.innerHTML =  unique.join('');
            }
            // if (countrys.length === 0) {
            //         Notify.failure('Oops, there is no country with that name');
            //         refs.countryInfo.innerHTML = '';
            //         refs.countryList.innerHTML = '';          
            // }
        })
        
            // тільки так відловлює помилку
        .catch(error => {
            Notify.failure('Oops, there is no country with that name');
            return error;
        });
    
        // .catch(error => {
        //     Notify.failure.error.message;
           
        // });

}

