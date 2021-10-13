import React from 'react'
import styled from 'styled-components'
import {BiShoppingBag} from "react-icons/bi"
import {useSelector, useDispatch} from "react-redux"
import {deleteCart} from "../actions"
import QuantityButton from "./QuantityButton"
import { NavHashLink } from 'react-router-hash-link';

const Div = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  z-index: 100;
  align-items: center;
  width: 100%;
  height: 50px;
  padding: 0 20px;
  background-color: #1b1b1b;
  cursor: pointer;
  transition: all .5s ease-in-out;
.x{
  transform: translateX(-50px);
}
.x::before{
    transform: rotate(45deg) translate(35px, -35px);
}
.x::after{
    transform: rotate(-45deg) translate(35px, 35px);
}
>ul{
    display: flex;
    flex-direction: column;
    position: absolute;
    list-style: none;
    top:0;
    padding: 100px 20px;
    width: 100%;
    height: 100vh;
    font-family: 'Montserrat', sans-serif;
    font-size: 2em;
    background-color: #1b1b1b;
    color: #fff;
    transition: all 0.7s ease;
h4{
    width: 100vh;
}
h6{
    font-size: .5em;
    font-family: sans-serif;
    margin: 20px 0 10px 0;
}
.empty{
    font-size: 16px;
    margin-top: 15px;
}
}
.menu1{
    left:-100%;
}
.menu2{
    right:-100%;
}

#socialmedia{
    font-size: .4em;
    font-weight: 300;
    display: flex;
    list-style: none;
    position: absolute;
    bottom: 30px;
li{
    margin-right: 10px;
}
}
.open{
    left:0;
}
.open2{
    right:0;
}
`
const Menu = styled.div`
  width: 25px;
  height: 3px;
  background-color: #fff;
  border-radius: 5px;
  z-index: 20;
  transition: all .5s ease-in-out;
::before,::after{
  content: '';
  position: absolute;
  width: 25px;
  height: 3px;
  z-index: 20;
  background-color: #fff;
  border-radius: 5px;
  transition: all .5s ease-in-out;
}
::before{
    transform: translateY(-7px);
}
::after{
    transform: translateY(7px);
}

`
const Img = styled.div`
    color: white;
    font-family: 'Montserrat', sans-serif;
`
const CartProduct = styled.li`
  position: relative;
  display: flex;
  background-color: #fff;
  color: #111;
  margin: 8px 0;
  font-size: .5em;
  img{
      width: 50%;
      height: 120px;
      object-fit: contain;
  }
  div{
    padding: 10px 0 0 0;
    font-size: .9em;
  } 
`
const Button = styled.button`
    position: absolute;
    right:  2.5px;
    bottom: 2.5px;
    border: none;
    outline: none;
    background-color: #f5f5f5;
    padding: 0.3em 1em;
`
const Buy = styled.div`
    width: 100%;
    position: absolute;
    bottom: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    font-family: 'Times New Roman', Times, serif;
    padding: 10px;
    div{
        font-size:.7em;
        display: flex;
        justify-content: space-between;
        }
    button{
        font-size: .6em;
        height: 40px;
        background-color: #fff;
        border:none;
        border-radius: 5px;
    }
`

const Header = () => {

const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -50; 
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
}

const state = useSelector(state => state)

let total = 0

state.carrito.forEach(items => {
    total += items.precio
})

const dispatch = useDispatch()

const handleRemove = e => {
    dispatch(deleteCart(state.carrito.filter(items => e === items.id)
    ))
}
    
   return(
       <Div>
            <Menu id="icon" onClick={()=>{
            if(document.getElementById("menu2").classList.contains("open2")){
                document.getElementById("menu2").classList.remove("open2")
            }
            else{
            document.getElementById("menu").classList.toggle("open")
            }
            document.getElementById("icon").classList.toggle("x")
            }}/>
                <ul className="menu1" id="menu">
                    <li>Inicio</li>
                    <li>Productos</li>
                    <li>Contactanos</li>
                    <li>
                        <ul id="socialmedia">
                        <li>INSTAGRAM</li>
                        <li>FACEBOOK</li> 
                        </ul>
                    </li>
                </ul>
                <NavHashLink scroll={el => scrollWithOffset(el)} to="/#top"><Img>Ecoestudio</Img></NavHashLink>
            <BiShoppingBag color="white" size="25px" onClick={ ()=>{
            document.getElementById("icon").classList.toggle("x")
            document.getElementById("menu2").classList.toggle("open2")
            }}/>
            <ul className="menu2" id="menu2">
                <h4>Carrito de Compras</h4>
                <h6>Items({state.carrito.length})</h6>
                {state.carrito.map(compras => {
                    return(
                      <CartProduct>
                          <img alt={compras.name} src={compras.img}/>
                          <div>
                            <span>{compras.nombre} ({compras.cantidad})</span>
                            <br/>
                            <span>${compras.precio}</span>
                            <QuantityButton quantity={compras.cantidad} id={compras.id}/>
                            <Button onClick={()=>handleRemove(compras.id)}>X</Button>
                          </div>
                      </CartProduct>
                    )
                })}
                {state.carrito.length>0?
                <Buy>
                    <div>
                        <p>Total</p>
                        <span>${total}</span>
                    </div>
                    <button>INICIAR COMPRA</button>
                </Buy>
                :<p className="empty">El carrito de compras esta vacio...</p>}
            </ul>
       </Div>
   )
}
 
export default Header