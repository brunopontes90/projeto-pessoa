import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import './App.css';
import List from "./components/List/List";

function App() {
  const [listPessoas, setListPessoas] = useState();

  useEffect(() => {
    Axios.get("http://localhost:3001/")
      .then((response) => { setListPessoas(response.data) });
  });

  return (
    <div>
      <List listPessoas={listPessoas} />
    </div>
  );
}

export default App;
