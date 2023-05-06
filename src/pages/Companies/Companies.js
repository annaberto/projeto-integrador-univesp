import React, { useState, useEffect } from "react";
import Axios from "axios";
import CardCompany from "./CardCompany";
import Header from "../../components/Header";

const Companies = () => {
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
    <div className="container">
      <div>
        <Header />
      </div>
      <div>
        <h1>Empresas cadastradas</h1>
        <ul>
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
        </ul>
      </div>
    </div>
  );
};

export default Companies;
