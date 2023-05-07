import React, { useEffect, useState } from "react";
import "../../assets/styles/list-cards.css";
import Axios from "axios";
import CardJob from "./CardJob";
import Header from "../../components/Header";

const JobList = () => {
  const [listCard, setListCard] = useState([]);
  console.log(listCard);

  useEffect(() => {
    Axios.get("http://localhost:3001/vagas-cadastradas").then((response) => {
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
          <h1>Vagas de empregos disponíveis </h1>
        </div>
        <div className="list-cards">
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
      </div>
    </div>
  );
};
export default JobList;
