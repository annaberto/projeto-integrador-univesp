import React, { useEffect, useState } from "react";
import "./JobForm.css";
import Axios from "axios";
import CardJob from "./CardJob";
import Header from "../../components/Header";

const JobForm = () => {
  const [values, setValues] = useState();
  const [listCard, setListCard] = useState([]);
  console.log(listCard);

  const handleRegisterJob = () => {
    Axios.post("http://localhost:3001/cadastrar-vaga", {
      name: values.name,
      status: values.status,
      description: values.description,
    }).then(() => {
      Axios.post("http://localhost:3001/search", {
        name: values.name,
        status: values.status,
        description: values.description,
      }).then((response) => {
        setListCard([
          ...listCard,
          {
            id: response.data[0].id,
            name: values.name,
            status: values.status,
            description: values.description,
          },
        ]);
      });
    });
  };

  useEffect(() => {
    Axios.get("http://localhost:3001/cadastrar-vaga").then((response) => {
      setListCard(response.data);
    });
  }, []);

  const handleaddValues = (value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [value.target.name]: value.target.value,
    }));
  };

  return (
    <div className="app-container">
      <div>
        <Header />
      </div>
      <div className="register-container">
        <h1 className="register-title">Cadastrar vaga de emprego</h1>

        <input
          type="text"
          name="name"
          placeholder="Nome da empresa"
          className="register-input"
          onChange={handleaddValues}
        />
        <input
          type="text"
          placeholder="Status da vaga"
          name="status"
          className="register-input"
          onChange={handleaddValues}
        />
        <textarea
          type="text"
          placeholder="Descriçao da vaga"
          name="description"
          className="register-input"
          onChange={handleaddValues}
        />

        <button onClick={handleRegisterJob} className="register-button">
          Cadastrar
        </button>
      </div>

      {listCard.map((val) => (
        <CardJob
          listCard={listCard}
          setListCard={setListCard}
          key={val.id}
          id={val.id}
          name={val.name}
          status={val.status}
          description={val.description}
        />
      ))}
    </div>
  );
};
export default JobForm;
