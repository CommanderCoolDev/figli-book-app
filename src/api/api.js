import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;

// const BASIC_URL = `https://www.googleapis.com/books/v1/volumes?q=react&key=${API_KEY}&maxResults=20`;
const BASIC_URL = `https://www.googleapis.com/books/v1/volumes?key=${API_KEY}`;

export const fetchSearch = (search, setBooks, selectedOption) => {
  // console.log(selectedOption.value);
  axios
    .get(
      `${BASIC_URL}&q=${search}&maxResults=${
        selectedOption === null ? 20 : selectedOption.value
      }`,
    )
    .then(resp => setBooks(resp.data.items))

    .catch(err => console.log(err));
};
export const getBookByID = (id, setSelected) => {
  axios
    .get(`https://www.googleapis.com/books/v1/volumes/${id}`)
    .then(resp => setSelected(resp))
    .catch(err => console.log(err));
};

// export default BASIC_URL;
