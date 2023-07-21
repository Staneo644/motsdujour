import React from 'react';
import './App.css';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';



function App() {

  const headerElement = document.querySelector('#header');
  const height = headerElement?.clientHeight;

  const navigate = useNavigate();

  const handleClickMoreWord = () => {
    navigate('/plusdemots')
  }

  const handleClickDayWord = () => {
    navigate('/motsdujour')
  }

  const handleClickExercice = () => {
    navigate('/exercice')
  }
  
  return (
    <div style={{alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
      <div style={{ minHeight: 'calc(100vh - 58px)',flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}>
     
        <button className="custom-button" onClick={handleClickDayWord}><h2>Mots du jour</h2></button>
        <button className="custom-button" onClick={handleClickMoreWord}><h2>Plus de mots</h2></button>
        <button className="custom-button" onClick={handleClickExercice}><h2>Exercice</h2></button>

      </div>
    </div>
  );
}

export default App;
