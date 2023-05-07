import React, { useState, useEffect } from "react";
import Axios from "axios";
import Header from "../../components/Header";
import "../../assets/styles/list-cards.css";
import CardStudent from "./CardStudent";

const StudentList = () => {
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
    <div className="list-container">
      <div>
        <Header />
      </div>
      <div className="cards-container">
        <div className="section-title">
          <h1>Estudantes cadastrados</h1>
        </div>
        <div className="list-cards">
          {listCard.map((val) => (
            <CardStudent
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

export default StudentList;
