import React, { useState, useEffect } from "react";
import Axios from "axios";
import CardCompany from "./CardCompany";
import Header from "../../components/Header";
import "../../assets/styles/list-cards.css";

const CompaniesList = () => {
  const [empresas, setEmpresas] = useState([]);
  const [values, setValues] = useState();
  const [listCard, setListCard] = useState([]);

  useEffect(() => {
    console.log(listCard);

    const handleRegisterJob = () => {
      Axios.post("http://localhost:3001/empresas", {
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
  });

  useEffect(() => {
    Axios.get("http://localhost:3001/empresas").then((response) => {
      setListCard(response.data);
    });
  }, []);

  return (
    <div className="list-container-a">
      <div>
        <Header />
      </div>
      <div className="cards-container">
        <div className="section-title">
          <h1>Estudantes cadastrados</h1>
        </div>
        <div className="list-cards">
          {listCard.map((val) => (
            <CardCompany
              listCard={listCard}
              setListCard={setListCard}
              key={val.id}
              id={val.id}
              name={val.name}
              email={val.email}
              city={val.city}
              telephone={val.telephone}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompaniesList;
