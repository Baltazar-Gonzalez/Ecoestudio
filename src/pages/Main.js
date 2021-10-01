import React from "react"
import styled from 'styled-components'
import Carousel from "../Components/Carousel" 
import Product from "../Components/Product"
const Div = styled.div`
`
 
const Main = () => {
   return(
    <Div>
        <Carousel/>
        <Product>
            <img alt="lapiz" src="./images/unnamed.jpg"/>
                <div >
                    <h2>Lapiz ecologico</h2>
                    <span>$100</span>
                </div>
        </Product>
        <Product>
            <img alt="posticks" src="./images/posticks.jpg"/>
                <div >
                    <h2>Posticks reciclados</h2>
                    <span>$200</span>
                </div>
        </Product>
        <Product>
            <img alt="lapicera" src="./images/lapicera.jpg"/>
                <div >
                    <h2>Lapicera ecologica</h2>
                    <span>$300</span>
                </div>
        </Product>
    </Div>
   )
}


export default Main