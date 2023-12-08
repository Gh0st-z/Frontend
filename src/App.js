import './App.css';
import LoginForm  from './components/Login';
import Registerform  from './components/Register';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Navigate replace to = "/login"/>}/>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<Registerform />} />
      </Routes>
    </Router>
  );
}

export default App;