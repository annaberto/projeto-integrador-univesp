import { ErrorMessage, Formik, Form, Field } from "formik";
import { validationsLogin, handleLogin } from "../utils";
import { Link } from "react-router-dom";
import "../../assets/styles/forms.css";
import loginImagem from "../../assets/img/loginImagem.svg";

const Login = () => {
  return (
    <div className="container">
      <div className="form-image">
        <img src={loginImagem}></img>
      </div>
      <div className="form-container">
        <div className="form-header-title">
          <h1>Login</h1>{" "}
        </div>
        <div className="inputs-form">
          <Formik
            initialValues={{}}
            onSubmit={handleLogin}
            validationSchema={validationsLogin}
          >
            <Form className="form-elements">
              <div>
                <div>
                  <label htmlFor="email" className="form-label">
                    Insira seu email
                  </label>
                  <Field
                    name="email"
                    className="form-field"
                    placeholder="Email"
                  />
                  <ErrorMessage
                    component="span"
                    name="email"
                    className="form-error"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="form-label">
                    Insira sua senha
                  </label>
                  <Field
                    name="password"
                    className="form-field"
                    placeholder="Senha"
                  />

                  <ErrorMessage
                    component="span"
                    name="password"
                    className="form-error"
                  />
                </div>
              </div>
              <div className="submit-button">
                <button type="submit">
                  <Link to="/"> Login </Link>
                </button>
              </div>
              <div className="span-redirect">
                <span> Ainda não tem uma conta? </span>
                <Link to="/cadastro"> Cadastra-se </Link>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Login;
