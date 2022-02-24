const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => upLoadCountries(data))
}
loadCountries();
const upLoadCountries = countries => {
    console.log(countries);
    const countreDiv = document.getElementById('countries');
    for(const country of countries){
        console.log(country)
        const p = document.createElement('p');
        p.innerText = country.name;
        countreDiv.appendChild(p);
    }
}