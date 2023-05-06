import React from "react";
import { ErrorMessage, Formik, Form, Field } from "formik";
import { handleRegister } from "../utils";
import { validationsRegister } from "../utils";
import { Link } from "react-router-dom";
import "./student-registration.css";
import registrationImage from "../../assets/img/registrationImage.svg";

const StudentRegistration = () => {
  return (
    <div className="container">
      <div className="login-form-image">
        <img src={registrationImage}></img>
      </div>
      <div className="login-form-group">
        <div className="form-header-title">
          <h1>Cadastro de estudantes </h1>
        </div>
        <div className="inputs-form">
          <Formik
            initialValues={{}}
            onSubmit={handleRegister}
            validationSchema={validationsRegister}
          >
            <Form className="login-form">
              <div>
                <label htmlFor="email" className="form-label">
                  Insira seu nome
                </label>
                <Field name="name" className="form-field" placeholder="Nome" />
              </div>
              <div className="register-form-group">
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
              <div className="form-group">
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

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  confirme sua senha
                </label>
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
              <div className="login-button">
                <button className="button" type="submit">
                  <Link to="/login"> Cadastrar </Link>
                </button>
              </div>
              <div className="span-redirect">
                <span>Já tem uma conta?</span>
                <Link to="/login"> Faça login</Link>
              </div>
              <div className="span-redirect">
                <span> Deseja fazer cadastro como uma empresa parceira? </span>
                <Link to="/cadastro-empresa"> Faça aqui </Link>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default StudentRegistration;
