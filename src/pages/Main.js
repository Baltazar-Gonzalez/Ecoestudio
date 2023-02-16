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
  height: 350px;
  color: #fff;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  padding: 30px 20px;
  font-size: 2em;
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
const Productos = styled.div`
    h1{
        font-size: 3em;
        color: #fff;
        padding: 40px 0;
        text-align: center;
        border-bottom: 1px solid #fff;
        border-top: 1px solid #fff;
        font-family: 'Montserrat', sans-serif;
    }
@media screen and (min-width: 800px){
    >div{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction:row;
        flex-wrap: wrap;
        padding: 20px 0 ;
     }
     h1{
         border: none;
     }
     .oferta{
        padding-bottom: 100px ;
     }
    }
`

const Main = () => {
const state = useSelector(state => state.productos)

return(
    <div id="lol" >
        <Carousel />
        <Div >
            <h2 className="animate__animated animate__fadeInDown">Bienvenidos a <span>ECOESTUDIO</span></h2>
            <p className="animate__animated animate__fadeInDown">Se parte de la solución y no de la contaminación</p>
        </Div>
        <Productos className="animate__animated animate__fadeIn" id="productos">
            <h1>PRODUCTOS</h1>
            <div>
                {state.map(producto=>{
                    if(producto.id>2) return false
                    return(
                        <Product id={producto.id}/>
                        )
                    })}
            </div>
            <h1>OFERTAS</h1>
            <div className="oferta">
                <Product id={3}/>
            </div>
        </Productos>
    </div>
   )
}


export default Main