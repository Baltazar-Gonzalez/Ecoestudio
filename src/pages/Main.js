import React from "react"
import {useSelector} from "react-redux"
import styled from 'styled-components'
import Carousel from "../Components/Carousel" 
import Product from "../Components/Product"
const Div = styled.div`
`


const Main = () => {

    const state = useSelector(state => state.productos)
    return(
    <Div>
        <Carousel/>
        {state.map(producto=>{
            return(
            <Product id={producto.id}/>

            )
        })}
    </Div>
   )
}


export default Main