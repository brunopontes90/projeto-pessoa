import React from "react";
import { Link } from "react-router-dom";

function List(props) {
    const { listPessoas, handleDelete, handleInsert, handleUpdate } = props;

    const handlePessoas = () => {
        return (
            <div className="m-2">
                <table className="table">
                    <thead className="table-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nome</th>
                            <th scope="col">Idade</th>
                            <th scope="col">CPF</th>
                            <th scope="col">Endereço</th>
                            <th scope="col">Nº Casa</th>
                            <th scope="col">Complemento</th>
                            <th scope="col">Sexo</th>
                            <th scope="col">Admin</th>
                            <th scope="col">Ação</th>
                        </tr>
                    </thead>
                    {typeof listPessoas !== "undefined" && listPessoas.map((data, index) => {
                        return (
                            <tbody key={index}>
                                <tr>
                                    <th scope="row">{index + 1}</th>
                                    <td>{data.nome}</td>
                                    <td>{data.idade}</td>
                                    <td>{data.cpf}</td>
                                    <td>{data.endereco}</td>
                                    <td>{data.numero_casa}</td>
                                    <td>{data.complemento}</td>
                                    <td>{data.sexo}</td>
                                    {data.isAdmin == 1 ? <td>Sim</td> : <td>Não</td>}
                                    <td>
                                        <div className="d-flex">
                                            <div>
                                                <button
                                                    className="btn btn-primary"
                                                    onClick={() => console.log('Botão editar')}
                                                >
                                                    Edit
                                                </button>
                                            </div>
                                            <div>
                                                <button
                                                    className="btn btn-danger"
                                                    onClick={() => handleDelete()}
                                                >
                                                    Del
                                                </button>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        );
                    })}
                </table>
            </div>
        );
    }
    return (
        <div className="container-fluid">
            <div className="d-flex ml-5 justify-content-center">
                <div className="">
                    <h1 className="h1 m-3">Usuários</h1>
                </div>
                <div className="mt-4 ml-5">
                    <Link
                        to={"/insert"}
                        className="btn btn-success fw-bold"
                    >
                        +
                    </Link>
                </div>
            </div>
            {handlePessoas()}
        </div>
    );
}

export default List;