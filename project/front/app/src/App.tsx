import React from 'react';
import './App.css';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';



function App() {

  const navigate = useNavigate();

  const handleClickMoreWord = () => {
    navigate('/plusdemots')
  }
  
  return (
    <div style={{ minHeight: 'calc(100vh - 69px)', display: 'flex', flexDirection: 'column' }}>
      <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div></div>
        <button className="custom-button btn-block"><h2>Mots du jour</h2></button>
        <Button className="custom-button btn-block" onClick={handleClickMoreWord}><h2>Plus de mots</h2></Button>
        <Button className="custom-button btn-block"><h2>Exercice</h2></Button>
        <div></div>
      </div>
    </div>
  );
}

export default App;
