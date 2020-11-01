import Address from './address';
import Coordinates from './coordinates';

const accessGeolocationKey = 'd919ab5f710a4282b8a2713efa54360a';

export default class Geolocation {
  getGeolocation(latitude, longitude) {
    fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${accessGeolocationKey}`)
      .then((response) => response.json())
      .then((data) => {
        const details = `${data.results[0].components.city === undefined ? data.results[0].components.village : data.results[0].components.city}, ${data.results[0].components.country}`;
        this.address = new Address(
          details,
        );
      })
      .then(() => this.buildHTML())
      .catch(() => {
        this.getCoordinates('Warszawa');
      });
  }

  getCoordinates(city) {
    return fetch(`https://api.opencagedata.com/geocode/v1/json?q=${city}&key=${accessGeolocationKey}`)
      .then((response) => response.json())
      .then((data) => {
        this.coordinates = new Coordinates(
          data.results[0].geometry.lat,
          data.results[0].geometry.lng,
        );
        this.address = new Address(
          data.results[0].formatted,
        );
        this.buildHTML();
        return this.coordinates;
      });
  }

  buildHTML() {
    document.getElementById('localization').innerHTML = `${this.address.details}`;
  }
}
