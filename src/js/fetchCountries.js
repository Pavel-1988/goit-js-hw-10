

export function fetchCountries(name) {
  const finalURL = 'https://restcountries.com/v3.1/name/';
  const filter = '?fields=name,capital,population,flags,languages';
    return fetch(`${finalURL}${name}${filter}`)
        .then(response => {
            // чомусь коли я пишу цей іф в спрацьовує (Oops, there is .....), без ньогj не працює
            if (!response.ok) {
            throw new Error(response.status);
            }

            return response.json();
  });
}