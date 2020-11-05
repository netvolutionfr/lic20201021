const ville = 'Lille';
const APIKEY = 'f2a91cd22dfe43a62112dd08c180dd48';
const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + ville + '&appid=' + APIKEY;

const elementVille = document.getElementById('ville');
const elementTemperature = document.getElementById('temperature');
const elementNomVille = document.getElementById('nomville');
const elementLever = document.getElementById('lever');
const elementCoucher = document.getElementById('coucher');

elementVille.innerHTML = ville;

fetch(url)
    .then(res => res.json())
    .then(meteo => {
        let temperature = meteo.main.temp;
        const lever = new Date(meteo.sys.sunrise * 1000);
        const coucher = new Date(meteo.sys.sunset * 1000);

        temperature -= 273.15;
        temperature = Math.round(temperature * 10) / 10;
        elementTemperature.innerHTML = temperature + '°C';
        elementNomVille.innerHTML = meteo.name;
        elementLever.innerText = lever.toLocaleTimeString();
        elementCoucher.innerText = coucher.toLocaleTimeString();
    });
