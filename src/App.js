import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import { token } from './firebase';
import { onMessageListener } from './firebase';
import Button from './components/Timer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div className="App">
        <Button />
    </div>
  );
}

export default App;