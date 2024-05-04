function showTemperature(response) {
  let temperatureElement = document.querySelector("#temp");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#weather-description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind-speed");
  let timeElement = document.querySelector("#time");
  let date = new Date(response.data.time * 1000);
  let icon = document.querySelector("#weather-emoji");

  icon.innerHTML = `<img src="${response.data.condition.icon_url}" />`;
  timeElement.innerHTML = formatDate(date);
  cityElement.innerHTML = response.data.city;
  descriptionElement.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
  windElement.innerHTML = `${response.data.wind.speed} km/h`;
  temperatureElement.innerHTML = Math.round((temperature * 9) / 5 + 32);
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let days = [
    " Sunday",
    " Monday",
    " Tuesday",
    " Wednesday",
    " Thursday",
    " Friday",
    " Saturday",
  ];
  let day = days[date.getDay()];

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${day} ${hours}:${minutes}`;
}

function SearchCity(city) {
  let apiKey = "633bc35a46ofab649caf20e3932017t1";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  axios.get(apiUrl).then(showTemperature);
}

function handleSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");

  SearchCity(searchInput.value);
}

function displayForecast() {
  let forecast = document.querySelector("#forecast");

  let days = ["Tue", "Wed",  "Thu", "Fri", "Sat"];
  let forecastHtml = "";
  
  days.forEach(function (day) {
    forecastHtml = forecastHtml +
      `<div class="weather-forecast">
        <div class="row">
          <div class="col-2">
            <div class="weather-forecast-date">${day}</div>
            <img
              src="https://shecodes-assets.s3.amazonaws.com/api/weather/icons/few-clouds-night.png"
              alt=""
              width="35px"
            />
            <div class="weather-forecast-temps">
              <span class="weather-forecast-temp-max">18° </span>
              <span class="weather-forecast-temp-min">12° </span>
            </div>
          </div>
        </div>
      </div>`
  });

  forecast.innerHTML = forecastHtml;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSubmit);

displayForecast();