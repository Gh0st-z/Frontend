import './App.css';
import LoginForm  from './components/Login';
import Registerform  from './components/Register';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/register" element={<Registerform />} />
      </Routes>
    </Router>
  );
}

export default App;