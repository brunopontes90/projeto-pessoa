import React from "react";
import "./Auth.css";

function Auth(props) {
    const { listPessoas } = props;

    const handleReturnUser = () => {
        return (
            <div>
                {typeof listPessoas != "undefined" && listPessoas.map((data, index) => {
                    return (
                        <div>
                            {listPessoas.nome && listPessoas.isAdmin == 1 ? "É admin" : "Não é admin"}
                        </div>
                    );
                })}
            </div>
        );
    }

    return (
        <div id="login" className="m-5">
            <div className="container">
                <div id="login-row" className="row justify-content-center align-items-center m-5">
                    <div id="login-column" className="col-md-6">
                        <div id="login-box" className="col-md-12">
                            <form id="login-form" className="form" action="" method="post">
                                <h3 className="text-center">Login</h3>
                                <div className="form-group">
                                    <strong><label for="username">Username:</label></strong>
                                    <input
                                        type="text"
                                        id="username"
                                        name="username"
                                        className="form-control"
                                        placeholder="Nome de Usuario"
                                    />
                                </div>
                                <div className="form-group mt-2">
                                    <strong><label>Password:</label></strong>
                                    <input
                                        type="text"
                                        id="password"
                                        name="password"
                                        placeholder="Senha"
                                        className="form-control"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => alert('Teste')}
                                        className="btn btn-primary btn-lg btn-block mt-4"
                                    >
                                        Entrar
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Auth;