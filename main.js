!function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=6)}([function(e,t,n){var i=n(1),r=n(2);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var a={insert:"head",singleton:!1};i(r,a);e.exports=r.locals||{}},function(e,t,n){"use strict";var i,r=function(){return void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i},a=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),o=[];function s(e){for(var t=-1,n=0;n<o.length;n++)if(o[n].identifier===e){t=n;break}return t}function d(e,t){for(var n={},i=[],r=0;r<e.length;r++){var a=e[r],d=t.base?a[0]+t.base:a[0],c=n[d]||0,u="".concat(d," ").concat(c);n[d]=c+1;var l=s(u),h={css:a[1],media:a[2],sourceMap:a[3]};-1!==l?(o[l].references++,o[l].updater(h)):o.push({identifier:u,updater:f(h,t),references:1}),i.push(u)}return i}function c(e){var t=document.createElement("style"),i=e.attributes||{};if(void 0===i.nonce){var r=n.nc;r&&(i.nonce=r)}if(Object.keys(i).forEach((function(e){t.setAttribute(e,i[e])})),"function"==typeof e.insert)e.insert(t);else{var o=a(e.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}return t}var u,l=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function h(e,t,n,i){var r=n?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(e.styleSheet)e.styleSheet.cssText=l(t,r);else{var a=document.createTextNode(r),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(a,o[t]):e.appendChild(a)}}function g(e,t,n){var i=n.css,r=n.media,a=n.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),a&&btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var m=null,p=0;function f(e,t){var n,i,r;if(t.singleton){var a=p++;n=m||(m=c(t)),i=h.bind(null,n,a,!1),r=h.bind(null,n,a,!0)}else n=c(t),i=g.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;i(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=r());var n=d(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var i=0;i<n.length;i++){var r=s(n[i]);o[r].references--}for(var a=d(e,t),c=0;c<n.length;c++){var u=s(n[c]);0===o[u].references&&(o[u].updater(),o.splice(u,1))}n=a}}}},function(e,t,n){var i=n(3),r=n(4),a=n(5);t=i(!1);var o=r(a);t.push([e.i,"body {\n    background: no-repeat;\n    background-size: cover; \n}\n\n.loader {\n  border: 16px solid #f3f3f3;\n  border-top: 16px solid #fffb00;\n  border-radius: 50%;\n  width: 120px;\n  height: 120px;\n  animation: spin 2s linear infinite;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n}\n\n@keyframes spin {\n  0% { transform: rotate(0deg); }\n  100% { transform: rotate(360deg); }\n}\n\n.change-background-style {\n  width: 40px;\n  height: 40px;\n  background: url("+o+") no-repeat center;\n  background-size: 150%;\n}\n\n.main-content {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  flex-wrap: wrap;\n  margin: 20px 110px 20px 110px;\n  padding: 30px 30px 30px 30px;\n}\n\n.grid-container {\n  color: white;\n  width: 600px;\n  height: 600px;\n  display: grid;\n  grid-template-columns: repeat(3, fit-content(200px));\n}\n\n\n.item-1 {\n  grid-column-start: 1;\n  grid-column-end: 4;\n  font-size: 2rem;\n\n}\n\n.item-2 {\n  grid-column-start: 1;\n  grid-column-end: 4;\n  font-size: 1.5rem;\n\n}\n\n.item-3 {\n  grid-row-start: 3;\n  grid-row-end: 5;\n  grid-column-start: 1;\n  grid-column-end: 3;\n  justify-self: center;\n  align-self: center;\n  font-size: 17rem;\n}\n\n\n.item-4 {\n  justify-self: center;\n  align-self: center;\n}\n\n.item-5 {\n  font-family: Verdana, sans-serif;\n}\n\n.forecast {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n}\n\n.temp-1, .temp-2, .temp-3 {\n  font-size: 4rem;\n  display: flex;\n  justify-self: center;\n  align-self: center;\n}\n\n\n.day {\n  grid-row-start: 1;\n  grid-row-end: 2;\n  grid-column-start: 1;\n  grid-column-end: 3;\n  font-size: 1.2rem;\n  font-weight: 700;\n  text-align: center;\n}\n\n.item-6 {\n  grid-row-start: 5;\n  grid-row-end: 6;\n  grid-column-start: 1;\n  grid-column-end: 2;\n}\n\n.item-7 {\n  grid-row-start: 5;\n  grid-row-end: 6;\n  grid-column-start: 2;\n  grid-column-end: 3;\n}\n\n.item-8 {\n  grid-row-start: 5;\n  grid-row-end: 6;\n  grid-column-start: 3;\n  grid-column-end: 4;\n}\n\n\n.container-options {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  justify-items: center;\n  flex-wrap: wrap;\n  margin: 20px 60px 20px 60px;\n}\n\n.btn {\n  margin: 5px;\n}\n\n.buttons {\n  display: flex;\n  margin-top: 20px;\n\n}\n\n.container-search {\n  display: flex;\n  flex-direction: row;\n  margin-top: 20px;\n}\n\n.temp-info-list {\n  list-style-type: none;\n  margin-bottom: 3rem;\n}\n\n.map {\n  height: 400px;\n  width: 350px;\n  border-radius: 15px;\n}\n\n.localization{\n  margin-top: 20px;\n}\n\n.localization-crds {\n  margin-top:10px;\n  display: flex;\n  flex-direction: column;\n}\n\n.localization-crds > p {\n  display: flex;\n  align-self: flex-end;\n  color: rgb(255, 255, 255);\n}",""]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",i=e[3];if(!i)return n;if(t&&"function"==typeof btoa){var r=(o=i,s=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),d="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(d," */")),a=i.sources.map((function(e){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(e," */")}));return[n].concat(a).concat([r]).join("\n")}var o,s,d;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,i){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(i)for(var a=0;a<this.length;a++){var o=this[a][0];null!=o&&(r[o]=!0)}for(var s=0;s<e.length;s++){var d=[].concat(e[s]);i&&r[d[0]]||(n&&(d[2]?d[2]="".concat(n," and ").concat(d[2]):d[2]=n),t.push(d))}},t}},function(e,t,n){"use strict";e.exports=function(e,t){return t||(t={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},function(e,t,n){"use strict";n.r(t),t.default=n.p+"img/picture.svg"},function(e,t,n){"use strict";n.r(t);n(0),n.p,n.p;class i{constructor(e,t,n,i,r,a,o,s,d){this.temperature=e,this.feelsLike=t,this.description=n.charAt(0).toUpperCase()+n.slice(1),this.wind=i,this.humidity=r,this.icon=a,this.sunrise=o,this.sunset=s,this.date=d}}class r{constructor(e,t,n){this.season=e,this.time=t,this.weather=n}}let a="EN-lang";class o{constructor(e){this.backgroundImage=e}setRandomBackgroundImage(){fetch(`https://api.unsplash.com/photos/random?per_page=1&orientation=landscape&query=${this.backgroundImage.season}-${this.backgroundImage.time}-${this.backgroundImage.weather}&client_id=e6rz7y2GMPIblm8M0qr1zao6GVoC5cZy3IWBBufw-aI`).then(e=>e.json()).then(e=>{document.body.style.backgroundImage=`linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgb(0, 0, 0, 0)), url(${e.urls.regular})`})}}function s(e){return("; "+document.cookie).split(`; ${e}=`).pop().split(";").shift()}function d(e,t){return t[new Date(1e3*e).getDay()].toUpperCase()}function c(e){return e.getMinutes()<10?"0"+e.getMinutes():e.getMinutes()}document.getElementById("select-lang").addEventListener("click",e=>{e.target.blur(),document.getElementById(a).classList.replace("btn-primary","btn-secondary"),a=e.target.id,e.target.classList.replace("btn-secondary","btn-primary")}),document.getElementById("select-unit").addEventListener("click",e=>{e.target.blur(),e.target.nextElementSibling.classList.replace("btn-primary","btn-secondary"),document.getElementById(e.target.id).classList.replace("btn-secondary","btn-primary")});var u=[{id:"EN",feelsLike:"FEELS LIKE",wind:"WIND",humidity:"HUMIDITY",search:"SEARCH",days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],latitude:"Latitude",longitude:"Longitude"},{id:"PL",feelsLike:"TEMPERATURA ODCZUWALNA",wind:"WIATR",humidity:"WILGOTNOŚĆ",search:"SZUKAJ",days:["Niedziela","Poniedziałek","Wtorek","Środa","Czwartek","Piątek","Sobota"],latitude:"Szerokość",longitude:"Długość"},{id:"ES",feelsLike:"TEMPERATURA DETECTADA",wind:"VIENTO",humidity:"HUMEDAD",search:"Buscar",days:["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"],latitude:"Latitud",longitude:"Longitud"}];class l{constructor(e,t){this.latitude=e,this.longitude=t,this.dailyForecast=[],this.currentDate=new Date,this.language=u.find(e=>e.id===s("lang"))}getWeather(e){fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${this.latitude}&lon=${this.longitude}&exclude=hourly,minutely&appid=bc99b7a75a4208229edd8c0a86f39108&units=${e}&lang=${this.language.id}`).then(e=>e.json()).then(e=>{this.currentWeather=new i(Math.round(e.current.temp),Math.round(e.current.feels_like),e.current.weather[0].description.toUpperCase(),e.current.wind_speed,e.current.humidity,`http://openweathermap.org/img/wn/${e.current.weather[0].icon}@4x.png`,e.current.sunrise,e.current.sunset,e.current.dt);e.daily.slice(0,4).forEach(e=>{const t=new i(Math.round(e.temp.day),e.feels_like.day,e.weather[0].description,e.wind_speed,e.humidity,`http://openweathermap.org/img/wn/${e.weather[0].icon}@2x.png`,e.sunrise,e.sunset,e.dt);this.dailyForecast.push(t)})}).then(()=>this.buildHTML()).then(()=>{const e=this.getBackgroundImage(),t=new o(e);t.setRandomBackgroundImage(),document.getElementById("change-background").addEventListener("click",()=>{t.setRandomBackgroundImage()})})}dayOrNight(){const e=this.currentDate/1e3;return this.currentWeather.sunrise<e<this.currentWeather.sunset?"day":"night"}buildHTML(){document.getElementById("current-temp").innerHTML=this.currentWeather.temperature,document.getElementById("temp-feels-like").innerHTML=`${this.language.feelsLike}: ${this.currentWeather.feelsLike}`,document.getElementById("description").innerHTML=this.currentWeather.description,document.getElementById("wind").innerHTML=`${this.language.wind}: ${this.currentWeather.wind} km/h`,document.getElementById("humidity").innerHTML=`${this.language.humidity}: ${this.currentWeather.humidity}%`,document.getElementById("weather-icon").src=this.currentWeather.icon,document.getElementById("latitude").textContent=`${this.language.latitude}: ${this.latitude}`,document.getElementById("longitude").textContent=`${this.language.longitude}: ${this.longitude}`,document.getElementById("date-time").textContent=`${this.currentDate.toLocaleDateString()} ${this.currentDate.getHours()} : ${c(this.currentDate)}`,setInterval(()=>{const e=new Date;document.getElementById("date-time").textContent=`${e.toLocaleDateString()} ${e.getHours()} ${c(e)}`},6e4),document.getElementById("day-1").innerHTML=d(this.dailyForecast[1].date,this.language.days),document.getElementById("future-temp-1").innerHTML=this.dailyForecast[1].temperature,document.getElementById("weather-icon-1").src=this.dailyForecast[1].icon,document.getElementById("day-2").innerHTML=d(this.dailyForecast[2].date,this.language.days),document.getElementById("future-temp-2").innerHTML=this.dailyForecast[2].temperature,document.getElementById("weather-icon-2").src=this.dailyForecast[2].icon,document.getElementById("day-3").innerHTML=d(this.dailyForecast[3].date,this.language.days),document.getElementById("future-temp-3").innerHTML=this.dailyForecast[3].temperature,document.getElementById("weather-icon-3").src=this.dailyForecast[3].icon}getBackgroundImage(){return new r(this.currentDate.toLocaleString("en-us",{month:"long"}),this.dayOrNight(),this.currentWeather.description)}}class h{constructor(e){this.details=e}}class g{constructor(e,t){this.latitude=e,this.longitude=t}}class m{getGeolocation(e,t){fetch(`https://api.opencagedata.com/geocode/v1/json?q=${e}+${t}&key=d919ab5f710a4282b8a2713efa54360a`).then(e=>e.json()).then(e=>{const t=`${e.results[0].components.city}, ${e.results[0].components.country}`;this.address=new h(t)}).then(()=>this.buildHTML())}getCoordinates(e){return fetch(`https://api.opencagedata.com/geocode/v1/json?q=${e}&key=d919ab5f710a4282b8a2713efa54360a`).then(e=>e.json()).then(e=>(this.coordinates=new g(e.results[0].geometry.lat,e.results[0].geometry.lng),this.address=new h(e.results[0].formatted),this.buildHTML(),this.coordinates))}buildHTML(){document.getElementById("localization").innerHTML=""+this.address.details}}mapboxgl.accessToken="pk.eyJ1IjoiamtsdXphIiwiYSI6ImNrYjdxeXZqeTA4ZW4yd3FoYTk2MzdoMTIifQ.Rg2uMrQxfrBXUFk0bH0czQ";class p{constructor(e,t){this.latitude=e,this.longitude=t}build(){this.map=new mapboxgl.Map({container:"map",style:"mapbox://styles/mapbox/streets-v11",center:[this.longitude,this.latitude],zoom:9})}}class f{constructor(){this.searchArea="search-area",this.searchAction="search-action",this.changeBackground="change-background",this.cookie=s("unit"),this.unitC="metric",this.unitF="imperial",""===this.cookie&&this.setCookie("unit",this.unitC),this.buildHtml(),this.addEventListenerToUnits(),this.bulidSearch(),this.addEventListenerSearchButton(),this.buildChangeBackgroundButton()}addEventListenerToUnits(){document.getElementById("select-unit").addEventListener("click",e=>{e.target.id!==this.cookie&&(this.setCookie("unit",e.target.id),window.location.reload(!1))})}buildChangeBackgroundButton(){const e=document.getElementById(this.changeBackground),t=document.createElement("button");t.type="button",t.id=this.changeBackground+"-button",t.classList.add("btn"),t.classList.add("btn-secondary"),t.classList.add(this.changeBackground+"-style"),e.appendChild(t)}buildHtml(){const e=document.getElementById("select-unit"),t=document.createElement("button");t.type="button",t.id=this.unitF,t.classList.add("btn"),t.innerHTML="℉";const n=document.createElement("button");n.type="button",n.id=this.unitC,n.classList.add("btn"),n.innerHTML="℃",this.cookie===this.unitC?(n.classList.add("btn-primary"),t.classList.add("btn-secondary")):(t.classList.add("btn-primary"),n.classList.add("btn-secondary")),e.appendChild(t),e.appendChild(n)}bulidSearch(){const e=document.getElementById(this.searchArea),t=document.createElement("input");t.type="search",t.id="search-input",t.classList.add("form-control"),t.placeholder="Search",t.ariaLabel="Search";const n=document.createElement("button");n.type="submit",n.id="search-action",n.classList.add("btn"),n.classList.add("btn-primary"),n.innerHTML="Search",e.appendChild(t),e.appendChild(n)}addEventListenerSearchButton(){document.getElementById(this.searchAction).addEventListener("click",e=>{e.preventDefault(),document.getElementById("search-input").style.border="none";const t=document.getElementById("search-input").value;(new m).getCoordinates(t).then(e=>{const t=new l(e.latitude,e.longitude);new p(e.latitude,e.longitude).build(),t.getWeather(this.getUnit())}).catch(()=>{document.getElementById("search-input").style.border="thick solid rgba(240, 30, 30, .5",document.getElementById("search-input").value="Incorrect data"})})}getUnit(){return this.cookie}setCookie(e,t){document.cookie=`${e}=${t}`,this.cookie=t}}class y{constructor(){this.cookie=s("lang"),this.english="EN",this.polish="PL",this.spanish="ES",""===this.cookie&&this.setCookie("lang",this.english),this.buildHtml(),this.addEventListenerToLanguage()}buildHtml(){const e=document.getElementById("select-lang"),t=document.createElement("button");t.type="button",t.id=this.english,t.classList.add("btn"),t.innerHTML="EN";const n=document.createElement("button");n.type="button",n.id=this.polish,n.classList.add("btn"),n.innerHTML="PL";const i=document.createElement("button");i.type="button",i.id=this.spanish,i.classList.add("btn"),i.innerHTML="ES",this.cookie===this.english?(t.classList.add("btn-primary"),n.classList.add("btn-secondary"),i.classList.add("btn-secondary")):this.cookie===this.polish?(n.classList.add("btn-primary"),t.classList.add("btn-secondary"),i.classList.add("btn-secondary")):this.cookie===this.spanish&&(i.classList.add("btn-primary"),t.classList.add("btn-secondary"),n.classList.add("btn-secondary")),e.appendChild(t),e.appendChild(n),e.appendChild(i)}addEventListenerToLanguage(){document.getElementById("select-lang").addEventListener("click",e=>{(e.target.id===this.english||e.target.id===this.polish||e.target.id===this.spanish)&&(this.setCookie("lang",e.target.id),window.location.reload(!1))})}getLanguage(){return this.cookie}setCookie(e,t){document.cookie=`${e}=${t}`,this.cookie=t}}function b(){document.getElementById("loader-icon").style.display="none"}!function(){const e=document.createElement("div");e.id="loader-icon",e.classList.add("loader"),document.body.appendChild(e)}(),navigator.geolocation.getCurrentPosition((async function(e){b();const t=new f;t.addEventListenerToUnits();const n=t.getUnit();(new y).addEventListenerToLanguage();const i=e.coords,r=new l(i.latitude,i.longitude);new p(i.latitude,i.longitude).build(),(new m).getGeolocation(i.latitude,i.longitude),await r.getWeather(n)}),(function(){b(),document.body.style.backgroundImage="url(img/background-photo.jpg)",(new f).addEventListenerToUnits(),(new y).addEventListenerToLanguage()}),{enableHighAccuracy:!0,timeout:1e4,maximumAge:0})}]);