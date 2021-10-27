import React from 'react';
import ReactDOM from 'react-dom';
import App from './routes/App';
import {Provider} from "react-redux"
import { createStore, compose } from "redux"
import reducer from "./reducers"
import "./index.css"

const initialState = {
  "carrito":[],
  "carousel":[
    {
      "id": 0,
      "titulo": "Lapices ecologico",
      "boton": "VER PRODUCTOS",
      "img":"./images/lapices2.jpeg",
    }, 
    {
      "id": 1,
      "titulo": "Concurso",
      "boton": "COMO PARTICIPAR?",
      "img":"./images/lapiz.jpg",
    },
    {
      "id": 2,
      "titulo": "Nosotros",
      "boton": "INFO",
      "img":"./images/empresa-ecologica.jpg",
    }
  ],
  "productos":[
    {
      "id": 0,
      "cantidad": 1,
      "nombre": "Lapiz ecologico",
      "semilla":"",
      "precio": 30,
      "descripcion": "Lapiz hecho con papel de diario reciclado, cuenta con una capsula biodegradable que contiene semillas (Perejil, Puerro, Albaca y Rucula) que te permitira seguir aportando al cuidado del medioambiente.",
      "img":"./images/lapices.jpeg",
    },
    {
      "id": 1,
      "cantidad": 1,
      "nombre": "Libreta ecologica",
      "precio": 250,
      "descripcion": "Libreta realizada con productos ecologicos. Posee una cantidad de ... hojas recicladas y una tapa forrada cuidadosamente con nuestro logo",
      "img":"./images/libretas.jpeg",
    },
    {
      "id": 2,
      "cantidad": 1,
      "nombre": "Separadores",
      "precio": 15,
      "descripcion": "Separadores realizado con cartones reciclados y papel de libros. Son 100% biodegradables y cada uno cuenta con un diseño unico.",
      "img":"./images/separadores.jpeg",
    },
    {
      "id": 3,
      "cantidad": 1,
      "nombre": "KIT ECOESTUDIO",
      "precio": 280,
      "descripcion": "Kit con todos los productos de ecoestudio. Con la compra de un lapiz ecologico y una libreta te regalamos un separador con diseño unico.",
      "img":"./images/ofertas.jpeg",
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
