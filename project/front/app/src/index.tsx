import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Morewords from './morewords';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Header/>}>
          <Route path="/" element={<App/>}/>
          <Route path="/plusdemots" element={<Morewords/>}/>
          <Route path="/contact" element={<Morewords/>}/>
          <Route path="/modifications" element={<Morewords/>}/>
          <Route path="/exercice" element={<Morewords/>}/>
          <Route path="/motsdujour" element={<Morewords/>}/>
          <Route path="/inscription" element={<Morewords/>}/>
        </Route>
      </Routes>
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
