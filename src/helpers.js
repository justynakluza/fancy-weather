/* eslint-disable import/prefer-default-export */
export function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  return parts.pop().split(';').shift();
}

export function getDayOfTheWeek(time, days) {
  const x = new Date(time * 1000);
  return (days[x.getDay()]).toUpperCase();
}

export function getCurrentMonth(date) {
  return date.toLocaleString('en-us', { month: 'long' });
}

export function getFullMinutes(date) {
  if (date.getMinutes() < 10) {
    return `0${date.getMinutes()}`;
  }
  return date.getMinutes();
}
