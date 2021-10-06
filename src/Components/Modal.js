import React from 'react'
import {useDispatch, useSelector} from "react-redux"
import {addCart} from "../actions"
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
    position: relative;
    top: 15%;
    border-radius: 10px;
    background-color: #ffffff;
    padding: 1rem;
    width: 90%;
    height: 550px;
    max-height: 80%;
    overflow: scroll;
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
      height: 220px;
  }
  p{
      text-align: start;
  }
`

 
const Component = props => {

const lol = useSelector(state=>state.productos)
const state = lol[props.id-1]

const dispatch = useDispatch()

const handleBuy = e => {
    if(e===Number()){
        for(var i=0; i<=e; i++){
            dispatch(addCart({...state}))
        }}else{
        dispatch(addCart({...state}))
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
                    </div>
                        <p>{state.descripcion}</p>
                    <QuantityButton onChange={handleBuy}/>
                    <button onClick={handleBuy} className="Modal__buy-button">Agregar al carrito</button>
                </div>
            </div>
        </Div>,
        document.getElementById("modal")
        )

    )
}
 
export default Component