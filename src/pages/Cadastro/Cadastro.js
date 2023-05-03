import React from "react";
import { ErrorMessage, Formik, Form, Field } from "formik";
import { handleRegister } from "../utils";
import { validationsRegister } from "../utils";
import { Link } from "react-router-dom";

const Cadastro = () => {
  return (
    <div className="container">
      <h1>Cadastro</h1>
      <Formik
        initialValues={{}}
        onSubmit={handleRegister}
        validationSchema={validationsRegister}
      >
        <Form className="register-form">
          <div className="register-form-group">
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

          <div className="form-group">
            <Field
              name="confirmation"
              className="form-field"
              placeholder="Senha"
            />

            <ErrorMessage
              component="span"
              name="confirmation"
              className="form-error"
            />
          </div>

          <button className="button" type="submit">
            Cadastrar
          </button>
          <div>
            <span> Já tem uma conta? Faça login </span>
            <Link to="/login"> Cadastra-se </Link>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default Cadastro;
