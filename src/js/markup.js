

export function similarMarkup({ flags, name }) {
    return `
    <li class = "country-list__item">
        <img class="country-info__flags" src="${flags.svg}" alt="${name.official}" width="50" />
        <h3 class="country-info__name">${name.official}</h3>
    </li>
    `;
}

export function uniqueMarkup({ flags, name, capital, population, languages }) {
    return ` 
     <div class="country-info__container">
        <div class="country-info__wrapper">
            <img class="country-info__flags" src="${flags.svg}" alt="${name.official}" width="50" />
            <h3 class="country-info__name">${name.official}</h3>
        </div>
        <div class="country-info__wrapper">
            <h4 class="country-info__key"> Capital: </h4>
            <span class="country-info__value">${capital}</span>
        </div>
        <div class="country-info__wrapper">
            <h4 class="country-info__key"> Population: </h4>
            <span class="country-info__value">${population}</span>
        </div>
         <div class="country-info__wrapper">
            <h4 class="country-info__key"> Languages: </h4>
            <span class="country-info__value">${Object.values(languages)}</span>
        </div>
    </div>
    `;
}