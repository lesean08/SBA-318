//const API_KEY ="live_2d665f1e60fa4128ba503247240408"
//const url = "https://www.weatherapi.com/docs/weather_conditions.xml"
fetch('https://www.weatherapi.com/docs/weather_conditions.xml')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));


fetchData("weatherconditions");
async function fetchData() {
    try {
        const weatherConditions = document.getElementById("weatherConditons");

       // const response = await fetch("https://www.weatherapi.com/docs/weather_conditions.xml");

        if (!response.ok) {
            throw new Error("Could not fetch weather conditions");
        }
        const data = await response.json();
        console.log(data);
    }
    catch (error) {
        console.error(error);
    }
}
