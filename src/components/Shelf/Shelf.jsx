import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { useNavigate } from 'react-router-dom';
import { CSVLink } from 'react-csv';
import { selectShelf } from '../../store/selectors/shelf-selector';
import { removeFromShelf } from '../../store/actions/shelf-action';
import { ToastContainer, toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ShelfItem from './ShelfItem';

const Shelf = () => {
  const [csvShelfData, setCsvShelfData] = useState([]);
  const dispatch = useDispatch();
  const shelf = useSelector(selectShelf);

  const data = shelf.map(shelf => shelf.volumeInfo);
  const headers = [
    { label: 'Name', key: 'title' },
    { label: 'Author', key: 'authors' },
    { label: 'Publisher', key: 'publisher' },
    { label: 'Published Date', key: 'publishedDate' },
    { label: 'Categories', key: 'categories' },
    { label: 'Page Count', key: 'pageCount' },
    { label: 'Description', key: 'description' },
  ];
  const csvReport = {
    filename: 'Report.csv',
    headers: headers,
    data: csvShelfData,
  };
  const navigate = useNavigate();

  const handleRemoveFromShelf = item => {
    dispatch(removeFromShelf(item));
    toast('Book removed from shelf');
  };
  useEffect(() => {
    setCsvShelfData(data);
  }, []);

  return !shelf.length ? (
    <div className="container content">
      <div className="csv-box">
        <button
          className="btn lime lighten-1 backBtn"
          onClick={() => navigate(-1)}
        >
          Go Back
        </button>
      </div>
      <div className="shelf-box">
        <h3>Nothing to show</h3>
        <img
          src="https://cdn.pixabay.com/photo/2021/03/04/21/37/dog-6069677_960_720.png"
          alt="Pug"
          className="notFound-img"
        />
      </div>
    </div>
  ) : (
    <div className="container content">
      <div className="csv-box">
        <button
          className="btn lime lighten-1 backBtn"
          onClick={() => navigate(-1)}
        >
          Go Back
        </button>

        <CSVLink {...csvReport} separator=";" className="btn lime lighten-1">
          Export to CSV
        </CSVLink>
      </div>
      <div className="books">
        {shelf.map(shelfItem => (
          <ShelfItem
            key={shelfItem.id}
            shelfItem={shelfItem}
            handleRemoveFromShelf={handleRemoveFromShelf}
          />
        ))}
      </div>
      <ToastContainer autoClose={5000} transition={Zoom} />
    </div>
  );
};

export default Shelf;
