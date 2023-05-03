import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const headerStyle = {
    backgroundColor: "#0080ff",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    padding: "10px",
    display: "flex",
    justifyContent: "flex-start",
    color: "#fff",
    textAlign: "center",
    transition: "font-size 0.3s ease-in-out",
    fontSize: "20px",
  };

  const linkStyle = {
    color: "#fff",
    textDecoration: "none",
    margin: "0 10px",
  };

  const ulStyle = {
    display: "flex",
    listStyle: "none",
    margin: 0,
    padding: 0,
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
            <Link to="/vagas" style={linkStyle}>
              Vagas de emprego
            </Link>
          </li>
          <li>
            <Link to="/cadastrar" style={linkStyle}>
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
