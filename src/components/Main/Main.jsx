import { useState } from 'react';

import 'react-toastify/dist/ReactToastify.css';
import Search from '../Search/Search';

const Main = () => {
  const [search, setSearch] = useState('');

  return (
    <main className="container content">
      <Search search={search} setSearch={setSearch} />
    </main>
  );
};

export default Main;
//need to disamble?
