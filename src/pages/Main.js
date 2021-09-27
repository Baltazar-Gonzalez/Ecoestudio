import React from "react"
import styled from 'styled-components'
import Overlay from "../Components/Overlay" 
import Product from "../Components/Product"
const Div = styled.div`
`
 
const Main = () => {
   return(
    <Div>
        <Overlay/>
        <Product/>
        <Product/>
        <Product/>
    </Div>
   )
}


export default Main