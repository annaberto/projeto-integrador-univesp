import React from "react";
import { ErrorMessage, Formik, Form, Field } from "formik";
import { handleRegisterCompany } from "../utils";
import { validationsRegister } from "../utils";
import { Link } from "react-router-dom";

const CompanyRegistration = () => {
  return (
    <div className="container">
      <h1>Cadastro de Empresas </h1>
      <Formik
        initialValues={{}}
        onSubmit={handleRegisterCompany}
        validationSchema={validationsRegister}
      >
        <Form className="register-form">
          <div>
            <Field name="name" className="form-field" placeholder="Nome" />
            <ErrorMessage component="span" name="name" className="form-error" />
          </div>
          <div>
            <Field name="city" className="form-field" placeholder="Cidade" />
            <ErrorMessage component="span" name="city" className="form-error" />
          </div>{" "}
          <div>
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
            <span> Já tem uma conta? </span>
            <Link to="/login"> Faça login </Link>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default CompanyRegistration;
