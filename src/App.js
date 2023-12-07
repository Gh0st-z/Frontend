import './App.css';
import LoginForm  from './components/Login';
import Registerform  from './components/Register';
import {BrowserRouter as Router, Switch, Route, Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <LoginForm/>
      <Routes>
        <Route path="/register" element={<Registerform />} />
      </Routes>
    </Router>
  );
}

export default App;