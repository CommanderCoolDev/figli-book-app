const Book = ({ book }) => {
  //   console.log(book);
  //   console.log(
  //     book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : 'null',
  //   );
  //   console.log(book.volumeInfo.description.slice(0, 80));
  //   console.log(typeof book.volumeInfo.description);
  return (
    <div className="card ">
      <div className="card-image">
        {book.volumeInfo.imageLinks ? (
          <img
            className="activator"
            src={book.volumeInfo.imageLinks.thumbnail}
            alt="img"
          />
        ) : (
          <img
            className="activator"
            src={`https://via.placeholder.com/300x450?text=ooops`}
            // src={`https://i.picsum.photos/id/1025/300/450`} need to checkout
            alt="img"
          />
        )}

        <a
          className="btn-floating halfway-fab waves-effect waves-light red"
          href="/"
        >
          <i className="material-icons ">add</i>
        </a>
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
