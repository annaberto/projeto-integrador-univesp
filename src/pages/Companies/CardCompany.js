import React from "react";
// import "./CardJob.css";
import FormDialog from "./dialogForm";

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
      />
      <div className="card-container" onClick={() => setOpen(true)}>
        <h1 className="card-title">{props.name}</h1>
        <p className="card-id">{props.id}</p>
        <p className="card-cartegory">
          Nome:
          {props.name}
        </p>
        <h3 className="card-cost">Email: {props.email}</h3>
        <h3 className="card-cost">Id: {props.id}</h3>
      </div>
    </>
  );
}
