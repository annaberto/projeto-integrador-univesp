import React from "react";
import "../../assets/styles/cards.css";
import FormDialog from "./dialogForm";

const CardStudent = (props) => {
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
};
export default CardStudent;
