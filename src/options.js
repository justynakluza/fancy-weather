import Geolocation from './geolocation';
import Map from './map';
import Weather from './weather';
import { getCookie } from './helpers';

export default class Options {
  constructor() {
    this.searchArea = 'search-area';
    this.searchAction = 'search-action';
    this.changeBackground = 'change-background';
    this.cookie = getCookie('unit');
    this.unitC = 'metric';
    this.unitF = 'imperial';
    if (this.cookie === '') {
      this.setCookie('unit', this.unitC);
    }
    this.buildHtml();
    this.addEventListenerToUnits();
    this.bulidSearch();
    this.addEventListenerSearchButton();
    this.buildChangeBackgroundButton();
  }

  addEventListenerToUnits() {
    document.getElementById('select-unit').addEventListener('click', (x) => {
      if (x.target.id !== this.cookie) {
        this.setCookie('unit', x.target.id);
        window.location.reload(false);
      }
    });
  }

  buildChangeBackgroundButton() {
    const parentDiv = document.getElementById(this.changeBackground);
    const changeBackgroundButton = document.createElement('button');
    changeBackgroundButton.type = 'button';
    changeBackgroundButton.id = `${this.changeBackground}-button`;
    changeBackgroundButton.classList.add('btn');
    changeBackgroundButton.classList.add('btn-secondary');
    changeBackgroundButton.classList.add(`${this.changeBackground}-style`);

    parentDiv.appendChild(changeBackgroundButton);
  }


  buildHtml() {
    const parentDiv = document.getElementById('select-unit');
    const imperialButton = document.createElement('button');
    imperialButton.type = 'button';
    imperialButton.id = this.unitF;
    imperialButton.classList.add('btn');
    imperialButton.innerHTML = '℉';

    const metricButton = document.createElement('button');
    metricButton.type = 'button';
    metricButton.id = this.unitC;
    metricButton.classList.add('btn');
    metricButton.innerHTML = '℃';

    if (this.cookie === this.unitC) {
      metricButton.classList.add('btn-primary');
      imperialButton.classList.add('btn-secondary');
    } else {
      imperialButton.classList.add('btn-primary');
      metricButton.classList.add('btn-secondary');
    }
    parentDiv.appendChild(imperialButton);
    parentDiv.appendChild(metricButton);
  }

  bulidSearch() {
    const parentDiv = document.getElementById(this.searchArea);
    const inputArea = document.createElement('input');
    inputArea.type = 'search';
    inputArea.id = 'search-input';
    inputArea.classList.add('form-control');
    inputArea.placeholder = 'Search';
    inputArea.ariaLabel = 'Search';

    const searchAction = document.createElement('button');
    searchAction.type = 'submit';
    searchAction.id = 'search-action';
    searchAction.classList.add('btn');
    searchAction.classList.add('btn-primary');
    searchAction.innerHTML = 'Search';

    parentDiv.appendChild(inputArea);
    parentDiv.appendChild(searchAction);
  }


  addEventListenerSearchButton() {
    document.getElementById(this.searchAction).addEventListener('click', (e) => {
      e.preventDefault();
      document.getElementById('search-input').style.border = 'none';
      const city = document.getElementById('search-input').value;
      this.findWeatherForCity(city);
    });
  }

  findWeatherForCity(city) {
    const geolocation = new Geolocation();
    geolocation.getCoordinates(city)
      .then((coordinates) => {
        const weather = new Weather(
          coordinates.latitude,
          coordinates.longitude,
        );
        const map = new Map(
          coordinates.latitude,
          coordinates.longitude,
        );
        map.build();
        weather.getWeather(this.getUnit());
      })
      .catch(() => {
        document.getElementById('search-input').style.border = 'thick solid rgba(240, 30, 30, .5';
        document.getElementById('search-input').value = 'Incorrect data';
      });
  }

  getUnit() {
    return this.cookie;
  }

  setCookie(key, val) {
    document.cookie = `${key}=${val}`;
    this.cookie = val;
  }
}
