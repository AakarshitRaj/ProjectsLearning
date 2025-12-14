let apiKey = "591e466f2dd2c33199cb7b2096e2c352";

let input = document.getElementById("cityInput");
let button = document.getElementById("btn");
let weatherDisplay = document.getElementById("weather");

button.addEventListener("click", getWeather);

async function getWeather() {
  let city = input.value;
  // Replace with your actual API key

  try{
    weatherDisplay.innerText = "Loading...";
  const response = await fetch(
    `http://api.weatherstack.com/current?access_key=${apiKey}&query=${city}`
  );
  console.log(response);
  const data = await response.json();

  if (!data) {
    weatherDisplay.innerText = "City not found. Please try again.";
    return;
  }
  console.log(data);
    weatherDisplay.innerHTML = `Temperature: ${data.current.temperature}°C<br>
    Weather Descriptions: ${data.current.weather_descriptions[0]}<br>
    Humidity: ${data.current.humidity}%<br>
    Wind Speed: ${data.current.wind_speed} km/h`;
} 

catch (error) {
    weatherDisplay.innerText = "Failed to load weather data 😢";
  }
}
