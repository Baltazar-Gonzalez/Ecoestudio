import React, {useState} from 'react'
import {useDispatch, useSelector} from "react-redux"
import {addCart, quantityCart} from "../actions"
import ReactDOM from "react-dom"
import styled from 'styled-components'
import QuantityButton from "./QuantityButton"


const Div = styled.div`
 .Modal {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .Modal__container {
    text-align: center;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction:column;
    position: relative;
    top: 15%;
    border-radius: 10px;
    background-color: #ffffff;
    padding: 1rem;
    width: 90%;
    height: 550px;
    max-height: 80%;
    overflow: auto;
  }
  
  .Modal__close-button {
    position: absolute;
    border-radius: 0 10px 0 0;
    top: 0;
    right: 0;
    border: 0;
    background-color: #F5F5F5;
    padding: 0.5rem 1rem;
  }
  .Modal__buy-button{
    font-family: 'Yaldevi', sans-serif;
    width: 200px;
    height: 30px;
    color: white;
    background-color: rgb(5, 50, 50);
    border: none;
    outline: none;
  }
  
  img{
      width: 80%;
      max-width: 350px;
      height: 250px;
  }
  p{
      text-align: center;
  }
  input[type=radio]{
      margin: 10px;
  }
  input[type=number]::-webkit-inner-spin-button, 
  input[type=number]::-webkit-outer-spin-button { 
  -webkit-appearance: none; 
  margin: 0; 
}
@media screen and (min-width: 1024px){
    p, span{
        font-size: 1.3em
    }
    .Modal__container {
        width: 80%;
        max-height: 85%;
        top: 10%;
    } 
    .Modal__buy-button{
        width: 350px;
        height: 60px;
        font-size: 1.3em;
    }
}
`

 
const Component = props => {

const [seed, setSeed] = useState({
    semilla:"Sin semillas"
})

const state = useSelector(state => state.productos[props.id])
const quantity = state.cantidad

const dispatch = useDispatch()

const handleBuy = e => {
    console.log(seed)
      dispatch(addCart({...state, cantidad: 1, semilla: seed.semilla})) 
        for(var i=0; i<=quantity; i++){
        dispatch(quantityCart({...state, cantidad: quantity, semilla: seed.semilla}))
        props.onClose()
}}

    if(!props.isOpen){
        return null
    }
    return (
        ReactDOM.createPortal(
        <Div>
            <div className="Modal">
                <div className="Modal__container">
                    <button onClick={props.onClose} className="Modal__close-button">X</button>
                    <img alt={state.nombre} src={state.img}/>
                    <div >
                        <h2>{state.nombre}</h2>
                        <span>${state.precio}</span>
                        <p>{state.descripcion}</p>
                    {props.id===0?
                    <form>
                        <label  for="Perejil"><input onChange={()=>setSeed({semilla:"Perejil"})} type="radio" id="Perejil" name="semilla" value="Perejil" />Perejil</label>
                        <label for="Puerro"><input onChange={()=>setSeed({semilla:"Puerro"})} type="radio" id="Puerro" name="semilla" value="Puerro" />Puerro</label>
                        <label for="Albaca"><input onChange={()=>setSeed({semilla:"Albaca"})} type="radio" id="Albaca" name="semilla" value="Albaca" />Albaca</label>
                        <label for="Rucula"><input onChange={()=>setSeed({semilla:"Rucula"})} type="radio" id="Rucula" name="semilla" value="Rucula" />Rucula</label>
                        <label for="Sin semillas"><input defaultChecked onChange={()=>setSeed("Sin semillas")} type="radio" id="Sin semillas" name="semilla" value="Sin semillas" />Sin semilla</label>
                    </form>
                : false}
                    <QuantityButton id={props.id} quantity={quantity}/>
                    </div>
                    <button onClick={handleBuy} className="Modal__buy-button">Agregar al carrito</button>
                </div>
            </div>
        </Div>,
        document.getElementById("modal")
        )

    )
}
 
export default Component