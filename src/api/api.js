const API_KEY = process.env.REACT_APP_API_KEY;

const BASIC_URL = `https://www.googleapis.com/books/v1/volumes?q=react&key=${API_KEY}&maxResults=20`;

export default BASIC_URL;
