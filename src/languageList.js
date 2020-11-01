const englishLanguage = {
  id: 'EN',
  feelsLike: 'FEELS LIKE',
  wind: 'WIND',
  humidity: 'HUMIDITY',
  search: 'SEARCH',
  days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  latitude: 'Latitude',
  longitude: 'Longitude',
};
const polishLanguage = {
  id: 'PL',
  feelsLike: 'TEMPERATURA ODCZUWALNA',
  wind: 'WIATR',
  humidity: 'WILGOTNOŚĆ',
  search: 'SZUKAJ',
  days: ['Niedziela', 'Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota'],
  latitude: 'Szerokość',
  longitude: 'Długość',
};
const spanishLanguage = {
  id: 'ES',
  feelsLike: 'TEMPERATURA DETECTADA',
  wind: 'VIENTO',
  humidity: 'HUMEDAD',
  search: 'Buscar',
  days: ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'],
  latitude: 'Latitud',
  longitude: 'Longitud',
};
const languages = [englishLanguage, polishLanguage, spanishLanguage];
export default languages;
