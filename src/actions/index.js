import axios from 'axios';
const API_KEY = 'd4e044e85c5fa32d53da1675c288696f';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city}, us`;
  const request = axios.get(url);

  console.log('Request:', request);// Definitely a Promise
  return {
    type: FETCH_WEATHER,
    payload: request
  }
}