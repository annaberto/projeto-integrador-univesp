import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Cadastro from "./pages/Cadastro/Cadastro";
import JobForm from "./pages/Job/JobForm";
import Home from "./pages/Home/Home";
import Companies from "./pages/Companies/Companies";

function App() {
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/cadastrar-vaga" element={<JobForm />} />
          <Route path="/vagas-cadastradas" element={<JobForm />} />
          <Route path="/empresas" element={<Companies />} />
          <Route path="/estudantes" element={<Companies />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
