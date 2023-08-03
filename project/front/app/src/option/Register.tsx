import React, { useState } from 'react';
import {
MDBContainer,
MDBInput,
MDBCheckbox,
MDBCard
}
from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';

export function Register() {
    const navigate = useNavigate();
    const [error, setError] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
        const response = await fetch('http://localhost:3000/auth/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });
  
        if (response.ok) {
          console.log('Inscription réussie !');
          setError(false);
          navigate('/connexion');
        } else {
          console.log('Échec de l\'inscription');
          setError(true);
        }
      } catch (error) {
        console.error('Erreur lors de l\'inscription :', error);
      }
  };

    return (
        <MDBCard style={{height:'70%', width:'70%', overflow: 'scroll'}}>

        <MDBContainer className="p-1 my-5 d-flex flex-column" style={{minWidth: '200px', width: '70%', maxWidth: '500px', marginTop: '-100px'}}>
    
          <MDBInput wrapperClass='mb-4' label='Adresse courriel' id='form1' type='email' onChange={(e) => setEmail(e.target.value)}/>
          <MDBInput wrapperClass='mb-4' label='Mot-de-passe' id='form2' type='password' onChange={(e) => setPassword(e.target.value)}/>
    
          <div className="d-flex justify-content-between mx-3 mb-4">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label="S'inscrire à la newsletter" />
          </div>
          <div style={{color: 'red'}}>
            {error && <>
                Adresse courriel déjà utilisée
            </>
                }
          </div>
            <p></p>
          <button style={{backgroundColor: '#4b91ff'}} className="mb-4" onClick={handleLogin}>Inscription</button>
          <p></p>
         
        </MDBContainer>
        </MDBCard>
      );
}
