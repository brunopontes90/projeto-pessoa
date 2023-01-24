import React from "react";
import "./Auth.css";

function Auth(props) {
    const { listPessoas } = props;

    const isAdmin = () => {
        if (listPessoas.email && listPessoas.senha && listPessoas.isAdmin == 1) {
            //alert('Deu certo');
        } else {
            //alert('Não deu certo');
        }
    }
    return (
        <div id="login" className="m-5">
            <div className="container">
                <div id="login-row" className="row justify-content-center m-5">
                    <div id="login-column" className="col-md-6">
                        <div id="login-box" className="col-md-12">
                            <form id="login-form" className="form" action="../List/List" method="post">
                                <h3 className="text-center">Login</h3>
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
                                <div className="form-group mt-2">
                                    <strong><label>Password:</label></strong>
                                    <input
                                        id="password"
                                        type="password"
                                        name="password"
                                        placeholder="Senha"
                                        className="form-control"
                                        required={true}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => isAdmin()}
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