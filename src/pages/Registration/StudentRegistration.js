import React from "react";
import { ErrorMessage, Formik, Form, Field } from "formik";
import { handleRegister } from "../utils";
import { validationsRegister } from "../utils";
import { Link } from "react-router-dom";
import "../../assets/styles/forms.css";
import studentRegistrationImage from "../../assets/img/studentRegistrationImage.svg";

const StudentRegistration = () => {
  return (
    <div className="container">
      <div className="form-image">
        <img src={studentRegistrationImage}></img>
      </div>
      <div className="form-container">
        <div className="form-header-title">
          <h1>Cadastro de estudantes </h1>
        </div>

        <div className="inputs-form">
          <Formik
            initialValues={{}}
            onSubmit={handleRegister}
            validationSchema={validationsRegister}
          >
            <Form className="form-elements">
              <div>
                <label htmlFor="email" className="form-label">
                  Insira seu nome
                </label>
                <Field name="name" className="form-field" placeholder="Nome" />
              </div>
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

              <div>
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
              <div className="submit-button">
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
