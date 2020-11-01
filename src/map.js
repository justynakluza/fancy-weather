/* eslint-disable no-undef */
mapboxgl.accessToken = 'pk.eyJ1IjoiamtsdXphIiwiYSI6ImNrYjdxeXZqeTA4ZW4yd3FoYTk2MzdoMTIifQ.Rg2uMrQxfrBXUFk0bH0czQ';

export default class Map {
  constructor(latitude, longitude) {
    this.latitude = latitude;
    this.longitude = longitude;
  }

  build() {
    this.map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [this.longitude, this.latitude],
      zoom: 9,
    });
  }
}
