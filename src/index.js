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
      "titulo": "Lapiz ecologico",
      "boton": "VER PRODUCTOS",
      "img":"./images/lapices.jpg",
    }, 
    {
      "id": 1,
      "titulo": "Concurso",
      "boton": "COMO PARTICIPAR?",
      "img":"./images/lapiz.jpg",
    },
    {
      "id": 2,
      "titulo": "NOSOTROS",
      "boton": "INFO",
      "img":"./images/nosotros.jpeg",
    }
  ],
  "productos":[
    {
      "id": 0,
      "cantidad": 1,
      "nombre": "Lapiz ecologico",
      "precio": 100,
      "descripcion": "Lapiz hecho con papel de diario reciclado, cuenta con una capsula biodegradable que contiene semillas (Perejil, Puerro, Albaca y Rucula) que te permitira seguir aportando al cuidado del medioambiente.",
      "img":"./images/unnamed.jpg",
    },
    {
      "id": 1,
      "cantidad": 1,
      "nombre": "Libreta ecologica",
      "precio": 250,
      "descripcion": "Libreta realizada con productos ecologicos. Posee una cantidad de ... hojas recicladas y una tapa forrada cuidadosamente con nuestro logo",
      "img":"./images/posticks.jpg",
    },
    {
      "id": 2,
      "cantidad": 1,
      "nombre": "Separadores",
      "precio": 250,
      "descripcion": "Señalador realizado con cartones reciclados y papel de libros. Poseen diseños unicos que son 100% desgradables",
      "img":"./images/separadores.jpeg",
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
