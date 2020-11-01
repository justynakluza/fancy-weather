import WeatherInfo from './weatherInfo';
import BackgroundImage from './backgroundImage';
import Dashboard from './dashboard';
import {
  getDayOfTheWeek, getCurrentMonth, getFullMinutes, getCookie,
} from './helpers';
import languages from './languageList';

const openWeatherKey = 'bc99b7a75a4208229edd8c0a86f39108';

export default class Weather {
  constructor(latitude, longitude) {
    this.latitude = latitude;
    this.longitude = longitude;
    this.dailyForecast = [];
    this.currentDate = new Date();
    this.language = languages.find((x) => x.id === getCookie('lang'));
  }

  getWeather(units) {
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${this.latitude}&lon=${this.longitude}&exclude=hourly,minutely&appid=${openWeatherKey}&units=${units}&lang=${this.language.id}`)
      .then((response) => response.json())
      .then((data) => {
        this.currentWeather = new WeatherInfo(
          Math.round(data.current.temp),
          Math.round(data.current.feels_like),
          data.current.weather[0].description.toUpperCase(),
          data.current.wind_speed,
          data.current.humidity,
          `http://openweathermap.org/img/wn/${data.current.weather[0].icon}@4x.png`,
          data.current.sunrise,
          data.current.sunset,
          data.current.dt,
        );

        const nextThreeDays = data.daily.slice(0, 4);
        nextThreeDays.forEach((x) => {
          const futureWeather = new WeatherInfo(
            Math.round(x.temp.day),
            x.feels_like.day,
            x.weather[0].description,
            x.wind_speed,
            x.humidity,
            `http://openweathermap.org/img/wn/${x.weather[0].icon}@2x.png`,
            x.sunrise,
            x.sunset,
            x.dt,
          );
          this.dailyForecast.push(futureWeather);
        });
      })
      .then(() => this.buildHTML())
      .then(() => {
        const backgroundImage = this.getBackgroundImage();
        const dashboard = new Dashboard(backgroundImage);
        dashboard.setRandomBackgroundImage();
        document.getElementById('change-background').addEventListener('click', () => {
          dashboard.setRandomBackgroundImage();
        });
      });
  }

  dayOrNight() {
    const timeNow = this.currentDate / 1000;
    if (this.currentWeather.sunrise < timeNow < this.currentWeather.sunset) {
      return 'day';
    } return 'night';
  }

  buildHTML() {
    document.getElementById('current-temp').innerHTML = this.currentWeather.temperature;
    document.getElementById('temp-feels-like').innerHTML = `${this.language.feelsLike}: ${this.currentWeather.feelsLike}`;
    document.getElementById('description').innerHTML = this.currentWeather.description;
    document.getElementById('wind').innerHTML = `${this.language.wind}: ${this.currentWeather.wind} km/h`;
    document.getElementById('humidity').innerHTML = `${this.language.humidity}: ${this.currentWeather.humidity}%`;
    document.getElementById('weather-icon').src = this.currentWeather.icon;
    document.getElementById('latitude').textContent = `${this.language.latitude}: ${this.latitude}`;
    document.getElementById('longitude').textContent = `${this.language.longitude}: ${this.longitude}`;
    document.getElementById('date-time').textContent = `${this.currentDate.toLocaleDateString()} ${this.currentDate.getHours()} : ${getFullMinutes(this.currentDate)}`;
    setInterval(() => {
      const date = new Date();
      document.getElementById('date-time').textContent = `${date.toLocaleDateString()} ${date.getHours()} ${getFullMinutes(date)}`;
    }, 1000 * 60);

    document.getElementById('day-1').innerHTML = getDayOfTheWeek(this.dailyForecast[1].date, this.language.days);
    document.getElementById('future-temp-1').innerHTML = this.dailyForecast[1].temperature;
    document.getElementById('weather-icon-1').src = this.dailyForecast[1].icon;

    document.getElementById('day-2').innerHTML = getDayOfTheWeek(this.dailyForecast[2].date, this.language.days);
    document.getElementById('future-temp-2').innerHTML = this.dailyForecast[2].temperature;
    document.getElementById('weather-icon-2').src = this.dailyForecast[2].icon;

    document.getElementById('day-3').innerHTML = getDayOfTheWeek(this.dailyForecast[3].date, this.language.days);
    document.getElementById('future-temp-3').innerHTML = this.dailyForecast[3].temperature;
    document.getElementById('weather-icon-3').src = this.dailyForecast[3].icon;
  }


  getBackgroundImage() {
    return new BackgroundImage(
      getCurrentMonth(this.currentDate),
      this.dayOrNight(),
      this.currentWeather.description,
    );
  }
}
