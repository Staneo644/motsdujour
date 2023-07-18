import './Header.css';
import React from 'react';
import {Outlet} from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { FiSettings } from 'react-icons/fi';
import {useNavigate} from "react-router-dom";
//import bt  from 'react-bootstrap';
import DropdownButton from 'react-bootstrap';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';
import { DropdownMenuProps } from 'react-bootstrap/esm/DropdownMenu';

const Header = () => {
    const history = useNavigate();

  const handleTitleClick = () => {
    history('/');
  };

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
               transform: 'translate(17%, 0)'

           }}
           onClick={handleTitleClick}>
           <h1 style={{textAlign: 'center'}}>
                Polymathe
            </h1>
       </button>
        </div>
        <div className="dropdown">
        <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
       >
      
<FiSettings size={32} />
    </button>
    </button>

  
  <ul className="dropdown-menu dropdown-menu-end">
    <li><Button className="dropdown-item" type="button">Action</Button></li>
    <li><Button className="dropdown-item" type="button">Another action</Button></li>
    <li><Button className="dropdown-item" type="button">Something else here</Button></li>
  </ul>
</div>
        <a className="dropdown-toggle no-arrow" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  
</a>

        </header>
         <div>
           <main className='main'>
               <Outlet></Outlet>
           </main>
          
         </div>
        </>

 );
        }    
