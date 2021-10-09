// current date and time
let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let dateFormat = `${days[now.getDay()]} ${now.getHours()}:${now.getMinutes()}`;
let datePlacement = document.querySelector("#date");
datePlacement.innerHTML = `${dateFormat}`;

// future day
let dayOne = document.querySelector(".dayOne");
dayOne.innerHTML = `${days[now.getDay() + 1]}`;
let dayTwo = document.querySelector(".dayTwo");
dayTwo.innerHTML = `${days[now.getDay() + 2]}`;
let dayThree = document.querySelector(".dayThree");
dayThree.innerHTML = `${days[now.getDay() + 3]}`;
let dayFour = document.querySelector(".dayFour");
dayFour.innerHTML = `${days[now.getDay() + 4]}`;
let dayFive = document.querySelector(".dayFive");
dayFive.innerHTML = `${days[now.getDay() + 5]}`;

//search engine

function cityUpdate(event) {
  event.preventDefault();
  let input = document.querySelector("#location");
  let cityPlacement = document.querySelector("#city");
  cityPlacement.innerHTML = `${input.value}`;
  let apiKey = `05b30e89e4c2870b40267781384310db`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${apiKey}&units=metric`;
  let apiUrlForecast = `https://api.openweathermap.org/data/2.5/forecast/daily?q=${input.value}&cnt=6&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemp);
  axios.get(apiUrlForecast).then(showForecast);
}

let form = document.querySelector("form");
form.addEventListener("submit", cityUpdate);

//  current temperature

function showTemp(response) {
  let temp = Math.round(response.data.main.temp);
  let currentTemp = document.querySelector("#temperature");
  currentTemp.innerHTML = `🌤 ${temp}° C`;
  let feelTemp = Math.round(response.data.main.feels_like);
  let currentFeel = document.querySelector(".feelsLike");
  currentFeel.innerHTML = `Feels Like: ${feelTemp}° C`;
  let humidityLevel = response.data.main.humidity;
  let humidityPlacement = document.querySelector(".humidity");
  humidityPlacement.innerHTML = `Humidity: ${humidityLevel}%`;
  let windIndex = response.data.wind.speed;
  let windPlacement = document.querySelector(".wind");
  windPlacement.innerHTML = `Wind: ${windIndex} m/s`;
}

// future forecast

//function showForecast(response) {
