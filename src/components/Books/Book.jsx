import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { setShelf } from '../../store/actions/shelf-action';
import { toast } from 'react-toastify';

import { setSelected } from '../../store/actions/selected-action';
import { selectBooks } from '../../store/selectors/books-selector';
import { selectShelf } from '../../store/selectors/shelf-selector';

const Book = ({ book }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const books = useSelector(selectBooks);
  const shelf = useSelector(selectShelf);

  const shelfIds = shelf.map(el => el.id);

  const handleAddToShelfClick = book => {
    if (shelfIds.includes(book.id)) {
      toast.error('Already in the BookShelf!');
      return;
    }
    dispatch(setShelf(book));
    toast('Book added to shelf!');
  };
  const id = book.id;
  const handleSelect = (books, id) => {
    dispatch(setSelected(books, id));
    navigate(`/book/${book.id}`);
  };

  return (
    <div className="card ">
      <div className="card-image">
        {book.volumeInfo.imageLinks ? (
          <img
            className="activator"
            src={book.volumeInfo.imageLinks.thumbnail}
            alt="img"
            onClick={() => handleSelect(books, id)}
          />
        ) : (
          <img
            className="activator"
            src={`https://via.placeholder.com/300x450?text=ooops`}
            // src={`https://i.picsum.photos/id/1025/300/450`} need to checkout
            alt="img"
            onClick={() => handleSelect(books, id)}
          />
        )}

        <button
          className="btn-floating halfway-fab waves-effect waves-light teal lighten-1"
          onClick={() => handleAddToShelfClick(book)}
        >
          <i className="material-icons lime lighten-1 ">add</i>
        </button>
      </div>
      <div className="card-content">
        <span className="card-title">{book.volumeInfo.title}</span>
        <p>
          {book.volumeInfo.description
            ? book.volumeInfo.description.slice(0, 100)
            : 'ooopsy'}
          ...
        </p>
      </div>
    </div>
  );
};

export default Book;
