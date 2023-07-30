import React, { useState } from 'react';
import {
    MDBContainer,
    MDBInput,
    MDBCheckbox,
    MDBBtn,
    MDBIcon,
    MDBCard
  }
  from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';

function Login () {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    console.log(email, password);
    try {
      const response = await fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('accessToken', data.access_token);
        window.location.href = '/page-privee';
      } else {
        console.log('Échec de la connexion');
      }
    } catch (error) {
      console.error('Erreur lors de la connexion:', error);
    }
  };

    return (
        <MDBCard style={{height:'70%', width:'70%', overflow: 'scroll'}}>

        <MDBContainer className="p-1 my-5 d-flex flex-column" style={{minWidth: '200px', width: '70%', maxWidth: '500px', marginTop: '-100px'}}>
    
          <MDBInput wrapperClass='mb-4' label='Adresse courriel' id='form1' type='email' onChange={(e) => setEmail(e.target.value)}/>
          <MDBInput wrapperClass='mb-4' label='Mot-de-passe' id='form2' type='password' onChange={(e) => setPassword(e.target.value)}/>
    
          <div className="d-flex justify-content-between mx-3 mb-4">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Se souvenir de moi' />
          </div>
            <a href="!#">Mot-de-passe oublié ?</a>
            <p></p>
          <button style={{backgroundColor: '#4b91ff'}} className="mb-4" onClick={handleLogin}>connexion</button>
          <p></p>
          Vous n'avez pas de compte ?
          <button style={{backgroundColor: '#4b91ff'}} className="mb-4" onClick={() => {console.log("s")}}>s'inscrire</button>
    
        </MDBContainer>
        </MDBCard>
      );
}
//     <Row>
//         <Col>
//             <FormLabel for="inputPassword6">
//             </FormLabel>
//         </Col>
//   <Col>
//         <FormControl type="password" id="inputPassword6" aria-labelledby="passwordHelpInline"/>    
//   </Col>
//   <Col>
//   <FormText id="passwordHelpInline">
//       Must be 8-20 characters long.
//   </FormText>
//   </Col>
//     </Row>

export default Login;