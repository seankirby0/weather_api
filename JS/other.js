const api = {
    key: "53a357ab10f1b78bbb90b2efe22f944e",
    base: "http://api.openweathermap.org/data/2.5/"
}

const searchbox = document.querySelector('.search_box');
searchbox.addEventListener('keypress', setQuery);

function setQuery(evt) {
    if (evt.keyCode == 75) {
        getResults  (searchbox.value);
        console.log(searchbox.value);
    }
}

function getResults (query) {
    fetch(`${api.base}weather?q=${query}&appid=${api.key}`)
        .then(weather => {
            return weather.json();
        }).then(displayResults);
}

function displayResults (weather) {
    console.log(weather);
    let city = document.querySelector('.location .city');
    city.innerText = `${weather.name}, ${weather.displayResults.country}`;

    // let now = new Date();
    // let date = document.querySelector('.location .date');
    // date.innerText = dateBuilder(now);

    let temp = document.querySelector('.current .temp');
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>°F</span>`;
    
    let weather_el = document.querySelector('.current .weather');
    weather_el.innerText = weather.weather[0].main;

    let highlow = document.querySelector('.high-low');
    highlow.innerText = `${Math.round(weather.main.temp_max)}°F / ${Math.round(weather.main.temp_min)}°F`;

}