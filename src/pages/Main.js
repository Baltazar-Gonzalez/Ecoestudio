import React from "react"
import {useSelector} from "react-redux"
import Carousel from "../Components/Carousel" 
import Product from "../Components/Product"


const Main = () => {
const state = useSelector(state => state.productos)

return(
    <div id="lol" >
        <Carousel />
        {state.map(producto=>{
            return(
            <Product id={producto.id}/>
            )
        })}

    </div>
   )
}


export default Main