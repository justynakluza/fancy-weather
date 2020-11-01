import "./style.css";
import "./index.html";
import "./img/background-photo.jpg";
import Weather from "./weather";
import Options from "./options";
import Map from "./map";
import Language from "./language";
import Geolocation from "./geolocation";

const options = {
  enableHighAccuracy: true,
  timeout: 10000,
  maximumAge: 0
};

function activateLoader() {
  const loader = document.createElement("div");
  loader.id = "loader-icon";
  loader.classList.add("loader");
  document.body.appendChild(loader);
}

activateLoader();

function deactivateLoader() {
  document.getElementById("loader-icon").style.display = "none";
}

async function success(position) {
  deactivateLoader();
  const dashboardOptions = new Options();
  dashboardOptions.addEventListenerToUnits();
  const unit = dashboardOptions.getUnit();

  const dashboardLanguage = new Language();
  dashboardLanguage.addEventListenerToLanguage();

  const crd = position.coords;

  const weather = new Weather(crd.latitude, crd.longitude);
  const map = new Map(crd.latitude, crd.longitude);
  map.build();
  const geolocation = new Geolocation();
  geolocation.getGeolocation(crd.latitude, crd.longitude);

  await weather.getWeather(unit);
}

function error() {
  deactivateLoader();
  document.body.style.backgroundImage = "url(img/background-photo.jpg)";
  const dashboardOptions = new Options();
  dashboardOptions.addEventListenerToUnits();
  const dashboardLanguage = new Language();
  dashboardLanguage.addEventListenerToLanguage();
  dashboardOptions.findWeatherForCity('Warszawa');
}

navigator.geolocation.getCurrentPosition(success, error, options);
