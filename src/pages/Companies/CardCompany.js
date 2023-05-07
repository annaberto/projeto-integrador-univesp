import React from "react";
import FormDialog from "./dialogForm";
import "../../assets/styles/cards.css";

export default function CardCompany(props) {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <FormDialog
        open={open}
        setOpen={setOpen}
        title={props.name}
        listCard={props.listCard}
        setListCard={props.setListCard}
        id={props.id}
        name={props.name}
        email={props.email}
        city={props.city}
        telephone={props.telephone}
      />
      <div className="card-container" onClick={() => setOpen(true)}>
        <h1 className="card-title">{props.name}</h1>
        <p className="card-id">{props.id}</p>
        <div className="card-content">
          <p>Email: {props.email}</p>
          <p>Telefone: {props.telephone}</p>
          <p>Cidade: {props.city}</p>
        </div>
      </div>
    </>
  );
}
