import React, { useState, useEffect } from "react";
import Axios from "axios";
import CardCompany from "./CardStudent";
import Header from "../../components/Header";

const Companies = () => {
  const [listCard, setListCard] = useState([]);

  useEffect(() => {
    console.log(listCard);
  });

  useEffect(() => {
    Axios.get("http://localhost:3001/estudantes").then((response) => {
      setListCard(response.data);
    });
  }, []);

  return (
    <div className="container">
      <div>
        <Header />
      </div>
      <div>
        <h1>Estudantes cadastrados</h1>
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
