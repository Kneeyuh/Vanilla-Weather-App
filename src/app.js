function showTemperature(response) {
  let temperatureElement = document.querySelector("#temp");
  let temperature = Math.round(response.data.temperature.current);

  temperatureElement.innerHTML = temperature;
}

function SearchCity(city) {
  let apiKey = "633bc35a46ofab649caf20e3932017t1";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  axios.get(apiUrl).then(showTemperature);
}

function handleSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = searchInput.value;
  SearchCity(searchInput.value);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSubmit);
