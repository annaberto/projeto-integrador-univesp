import { ErrorMessage, Formik, Form, Field } from "formik";
import { validationsLogin, handleLogin } from "../utils";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="container">
      <h1>Login</h1>
      <Formik
        initialValues={{}}
        onSubmit={handleLogin}
        validationSchema={validationsLogin}
      >
        <Form className="login-form">
          <div className="login-form-group">
            <Field name="email" className="form-field" placeholder="Email" />

            <ErrorMessage
              component="span"
              name="email"
              className="form-error"
            />
          </div>
          <div className="form-group">
            <Field name="password" className="form-field" placeholder="Senha" />

            <ErrorMessage
              component="span"
              name="password"
              className="form-error"
            />
          </div>

          <button className="button" type="submit">
            Login
          </button>
          <div>
            <span> Ainda não tem uma conta? </span>
            <Link to="/cadastro"> Cadastra-se </Link>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
