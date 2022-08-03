// import { getBookByID } from '../../api/api';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import Spinner from '../Spinner/Spinner';

import { selectSelected } from '../../store/selectors/selected-selectors';

const Selected = () => {
  const { id } = useParams();

  const selected = useSelector(selectSelected);
  const navigate = useNavigate();
  const data = selected[0];

  useEffect(() => {
    toast(`${data.volumeInfo.title}`);
    // getBookByID(id, setSelected); // forbackend render
  }, [id]);

  return (
    <>
      {!data ? (
        <Spinner />
      ) : (
        <div className="book-box ">
          <button
            className="btn lime lighten-1 backBtn"
            onClick={() => navigate(-1)}
          >
            Go Back
          </button>
          {data.volumeInfo.imageLinks ? (
            <img
              src={data.volumeInfo.imageLinks.thumbnail}
              alt=""
              className="img-book"
            />
          ) : (
            <img
              className="book-box"
              src={`https://via.placeholder.com/300x450?text=ooops`}
              // src={`https://i.picsum.photos/id/1025/300/450`} need to checkout
              alt="img"
            />
          )}

          <div className="selected-info-box">
            <h2 className="book-title">Name: {data.volumeInfo.title}</h2>
            <h3>Author: {data.volumeInfo.authors}</h3>
            <h4>
              Publisher: {data.volumeInfo.publisher}{' '}
              <span>{data.volumeInfo.publishedDate}</span>
            </h4>
            <p>Categories: {data.volumeInfo.categories} </p>
            <p>Page Count: {data.volumeInfo.pageCount} pgs.</p>
          </div>
          <div className="selected-descr-box">
            <p className="book-descr">{data.volumeInfo.description}</p>
          </div>
        </div>
      )}
    </>
  );
};
export default Selected;
