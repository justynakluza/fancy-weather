import { getCookie } from './helpers';

export default class Language {
  constructor() {
    this.cookie = getCookie('lang');
    this.english = 'EN';
    this.polish = 'PL';
    this.spanish = 'ES';

    if (this.cookie === '') {
      this.setCookie('lang', this.english);
    }
    this.buildHtml();
    this.addEventListenerToLanguage();
  }

  buildHtml() {
    const parentDiv = document.getElementById('select-lang');

    const enButton = document.createElement('button');
    enButton.type = 'button';
    enButton.id = this.english;
    enButton.classList.add('btn');
    enButton.innerHTML = 'EN';

    const plButton = document.createElement('button');
    plButton.type = 'button';
    plButton.id = this.polish;
    plButton.classList.add('btn');
    plButton.innerHTML = 'PL';

    const espButton = document.createElement('button');
    espButton.type = 'button';
    espButton.id = this.spanish;
    espButton.classList.add('btn');
    espButton.innerHTML = 'ES';

    if (this.cookie === this.english) {
      enButton.classList.add('btn-primary');
      plButton.classList.add('btn-secondary');
      espButton.classList.add('btn-secondary');
    } else if (this.cookie === this.polish) {
      plButton.classList.add('btn-primary');
      enButton.classList.add('btn-secondary');
      espButton.classList.add('btn-secondary');
    } else if (this.cookie === this.spanish) {
      espButton.classList.add('btn-primary');
      enButton.classList.add('btn-secondary');
      plButton.classList.add('btn-secondary');
    }

    parentDiv.appendChild(enButton);
    parentDiv.appendChild(plButton);
    parentDiv.appendChild(espButton);
  }

  addEventListenerToLanguage() {
    document.getElementById('select-lang').addEventListener('click', (x) => {
      if (x.target.id === this.english) {
        this.setCookie('lang', x.target.id);
        window.location.reload(false);
      } else if (x.target.id === this.polish) {
        this.setCookie('lang', x.target.id);
        window.location.reload(false);
      } else if (x.target.id === this.spanish) {
        this.setCookie('lang', x.target.id);
        window.location.reload(false);
      }
    });
  }


  getLanguage() {
    return this.cookie;
  }

  setCookie(key, val) {
    document.cookie = `${key}=${val}`;
    this.cookie = val;
  }
}
