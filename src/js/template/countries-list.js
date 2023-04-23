export default function (countiesArr) {
  return countiesArr
    .map(countryData => {
      const {
        name: { common: country },
        capital,
        population,
        flags: { svg: src },
        languages,
      } = countryData;
      return `
      <li>
        <img src="${src}" alt="${country}" class="flag-icon">
        <span>${country}</span>
      </li>`;
    })
    .join('');
}
