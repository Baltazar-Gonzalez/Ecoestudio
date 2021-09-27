import React from 'react'
import styled from 'styled-components'
 
const Div = styled.div`
    height: 200px;
    display: flex;
    align-items: center;
    background-color: #111;
    color: #eee;
img{
    width: 50%;
    height: 50%;
    object-fit: scale-down;
}
`
 
const Product = () => {
   return(
       <Div>
           <img src="./images/unnamed.jpg"/>
           <div>
               <h2>Lapiz ecologico</h2>
               <span>$3000</span>
           </div>
       </Div>
   )
}
 
export default Product