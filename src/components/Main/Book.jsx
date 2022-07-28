import { Link } from 'react-router-dom';

const Book = ({ book, setShelf, addToShelf }) => {
  // console.log(setShelf);

  return (
    <div className="card ">
      <div className="card-image">
        {book.volumeInfo.imageLinks ? (
          <Link to={`/book/${book.id}`}>
            <img
              className="activator"
              src={book.volumeInfo.imageLinks.thumbnail}
              alt="img"
            />
          </Link>
        ) : (
          <Link to={`/book/${book.id}`}>
            <img
              className="activator"
              src={`https://via.placeholder.com/300x450?text=ooops`}
              // src={`https://i.picsum.photos/id/1025/300/450`} need to checkout
              alt="img"
            />
          </Link>
        )}

        <button
          className="btn-floating halfway-fab waves-effect waves-light teal lighten-1"
          onClick={() => addToShelf(book)}
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
