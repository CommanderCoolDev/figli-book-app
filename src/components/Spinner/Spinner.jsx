import { PacmanLoader } from 'react-spinners';

export default function Spinner() {
  return (
    <div className="spinner-box content">
      <div className="spinner ">
        <PacmanLoader color="#9e9d24" />
      </div>
    </div>
  );
}
