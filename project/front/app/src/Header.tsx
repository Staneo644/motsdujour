import './Header.css';
import React, { useState } from 'react';
import {Outlet} from 'react-router-dom';
import { Button, Dropdown, ListGroup, ListGroupItem } from 'react-bootstrap';
import { FiSettings } from 'react-icons/fi';
import {useNavigate} from "react-router-dom";
//import bt  from 'react-bootstrap';
import DropdownButton from 'react-bootstrap';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';
import { DropdownMenuProps } from 'react-bootstrap/esm/DropdownMenu';
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle';

const Header = () => {
    const history = useNavigate();
    const [isList, setIsList] = useState(false);

  const handleTitleClick = () => {
    history('/');
  };

  const setOptionVisible = () => {
    setIsList(!isList);
  }

  return (
    <>
    <header style={{display: 'flex', zIndex: 1, position: 'relative'}}>
   <div
     
        style={{
          backgroundColor: 'white',
          top: 0,
          left: 0,
          right: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
        }}>

       <button
           style={{
               border: 'none',
               backgroundColor: 'transparent',
               cursor: 'pointer',
               transform: 'translate(20%, 0)'

           }}
           onClick={handleTitleClick}>
           <h1 style={{textAlign: 'center'}}>
                Polymathe
            </h1>
       </button>
        </div>
       <button
         style={{
           border: 'none',
           backgroundColor: 'transparent',
           marginLeft: '20px',
           transform: 'translate(-10%, 0)',
           cursor: 'pointer',
           right: '10px',
           top: '0px',

         }}
        onClick={setOptionVisible}>
      
      <FiSettings size={32} />
    </button>
        



  


  
      

        </header>
         <div>

           <main className='main'>
            {isList &&
          <ListGroup style={{position: 'absolute', right: '0'}}>
            <ListGroupItem action variant="dark">
              <h4>
                inscrire
                </h4>
            </ListGroupItem>
            <ListGroupItem action variant="dark">
              <h4>
                ajouter/modifier
              </h4>
            </ListGroupItem>
            <ListGroupItem action variant="dark">
              <h4>
                contact
              </h4>
            </ListGroupItem>
          </ListGroup>
          }
               <Outlet></Outlet>
           </main>
          
         </div>
        </>

 );
        }    

        export default Header;