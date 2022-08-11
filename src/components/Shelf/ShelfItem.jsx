import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setSelected } from '../../store/actions/selected-action';
import { selectBooks } from '../../store/selectors/books-selector';

const ShelfItem = ({ shelfItem, handleRemoveFromShelf }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const books = useSelector(selectBooks);
  const id = shelfItem.id;
  const handleSelect = (books, id) => {
    dispatch(setSelected(books, id));
    navigate(`/book/${shelfItem.id}`);
  };
  return (
    <>
      <div className="card ">
        <div className="card-image">
          {shelfItem.volumeInfo.imageLinks ? (
            <img
              className="activator"
              src={shelfItem.volumeInfo.imageLinks.thumbnail}
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
            onClick={() => handleRemoveFromShelf(shelfItem)}
          >
            <i className="material-icons lime lighten-1 ">remove</i>
          </button>
        </div>
        <div className="card-content">
          <span className="card-title">{shelfItem.volumeInfo.title}</span>
          <p>
            {shelfItem.volumeInfo.description
              ? shelfItem.volumeInfo.description.slice(0, 100)
              : 'ooopsy'}
            ...
          </p>
        </div>
      </div>
    </>
  );
};

export default ShelfItem;
