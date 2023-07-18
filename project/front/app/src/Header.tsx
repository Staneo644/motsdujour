import './Header.css';
import { useEffect, useRef, useState } from 'react';
import {Outlet} from 'react-router-dom';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { FiSettings } from 'react-icons/fi';
import {useNavigate} from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [isList, setIsList] = useState(false);

  const handleTitleClick = () => {
    navigate('/');
  };

  const contactClick = () => {
    navigate('/contact');
  }

  const modificationClick = () => {
    navigate('/modifications');
  }

  const inscriptionClick = () => {
    navigate('/inscription');
  }

  const setOptionVisible = () => {
    setIsList(!isList);
  }

  const buttonRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) 
      setIsList(false)
    };

    document.addEventListener('mouseup', handleClickOutside);

    return () => {
      document.removeEventListener('mouseup', handleClickOutside);
    };
  }, []);

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
               transform: 'translate(16%, 0)'
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
          <main className='main'>
          {isList &&
          <ListGroup ref={buttonRef} style={{position: 'absolute', right: '0'}}>
            <ListGroupItem action variant="dark" onClick={inscriptionClick}>
              <h4>
                inscrire
                </h4>
            </ListGroupItem>
            <ListGroupItem action variant="dark" onClick={modificationClick}>
              <h4>
                ajouter/modifier
              </h4>
            </ListGroupItem>
            <ListGroupItem action variant="dark" onClick={contactClick}>
              <h4>
                contact
              </h4>
            </ListGroupItem>
          </ListGroup>
          }
          <Outlet></Outlet>
          </main>
    </>
  );
}

export default Header;