import React from "react";
import Header from "../../components/Header";

const Home = () => {
  return (
    <div className="container">
      <div>
        <Header />
      </div>
      <div>
        <h1>Bem vindo ao Banco de Vagas do Favela Summit</h1>
      </div>
      <div>
        <p>
          A proposta deste projeto de banco de vagas de emprego é reunir as
          vagas de emprego na área de tecnologia para parceiros do Favela
          Summit, ligando assim as empresas aos estudantes. Além da maior
          facilidade em conseguir pessoas qualificadas, as empresas receberiam
          incentivos para contratação de pessoas iniciantes e preenchimento da
          vaga de forma simples e eficiente.
        </p>
        <p>
          Se Você é estudante, se cadastre e veja nossas vagas, se você
          representa uma empresa, cadastre já sua vaga com nosco!
        </p>
      </div>
    </div>
  );
};
export default Home;
