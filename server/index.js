const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "senha",
  database: "BancoDeVagas",
});

app.use(express.json());
app.use(cors());

app.post("/cadastro", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const name = req.body.name;
  const city = req.body.city;
  const telephone = req.body.telephone;

  db.query("SELECT * FROM users WHERE email = ?", [email], (err, result) => {
    if (!result) {
      res.send({ msg: "Ocorreu um erro ao consultar o banco de dados." });
      return;
    }
    if (err) {
      res.send(err);
    }
    if (result.length == 0) {
      bcrypt.hash(password, saltRounds, (err, hash) => {
        db.query(
          "INSERT INTO users (email, password, name, city, telephone) VALUE (?,?,?,?,?)",
          [email, hash, name, city, telephone],
          (error, response) => {
            if (err) {
              res.send(err);
            }

            res.send({ msg: "Usuário cadastrado com sucesso" });
          }
        );
      });
    } else {
      res.send({ msg: "Email já cadastrado" });
    }
  });
});

app.post("/cadastro-empresa", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const name = req.body.name;
  const city = req.body.city;
  const telephone = req.body.telephone;

  db.query("SELECT * FROM company WHERE email = ?", [email], (err, result) => {
    if (!result) {
      res.send({ msg: "Ocorreu um erro ao consultar o banco de dados." });
      return;
    }
    if (err) {
      res.send(err);
    }
    if (result.length == 0) {
      bcrypt.hash(password, saltRounds, (err, hash) => {
        db.query(
          "INSERT INTO company (email, password, name, city, telephone) VALUE (?,?,?,?,?)",
          [email, hash, name, city, telephone],
          (error, response) => {
            if (err) {
              res.send(err);
            }

            res.send({ msg: "Empresa cadastrado com sucesso" });
          }
        );
      });
    } else {
      res.send({ msg: "Email já cadastrado" });
    }
  });
});

app.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  db.query("SELECT * FROM users WHERE email = ?", [email], (err, result) => {
    if (err) {
      res.send(err);
    }
    if (result.length > 0) {
      bcrypt.compare(password, result[0].password, (error, response) => {
        if (error) {
          res.send(error);
        }
        if (response) {
          res.send({ msg: "Usuário logado" });
        } else {
          res.send({ msg: "Senha incorreta" });
        }
      });
    } else {
      res.send({ msg: "Usuário não registrado!" });
    }
  });
});

app.post("/cadastrar-vaga", (req, res) => {
  const { name } = req.body;
  const { status } = req.body;
  const { description } = req.body;

  let mysql = "INSERT INTO job ( name, status, description) VALUES (?, ?, ?)";
  db.query(mysql, [name, status, description], (err, result) => {
    res.send(result);
  });
});

app.post("/search", (req, res) => {
  const { name } = req.body;
  const { status } = req.body;
  const { description } = req.body;

  let mysql =
    "SELECT * from job WHERE name = ? AND status = ? AND description = ?";
  db.query(mysql, [name, status, description], (err, result) => {
    if (err) res.send(err);
    res.send(result);
  });
});

app.get("/vagas-cadastradas", (req, res) => {
  let mysql = "SELECT * FROM job";
  db.query(mysql, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/empresas", (req, res) => {
  let mysql = "SELECT * FROM company";
  db.query(mysql, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/estudantes", (req, res) => {
  let mysql = "SELECT * FROM users";
  db.query(mysql, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.put("/empresas/editar", (req, res) => {
  const { id } = req.body;
  const { name } = req.body;
  const { email } = req.body;
  const { city } = req.body;
  const { telephone } = req.body;
  let mysql =
    "UPDATE company SET name = ?, email = ?, city = ?,  telephone = ? WHERE id = ?";
  db.query(mysql, [name, email, city, telephone, id], (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

app.put("/estudantes/editar", (req, res) => {
  const { id } = req.body;
  const { name } = req.body;
  const { email } = req.body;
  const { city } = req.body;
  const { telephone } = req.body;
  let mysql =
    "UPDATE company SET name = ?, email = ?, city = ?,  telephone = ? WHERE id = ?";
  db.query(mysql, [name, email, city, telephone, id], (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

app.put("/editar", (req, res) => {
  const { id } = req.body;
  const { name } = req.body;
  const { status } = req.body;
  const { description } = req.body;
  let mysql = "UPDATE job SET name = ?, cost = ?, category = ? WHERE id = ?";
  db.query(mysql, [name, status, description, id], (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

app.delete("/delete/:id", (req, res) => {
  const { id } = req.params;
  let mysql = "DELETE FROM job WHERE id = ?";
  db.query(mysql, id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(3001, () => {
  console.log("rodando na porta 3001");
});
