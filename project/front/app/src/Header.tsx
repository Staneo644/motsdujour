import './Header.css';
import { useEffect, useRef, useState } from 'react';
import {Outlet} from 'react-router-dom';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { FiArrowLeft, FiSettings } from 'react-icons/fi';
import {useNavigate} from "react-router-dom";

function getStorageValue(key:string, defaultValue:any) {
  const saved = localStorage.getItem(key);
  if (saved){

    //const initial = JSON.parse(saved);
    return saved;
  }
  return defaultValue;
}

export const useLocalStorage = (key:string, defaultValue:any) => {
  const [value, setValue] = useState(() => {
    return getStorageValue(key, defaultValue);
  });
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
    console.log(value);
  }, [key, value]);

  return [value, setValue];
};

const Header = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const [headerHeight, setHeaderHeight] = useState(0);
  const [isList, setIsList] = useState(false);
  const buttonRef = useRef<HTMLDivElement>(null);
  const optionRef = useRef<HTMLButtonElement>(null);
  const [isConnected, setIsConnected] = useLocalStorage('accessToken', null);

  const handleTitleClick = () => {
    navigate('/');
  };

  const contactClick = () => {
    navigate('/contact');
    setIsList(false);
  }

  const modificationClick = () => {
    navigate('/modifications');
    setIsList(false);
  }

  const profilClick = () => {
    navigate('/profil');
    setIsList(false);
  }

  const logoutClick = () => {
    //localStorage.removeItem('accessToken');
    setIsConnected(null)
    //isConnected = false;
    setIsList(false);
  }

  const inscriptionClick = () => {
    navigate('/connexion');
    setIsList(false);
  }

  const setOptionVisible = () => {
    setIsList(!isList);
  }
  /*useEffect(() => {
    const handleStorageChange = (event:any) => {
    
      
          if (localStorage.getItem('accessToken')){
            setIsConnected(true);
          }
          else {
            setIsConnected(false);
          }
   
      
    };

    window.addEventListener('storage', handleStorageChange);

    // Clean up the event listener when the component unmounts.
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, ['accessToken']);*/
  useEffect(() => {

    const handleClickOutside = (event: MouseEvent) => {
      if (
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node) &&
        optionRef.current &&
        !optionRef.current.contains(event.target as Node)

      ) 
      setIsList(false)
    };

      const headerElement = headerRef.current;
      if (headerElement) {

        const height = headerElement.clientHeight;
        setHeaderHeight(height);
        console.log(height);
      }
    

    document.addEventListener('mouseup', handleClickOutside);

    return () => {
      document.removeEventListener('mouseup', handleClickOutside);
    };
  }, []);

  return (
    <div style={{height: '100%'}}>
    <header ref={headerRef} style={{display: 'flex', justifyContent: 'center', position: 'relative', height: '58px'}}>
          <button
          onClick={() => {navigate(-1)}}
           style={{
            border: 'none',
          
            backgroundColor: 'transparent',
            marginRight: '20px',
            transform: 'translate(10%, 0)',
            cursor: 'pointer',
            left: '10px',
            top: '0px',
  
          }}>
            <FiArrowLeft size={32} />
          </button>
    <div
        style={{
          backgroundColor: 'white',
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
               transform: 'translate(0, 0)'
           }}
           onClick={handleTitleClick}>
           <h1 style={{textAlign: 'center'}}>
                Polymathe
            </h1>
       </button>
        </div>
       <button
        ref={optionRef}
       
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

        <div style={{ backgroundColor: 'rgba(56, 1, 139, 1)',
           overflow: 'hidden',
           minHeight: 'calc(100vh - 58px)'
        }}>
          <main className='main'>
          {isList &&
          <ListGroup ref={buttonRef} style={{position:'absolute', top: '58px',
          right: 0, zIndex: '10' }}>
            {
              localStorage.getItem('accessToken')==='null' &&
            <ListGroupItem action variant="dark" onClick={inscriptionClick}>
              <h4>
                connexion
              </h4>
            </ListGroupItem>
            }
            {
              localStorage.getItem('accessToken')!=='null' && 
              <>
              <ListGroupItem action variant="dark" onClick={logoutClick}>
                <h4>
                  déconnexion
                </h4>
              </ListGroupItem>
              <ListGroupItem action variant="dark" onClick={modificationClick}>
                <h4>
                  ajouter/modifier
                </h4>
              </ListGroupItem>
              <ListGroupItem action variant="dark" onClick={profilClick}>
                <h4>
                  profil
                </h4>
              </ListGroupItem>
              </>
            }
            <ListGroupItem action variant="dark" onClick={contactClick}>
              <h4>
                contact
              </h4>
            </ListGroupItem>
          </ListGroup>
          }
          <Outlet></Outlet>
          </main>
          </div>
    </div>
  );
}

export default Header;