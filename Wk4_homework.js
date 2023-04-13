function getDay(date) {
  let days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
  return days[date.getDay()];
}

function transformDateToText(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let day = getDay(date);
  return `${day} ${hours}:${minutes}`;
}

function changeCity(event) {
  event.preventDefault();
  let currentCity = document.querySelector("h1");
  let placeFromInput = document.querySelector("#search-place");
  currentCity.innerHTML = placeFromInput.value;
}

function switchCelcius() {
  let displayDegree = document.querySelector("#display-degree");
  displayDegree.innerHTML = "11";
}

function switchFarenheit() {
  let displayDegree = document.querySelector("#display-degree");
  displayDegree.innerHTML = "52";
}

// Question 1
let h2 = document.querySelector("#todays-date");
let now = new Date();
h2.innerHTML = transformDateToText(now);

// Question 2
let form = document.querySelector("form");
form.addEventListener("submit", changeCity);

// Bonus
let celcius = document.querySelector("#celcius");
let farenheit = document.querySelector("#farenheit");

celcius.addEventListener("click", switchCelcius);
farenheit.addEventListener("click", switchFarenheit);
