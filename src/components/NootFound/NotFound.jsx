import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="box-notFound content">
      <h3 className="notFound-title">Something go wrong</h3>
      <img
        src="https://cdn.pixabay.com/photo/2021/03/04/21/37/dog-6069677_960_720.png"
        alt="Pug"
        className="notFound-img"
      />
      <button
        className="btn lime lighten-1 backBtn"
        onClick={() => navigate(-1)}
      >
        Go Back
      </button>
    </div>
  );
};

export default NotFound;
