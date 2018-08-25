const loc = document.getElementById("location");
const temNum = document.getElementById("temperature-num");
const tempScale = document.getElementById("temperature-scale");
const weatherCon = document.getElementById("weather-condition");
const weatherIcon = document.getElementById("weather-icon");


function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      getWeather(position.coords.latitude, position.coords.longitude);
    });
  } else {
    loc.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function getWeather(lat, long) {
  const root = "https://fcc-weather-api.glitch.me/api/current?";
  fetch(`${root}lat=${lat}&lon=${long}`)
    .then(resp => resp.json())
    .then(data => {
      updateDataToUI(data.name, data.weather, data.main.temp);
    })
    .catch(function(err) {
      console.error(err);
    });
}

function updateDataToUI(location, weather, temp) {
  weatherIcon.innerHTML = `<img src="${weather[0].icon}" />`;
  weatherCon.innerHTML = weather[0].main;
  loc.innerHTML = location;
  temNum.innerHTML = `${temp.toFixed()}`;
}

window.onload = function() {
  getLocation();
};

function cToF(celsius) {
  return celsius * 9 / 5 + 32;
}

function fToC(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toggleScale() {
  if (tempScale.innerHTML === "C") {
    temNum.innerHTML = cToF(temNum.innerHTML).toFixed(0);
    tempScale.innerHTML = "F";
  } else if (tempScale.innerHTML === 'F') {
    temNum.innerHTML = fToC(temNum.innerHTML).toFixed(0);
    tempScale.innerHTML = "C";
  }
}

tempScale.addEventListener("click", toggleScale);