import React from "react";
import { ErrorMessage, Formik, Form, Field } from "formik";
import { handleRegisterCompany } from "../utils";
import { validationsRegister } from "../utils";
import "../../assets/styles/forms.css";
import { Link } from "react-router-dom";
import companyRegistrationImage from "../../assets/img/companyRegistrationImage.svg";

const CompanyRegistration = () => {
  return (
    <div className="container">
      <div className="form-image">
        <img src={companyRegistrationImage}></img>
      </div>
      <div className="form-container">
        <div className="form-header-title">
          <h1>Cadastro de Empresas </h1>
        </div>

        <div className="inputs-form">
          <Formik
            initialValues={{}}
            onSubmit={handleRegisterCompany}
            validationSchema={validationsRegister}
          >
            <Form className="form-elements">
              <div>
                <label htmlFor="email" className="form-label">
                  Insira o nome da empresa
                </label>
                <Field name="name" className="form-field" placeholder="Nome" />
                <ErrorMessage
                  component="span"
                  name="name"
                  className="form-error"
                />
              </div>
              <div>
                <label htmlFor="email" className="form-label">
                  Cidade
                </label>
                <Field
                  name="city"
                  className="form-field"
                  placeholder="Cidade"
                />
                <ErrorMessage
                  component="span"
                  name="city"
                  className="form-error"
                />
              </div>{" "}
              <div>
                <label htmlFor="email" className="form-label">
                  Telephone
                </label>
                <Field
                  name="telephone"
                  className="form-field"
                  placeholder="Telefone"
                />
                <ErrorMessage
                  component="span"
                  name="telephone"
                  className="form-error"
                />
              </div>
              <div>
                <label htmlFor="email" className="form-label">
                  Email
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
                  Confirme a senha
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
                <button type="submit">
                  <Link to="/">Cadastrar </Link>
                </button>
              </div>
              <div className="span-redirect">
                <span> Já tem uma conta? </span>
                <Link to="/login"> Faça login </Link>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default CompanyRegistration;
