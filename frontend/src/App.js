import './App.css';
import Axios from 'axios';
import List from "./components/List/List";
import React, { useEffect, useState } from 'react';
import Auth from './components/Auth/Auth';

function App() {
  const [listPessoas, setListPessoas] = useState();
  const [user, setUser] = useState();

  useEffect(() => {
    Axios.get("http://localhost:3001/")
      .then((response) => { setListPessoas(response.data) });
  });

  // const handleInsert = () => {
  //   Axios.post('http://localhost:3001/insert', {
  //     id: values.id,
  //     nome: values.nome,
  //     idade: values.idade,
  //     cpf: values.cpf,
  //     endereco: values.endereco,
  //     numero_casa: values.numero_casa,
  //     complemento: values.complemento,
  //     sexo: values.sexo
  //   }).then((response) => {
  //     console.log(response);
  //   });
  // }

  // const handleUpdate = () => {
  //   Axios.post('http://localhost:3001/update', {
  //     id: values.id,
  //     nome: values.nome,
  //     idade: values.idade,
  //     cpf: values.cpf,
  //     endereco: values.endereco,
  //     numero_casa: values.numero_casa,
  //     complemento: values.complemento,
  //     sexo: values.sexo
  //   });
  // }

  const handleDelete = () => {
    Axios.delete(`http://localhost:3001/delete/${listPessoas.id}`);
  }

  return (
    <div>
      <List
        listPessoas={listPessoas}
        handleDelete={handleDelete}
      //handleInsert={handleInsert}
      //handleUpdate={handleUpdate}
      />

      {/* <Auth
        listPessoas={listPessoas}
      /> */}
    </div>
  );
}

export default App;
