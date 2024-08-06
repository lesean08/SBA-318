const weather = document.getElementById('weather');
weather.addEventListener("click", getWeatherConditions);
async function getWeatherConditions() {
    weather.style.cursor = 'wait';
    const response = await fetch("https://www.weatherapi.com/docs/weather_conditions.xml");
    const jsonData = await response.json();
}