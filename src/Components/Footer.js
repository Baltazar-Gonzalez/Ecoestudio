import React from 'react'
import styled from 'styled-components'
 
const Div = styled.div`
    z-index: 20;
    bottom: 0;
    left:0;
    width: 100%;
    min-height: 20em;
    background-color: #1b1b1b;
    color: #c4c4c4;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
> ul{
    position: relative;
    display: block;
    list-style: none;
    margin: 1em;

}
span{
    bottom: 0;
}
`
const More = styled.div`
    width:10px;
    height: 1px;
    background-color: white;
::after{
  content: '';
  position: absolute;
  width: 10px;
  height: 1px;
  background: white;
  border-radius: 5px;
  transform: rotate(90deg) ;
  transition: all 0.7s ease;
}
`
const Option = styled.div`
    display: flex;
    justify-content: space-between;
    align-items:center;
    font-family: 'Montserrat', sans-serif;
    font-size: .5em;
    padding: 1em;
    border-bottom: 1px solid #c4c4c4;
.minus::after{
    transform: rotate(0deg);
}
`

const Info = styled.div`
ul {
    display: none;
    z-index: -1;
li {
    background-color: #c4c4c4;
    color: #1b1b1b;
    border-bottom: 1px solid rgb(160,160,165);
    padding: .2em;
}
}
.open{
    display: block;
}
`

const Footer = () => {
   return(
       <Div>
        <ul>
            <li >
            <Option onClick={()=>{
                document.getElementById("moreInfo").classList.toggle("open")
                document.getElementById("plus").classList.toggle("minus")
                }}>
                <h2>¿NECESITA AYUDA?</h2>
                <More id="plus"/>
            </Option>
            <Info >
            <ul id="moreInfo">
                <li>Compras</li>
                <li>Envios</li>
                <li>Metodos de pago</li>
            </ul>
            </Info>
            </li>
            <li >
            <Option onClick={()=>{
                document.getElementById("moreInfo2").classList.toggle("open")
                document.getElementById("plus2").classList.toggle("minus")
                }}>
                <h2>EMPRESA</h2>
                <More id="plus2"/>
            </Option>
            <Info >
            <ul id="moreInfo2">
                <li>Nosotros</li>
                <li>Metas</li>
                <li>Personal</li>
            </ul>
            </Info>
            </li>
            <li >
            <Option onClick={()=>{
                document.getElementById("moreInfo3").classList.toggle("open")
                document.getElementById("plus3").classList.toggle("minus")
                }}>
                <h2>CONTACTOS</h2>
                <More id="plus3"/>
            </Option>
            <Info>
            <ul id="moreInfo3">
                <li>Gmail</li>
                <li>Whatsapp</li>
                <li>Dirección</li>
            </ul>
            </Info>
            </li>
        </ul>
      
        <span>
            © 2021 Eco Estudio S.A - Todos los derechos reservados. 
        </span>
       </Div>
   )
}
 
export default Footer