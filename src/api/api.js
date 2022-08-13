import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;

const BASIC_URL = `https://www.googleapis.com/books/v1/volumes?key=${API_KEY}`;

export const fetchSearch = search => {
  const response = axios.get(`${BASIC_URL}&q=${search}&maxResults=40`);
  return response;
};
