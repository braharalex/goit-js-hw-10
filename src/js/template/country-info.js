export default function (countryData) {
  const {
    name: { common: country },
    capital,
    population,
    flags: { svg: src },
    languages,
  } = countryData;
  return `
        <h2>
          <img src="${src}" alt="${country}" class="flag-icon">
          ${country}
        </h2>
        <p>
          <b>Capital:</b> ${capital}
        </p>
        <p>
          <b>Population:</b> ${population}
        </p>
        <p>
          <b>Languages:</b> ${Object.values(languages).join(', ')}
        </p>`;
}
