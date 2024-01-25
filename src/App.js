import './App.css';
import LoginForm  from './components/Login';
import Registerform  from './components/Register';
import HomePage  from './components/Home';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Registerpharma from './components/PharmaRegister';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Navigate replace to = "/login"/>}/>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<Registerform />} />
        <Route path="/home" element={<HomePage/>} />
        <Route path="/register-pharma" element={<Registerpharma/>} />
      </Routes>
    </Router>
  );
}

export default App;