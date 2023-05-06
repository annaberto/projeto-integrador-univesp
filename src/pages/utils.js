import * as yup from "yup";
import Axios from "axios";

export const handleLogin = (values) => {
  Axios.post("http://localhost:3001/login", {
    email: values.email,
    password: values.password,
  }).then((response) => {
    alert(response.data.msg);
  });
};

export const handleRegister = (values) => {
  Axios.post("http://localhost:3001/cadastro", {
    email: values.email,
    password: values.password,
    name: values.name,
    city: values.city,
    telephone: values.telephone,
  }).then((response) => {
    alert(response.data.msg);
    console.log(response);
  });
};

export const handleRegisterCompany = (values) => {
  Axios.post("http://localhost:3001/cadastro-empresa", {
    email: values.email,
    password: values.password,
    name: values.name,
    city: values.city,
    telephone: values.telephone,
  }).then((response) => {
    alert(response.data.msg);
    console.log(response);
  });
};

export const validationsLogin = yup.object().shape({
  email: yup.string().email("email inválido").required("O email é obrigatório"),
  password: yup
    .string()
    .min(8, "A senha deve ter pelo menos 8 caracteres")
    .required("A senha é obrigatória"),
});

export const validationsRegister = yup.object().shape({
  email: yup.string().email("email inválido").required("O email é obrigatório"),
  name: yup.string().label("name").required("O nome é obrigatório"),
  name: yup.string().label("city").required("A cidade é obrigatória"),
  name: yup.string().label("telephone").required("O telefone é obrigatório"),
  password: yup
    .string()
    .min(8, "A senha deve ter pelo menos 8 caracteres")
    .required("A senha é obrigatória"),
  confirmation: yup
    .string()
    .oneOf([yup.ref("password"), null], "As senhas são diferentes")
    .required("A confirmação da senha é obrigatória"),
});
