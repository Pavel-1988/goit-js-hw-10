

export function fetchCountries(name) {
    const finalURL = 'https://restcountries.com/v3.1/name/';
    const filter = '?flags, name, capital, population, languages'
    return fetch(`${finalURL}${name}${filter}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        })
}
    
