import { Link } from 'react-router-dom';

const ShelfItem = ({ shelfItem, handleRemoveFromShelf }) => {
  return (
    <>
      <div className="card ">
        <div className="card-image">
          {shelfItem.volumeInfo.imageLinks ? (
            <Link to={`/book/${shelfItem.id}`}>
              <img
                className="activator"
                src={shelfItem.volumeInfo.imageLinks.thumbnail}
                alt="img"
              />
            </Link>
          ) : (
            <Link to={`/book/${shelfItem.id}`}>
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
