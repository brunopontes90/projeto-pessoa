import "./Create.css";
import React from "react";
import { Link } from "react-router-dom";

function Create() {
    return (
        <div id="create" className="m-5">
            <form className="container" id="create-column">
                <h1 className="text-center" id="title">Registrar Usuário</h1>
                <div className="row justify-content-center m-5">
                    <div className="form-group">
                        <strong><label>Nome Completo</label></strong>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Nome Completo"
                            className="form-control"
                            required={true}
                        />
                    </div>
                    <div className="form-group">
                        <strong><label>Email:</label></strong>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            placeholder="Email"
                            className="form-control"
                            required={true}
                        />
                    </div>
                    <div className="form-group">
                        <strong><label>Idade:</label></strong>
                        <input
                            type="number"
                            id="idade"
                            name="idade"
                            placeholder="Digite sua idade"
                            className="form-control"
                            required={true}
                        />
                    </div>
                    <div className="form-group">
                        <strong><label>CPF:</label></strong>
                        <input
                            type="number"
                            id="cpf"
                            name="cpf"
                            placeholder="Digite seu cpf"
                            className="form-control"
                            required={true}
                        />
                    </div>
                    <div className="form-group">
                        <strong><label>Endereço:</label></strong>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            placeholder="Digite seu endereço"
                            className="form-control"
                            required={true}
                        />
                    </div>
                    <div className="form-group">
                        <strong><label>Nº residência:</label></strong>
                        <input
                            type="number"
                            id="number"
                            name="number"
                            placeholder="Numero de sua residência"
                            className="form-control"
                            required={true}
                        />
                    </div>
                    <div className="form-group">
                        <strong><label>Complemento:</label></strong>
                        <input
                            type="text"
                            id="complemento"
                            name="complemento"
                            placeholder="Complemento da residencia"
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <strong><label>Sexo:</label></strong>
                        <div>
                            <select name="sexo" id="sexo">
                                <option disabled={'true'}>Selecione</option>
                                <option value={'M'}>M</option>
                                <option value={'F'}>F</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group mt-2">
                        <strong><label>Senha:</label></strong>
                        <input
                            id="password"
                            type="number"
                            name="password"
                            placeholder="Digite uma senha numerica"
                            className="form-control"
                            required={true}
                        />
                    </div>
                    <div className="form-group mt-2">
                        <strong><label>Admin:</label></strong>
                        <div>
                            <select name="admin" id="admin">
                                <option disabled={'true'}>Selecione</option>
                                <option value={1}>Sim</option>
                                <option value={2}>Não</option>
                            </select>
                        </div>
                    </div>
                    <div className="d-flex justify-content-around mt-3">
                        <div>
                            <button
                                type="button"
                                onClick={() => alert('Dados enviados')}
                                className="btn btn-primary btn-lg btn-block"
                            >
                                Entrar
                            </button>
                        </div>
                        <div>
                            <Link
                                to={'/'}
                                className="btn btn-danger btn-lg btn-block"
                            >
                                Cancelar
                            </Link>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Create;