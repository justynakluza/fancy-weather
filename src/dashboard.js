const accesKey = 'client_id=e6rz7y2GMPIblm8M0qr1zao6GVoC5cZy3IWBBufw-aI';
let language = 'EN-lang';


export default class Dashboard {
  constructor(backgroundImage) {
    this.backgroundImage = backgroundImage;
  }

  setRandomBackgroundImage() {
    fetch(`https://api.unsplash.com/photos/random?per_page=1&orientation=landscape&query=${this.backgroundImage.season}-${this.backgroundImage.time}-${this.backgroundImage.weather}&${accesKey}`)
      .then((response) => response.json())
      .then((data) => {
        document.body.style.backgroundImage = `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgb(0, 0, 0, 0)), url(${data.urls.regular})`;
      })
      .catch(() => {
        document.body.style.backgroundImage = 'url(img/background-photo.jpg)';
      });
  }
}


document.getElementById('select-lang').addEventListener('click', (x) => {
  x.target.blur();
  document.getElementById(language).classList.replace('btn-primary', 'btn-secondary');
  language = x.target.id;
  x.target.classList.replace('btn-secondary', 'btn-primary');
});


document.getElementById('select-unit').addEventListener('click', (x) => {
  x.target.blur();
  x.target.nextElementSibling.classList.replace('btn-primary', 'btn-secondary');
  document.getElementById(x.target.id).classList.replace('btn-secondary', 'btn-primary');
});
