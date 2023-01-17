import React from "react";

function List(props) {
    const { listPessoas } = props;

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
                                    <th scope="row">{data.id}</th>
                                    <td>{data.nome}</td>
                                    <td>{data.idade}</td>
                                    <td>{data.cpf}</td>
                                    <td>{data.endereco}</td>
                                    <td>{data.numero_casa}</td>
                                    <td>{data.complemento}</td>
                                    <td>{data.sexo}</td>
                                    {data.isAdmin == 1 ? <td>Sim</td> : <td>Não</td>}
                                    <td>
                                        <div>
                                            <button className="btn btn-primary">
                                               Edit
                                            </button>
                                            <button className="btn btn-danger">
                                               Del
                                            </button>
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
        <div>
            <h1 className="h1 m-3 text-center">Usuários</h1>
            {handlePessoas()}
        </div>
    );
}

export default List;