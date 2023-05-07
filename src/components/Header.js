import React from "react";
import { Link } from "react-router-dom";
// import favelaSummitLogo from "../assets/img/favelaSummitLogo.svg";

const Header = () => {
  const headerStyle = {
    backgroundColor: "#281de4",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    padding: "10px",
    display: "flex",
    color: "#fff",
    textAlign: "center",
    transition: "font-size 0.3s ease-in-out",
    fontSize: "20px",
    alignItems: "center",
  };

  const linkStyle = {
    color: "#fff",
    textDecoration: "none",
    margin: "0 10px",
    fontFamily: "Roboto",
    transition: "color 0.3s ease-in-out",
  };

  linkStyle["&:hover"] = {
    color: "#f1c40f",
  };

  const ulStyle = {
    display: "flex",
    alignContent: "center",
    listStyle: "none",
    padding: 0,
    flex: 1,
    justifyContent: "center",
  };

  return (
    <header style={headerStyle}>
      <nav>
        <ul style={ulStyle}>
          <li>
            <Link to="/" style={linkStyle}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/vagas-cadastradas" style={linkStyle}>
              Vagas de emprego
            </Link>
          </li>
          <li>
            <Link to="/cadastrar-vaga" style={linkStyle}>
              Cadastrar vaga de emprego
            </Link>
          </li>
          <li>
            <Link to="/estudantes" style={linkStyle}>
              Estudantes cadastrados
            </Link>
          </li>
          <li>
            <Link to="/empresas" style={linkStyle}>
              Empresas cadastradas
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
