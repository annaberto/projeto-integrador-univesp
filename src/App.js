import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import StudentRegistration from "./pages/Registration/StudentRegistration";
import CompanyRegistration from "./pages/Registration/CompanyRegistration";
import JobForm from "./pages/Job/JobForm";
import Home from "./pages/Home/Home";
import Companies from "./pages/Companies/CompaniesList";
import JobList from "./pages/Job/JobList";
import Student from "./pages/Students/StudentList";

function App() {
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<StudentRegistration />} />
          <Route path="/cadastro-empresa" element={<CompanyRegistration />} />
          <Route path="/cadastrar-vaga" element={<JobForm />} />
          <Route path="/vagas-cadastradas" element={<JobList />} />
          <Route path="/empresas" element={<Companies />} />
          <Route path="/estudantes" element={<Student />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
