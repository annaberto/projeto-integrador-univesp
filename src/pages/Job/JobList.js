import React, { useEffect, useState } from "react";
import "./JobForm.css";
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
    <div className="app-container">
      <div>
        <Header />
      </div>
      <div className="register-container">
        <h1 className="register-title">Vagadas de empregos disponíveis </h1>
        <div>
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
