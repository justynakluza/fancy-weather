export default class WeatherInfo {
  constructor(temperature, feelsLike, description, wind, humidity, icon, sunrise, sunset, date) {
    this.temperature = temperature;
    this.feelsLike = feelsLike;
    this.description = description.charAt(0).toUpperCase() + description.slice(1);
    this.wind = wind;
    this.humidity = humidity;
    this.icon = icon;
    this.sunrise = sunrise;
    this.sunset = sunset;
    this.date = date;
  }
}
