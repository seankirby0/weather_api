console.log('Weather Test')
// key = 53a357ab10f1b78bbb90b2efe22f944e

// Create a getData function
const getData = async (cityName) => {

    const apiKey = ``
    const searchURL = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`
    let response = await fetch(searchURL);
    return response.json();
}

// Create a loadData function
const loadData = async (e) => {
    e.preventDefault();

    const weatherSearch = e.target[0].value.toLowerCase();
    // console.log(weatherSearch)
    const weatherData = await getData(weatherSearch);
    // console.log(weatherSearch)

    createWeatherHTML(weatherData);
}

const createWeatherHTML = (localWeather) => {
    const temp = localWeather.main.temp
    const high = localWeather.main.temp_max
    const low = localWeather.main.temp_min
    const weather = localWeather.weather[0].description
    const city = localWeather.name


    console.log(temp, weather, city, high, low);
    let tempDisplay = document.getElementById('localWeatherDisplay');
    let myTemp = document.getElementById('temp');
    let myWeather = document.getElementById('weather');
    let myCity = document.getElementById('city')
    let myTempMax = document.getElementById('high')
    let myTempMin = document.getElementById('low')

    
    // Display data in HTML
    // let htmlTemp = document.createElement('h2');
    // htmlTemp.innerHTML = temp;
    myTemp.innerHTML = temp;
    // tempDisplay.insertAdjacentElement('beforeend', htmlTemp);

    // let htmlWeather = document.createElement('h3');
    myWeather.innerHTML = weather;
    // htmlWeather.innerHTML = weather;
    // tempDisplay.insertAdjacentElement('beforeend', htmlWeather)       
    myCity.innerHTML = city;
    myTempMax.innerHTML = high;
    myTempMin.innerHTML = low;

}


// Connect form to loadData function
const form = document.getElementById('tempDataForm')
console.log(form)

form.addEventListener('submit', loadData);