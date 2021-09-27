import React from 'react'
import styled from 'styled-components'
import {BiShoppingBag} from "react-icons/bi"

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
    position: fixed;
    list-style: none;
    top:0;
    left:-400px;
    padding: 100px 20px;
    width: 0; 
    height: 100vh;
    font-family: 'Mo ntserrat', sans-serif;
    font-size: 2em;
    background-color: #1b1b1b;
    color: white;
    transition: all 0.7s ease;
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
    display: flex;
    flex-direction: column;
    left:0;
    width: 100%;
    transition: all 0.7s ease;

}
`
const Menu = styled.div`
  width: 25px;
  height: 3px;
  background: white;
  border-radius: 5px;
  z-index: 20;
  transition: all .5s ease-in-out;
::before,::after{
  content: '';
  position: absolute;
  width: 25px;
  height: 3px;
  z-index: 20;
  background: white;
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
const Cart = styled.div`

`
const Header = () => {
   return(
       <Div>
            <Menu id="icon" onClick={()=>{
            document.getElementById("icon").classList.toggle("x")
            document.getElementById("menu").classList.toggle("open")
            }}/>
                <ul id="menu">
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
            <Img>Ecoestudio</Img>
            <Cart><BiShoppingBag color="white" size="25px"/></Cart>
       </Div>
   )
}
 
export default Header