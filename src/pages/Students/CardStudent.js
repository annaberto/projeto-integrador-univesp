import React from "react";
// import "./CardJob.css";
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
      />
      <div className="card-container" onClick={() => setOpen(true)}>
        <h1 className="card-title">{props.name}</h1>
        <p className="card-id">{props.id}</p>
        <p>Email: {props.email}</p>
        <p>Telefone: {props.telephone}</p>
        <p>Cidade: {props.city}</p>
      </div>
    </>
  );
};
export default CardStudent;
