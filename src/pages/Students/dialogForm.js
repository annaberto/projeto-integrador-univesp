import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Axios from "axios";

export default function FormDialog(props) {
  const [editValues, setEditValues] = useState({
    id: props.id,
    name: props.title,
    email: props.email,
    city: props.cidade,
    telephone: props.telephone,
  });

  const handleChangeValues = (values) => {
    setEditValues((prevValues) => ({
      ...prevValues,
      [values.target.id]: values.target.value,
    }));
  };

  const handleClose = () => {
    props.setOpen(false);
  };

  const handleEditStudent = () => {
    Axios.put("http://localhost:3001/estudantes/editar", {
      id: editValues.id,
      name: editValues.name,
      email: editValues.email,
      city: editValues.cidade,
      telephone: editValues.telephone,
    }).then(() => {
      props.setListCard(
        props.listCard.map((value) => {
          return value.id === editValues.id
            ? {
                id: editValues.id,
                name: editValues.name,
                email: editValues.email,
                city: editValues.cidade,
                telephone: editValues.telephone,
              }
            : value;
        })
      );
    });
    handleClose();
  };

  const handleDeleteStudent = () => {
    Axios.delete(
      `http://localhost:3001/estudantes/delete/${editValues.id}`
    ).then(() => {
      props.setListCard(
        props.listCard.filter((value) => {
          return value.id !== editValues.id;
        })
      );
    });
    handleClose();
  };

  return (
    <div>
      <Dialog
        open={props.open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Editar</DialogTitle>
        <DialogContent>
          <TextField
            disabled
            margin="dense"
            id="id"
            label="id"
            defaultValue={props.id}
            type="text"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Nome"
            defaultValue={props.title}
            type="text"
            onChange={handleChangeValues}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email"
            defaultValue={props.email}
            type="text"
            onChange={handleChangeValues}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="city"
            label="Cidade"
            defaultValue={props.city}
            type="text"
            onChange={handleChangeValues}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="telephone"
            label="Telefone"
            defaultValue={props.telephone}
            type="text"
            onChange={handleChangeValues}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button color="primary" onClick={() => handleDeleteStudent()}>
            Excluir
          </Button>
          <Button color="primary" onClick={() => handleEditStudent()}>
            Salvar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
