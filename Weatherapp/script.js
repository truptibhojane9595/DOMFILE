const apiKey = 'd6a0b439293ece8f74dbfd26a244f858'; 

document.getElementById('search-button').addEventListener('click', () => {
    const city = document.getElementById('search-input').value;
    getWeatherData(city);
});

async function getWeatherData(city) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        const data = await response.json();

        if (data.cod === '404') {
            document.querySelector('.location-not-found').style.display = 'flex';
            document.querySelector('.weather-body').style.display = 'none';
            document.getElementById('search-input').value = ''; 
            return;
        }

        document.querySelector('.location-not-found').style.display = 'none';
        document.querySelector('.weather-body').style.display = 'flex';

        document.getElementById('weather-icon').src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
        document.getElementById('temperature').innerHTML = `${Math.round(data.main.temp)}<sup>°C</sup>`;
        document.getElementById('description').innerHTML = data.weather[0].description;
        document.getElementById('humidity').innerHTML = data.main.humidity;
        document.getElementById('wind-speed').innerHTML = data.wind.speed;

        document.getElementById('search-input').value = ''; 
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}
