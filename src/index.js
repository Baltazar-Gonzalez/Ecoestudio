import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "react-redux"
import { createStore, compose } from "redux"
import reducer from "./reducers"

const initialState = {
  "carrito":[],
  "carousel":[
    {
      "id": 1,
      "titulo": "Lapiz ecologico",
      "boton": "VER OFERTAS",
      "img":"./images/lapiz.jpg",
    }, 
    {
      "id": 2,
      "titulo": "Concurso",
      "boton": "COMO PARTICIPAR?",
      "img":"./images/lapiz.jpg",
    },
    {
      "id": 3,
      "titulo": "USTEDES",
      "boton": "VER",
      "img":"./images/lapiz.jpg",
    }
  ],
  "productos":[
    {
      "id": 1,
      "nombre": "Lapiz ecologico",
      "precio": 100,
      "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidata",
      "img":"./images/unnamed.jpg",
    },
    {
      "id": 2,
      "nombre": "Posticks reciclados",
      "precio": 150,
      "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidata",
      "img":"./images/posticks.jpg",
    },
    {
      "id": 3,
      "nombre": "Lapicera ecologica",
      "precio": 250,
      "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidata",
      "img":"./images/lapicera.jpg",
    },
  ],
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, initialState, composeEnhancers());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider> 
  </React.StrictMode>,
  document.getElementById('root')
);
