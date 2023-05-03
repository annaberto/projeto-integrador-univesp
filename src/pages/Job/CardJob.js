import React from "react";
import "./CardJob.css";
import FormDialog from "./dialogForm";

export default function Card(props) {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <FormDialog
        open={open}
        setOpen={setOpen}
        title={props.name}
        description={props.description}
        status={props.status}
        listCard={props.listCard}
        setListCard={props.setListCard}
        id={props.id}
      />
      <div className="card-container" onClick={() => setOpen(true)}>
        <h1 className="card-title">{props.name}</h1>
        <p className="card-id">{props.id}</p>
        <p className="card-cartegory">
          Descrição da vaga de emprego:
          {props.description}
        </p>
        <h3 className="card-cost">Status: {props.status}</h3>
      </div>
    </>
  );
}
