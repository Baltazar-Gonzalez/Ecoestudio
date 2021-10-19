import React from "react"
import {useSelector} from "react-redux"
import Carousel from "../Components/Carousel" 
import Product from "../Components/Product"
import styled from "styled-components"
import "animate.css"

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 250px;
  color: #fff;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  padding: 30px 20px;
  font-size: 1em;
  background-image: url("./images/Nature-picture.jpg");
  background-size: 225%;
  background-position: -50vh;
  background-repeat: no-repeat;
  background-attachment: fixed;
  margin-top: 20px;
  h2{
      margin-bottom: 10px;
  }
  span{
      color: #06ff36;
  }
`

const Main = () => {
const state = useSelector(state => state.productos)

return(
    <div id="lol" >
        <Carousel />
        <Div >
            <h2 className="animate__animated animate__fadeInDown">Bienvenidos a <span>ECOESTUDIO</span></h2>
            <p className="animate__animated animate__fadeInDown">Tu empresa de productos ecologicos de confianza.</p>
        </Div>
        <div className="animate__animated animate__fadeIn" id="productos">
        {state.map(producto=>{
            return(
                <Product id={producto.id}/>
                )
            })}
            </div>
    </div>
   )
}


export default Main