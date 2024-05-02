function showTemperature(response) {
  let temperatureElement = document.querySelector("#temp");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#city");
  
  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = Math.round(temperature * 9/ 5 + 32);
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

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSubmit);
