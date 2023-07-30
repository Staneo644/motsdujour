import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Morewords from './components/morewords';
import { Suspense } from 'react';
import Contact from './option/Contact';
import Modif from './option/Modif';
import Login from './option/Login';
import { Spinner } from 'react-bootstrap';
import Daywords from './components/Daywords';
import { Theme } from './components/theme';
import { Register } from './option/Register';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>

    <Suspense fallback={<div>Loading... <Spinner></Spinner></div>}>
    {
      <Routes>
        <Route element={<Header/>}>
          <Route path="/" element={<App/>}/>
          <Route path="/plusdemots" element={<Morewords/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/modifications" element={<Modif/>}/>
          <Route path="/exercice" element={<Morewords/>}/>
          <Route path="/motsdujour" element={<Daywords/>}/>
          <Route path="/inscription" element={<Register/>}/>
          <Route path="/connexion" element={<Login/>}/>
          <Route path="/theme" element={<Theme/>}/>
        </Route>
      </Routes>
      }
    </Suspense>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
