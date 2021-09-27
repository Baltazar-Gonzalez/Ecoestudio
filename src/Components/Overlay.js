import React from 'react'
import styled from 'styled-components'
 
const Div = styled.div`
margin-top: 50px;
width: 100%;
font-family: 'Yaldevi', sans-serif;
img{
    width: 100%;
    height: 250px;
    object-fit: cover;
}   
div{
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    top: 75px;
    text-align: center;
h1{
    font-size: 2.5em;
    color: white;
    font-weight: 500;
}
button{
    width: 200px;
    height: 30px;
    color: white;
    background-color: rgb(5, 50, 50);
    box-shadow: none;
    border: none;
    outline: none;
}
}
`
 
const Overlay = () => {
   return(
       <Div>
           <img alt="lapices" src="./images/lapiz.jpg"/>
           <div>
               <h1>Lapices ecologicos</h1>
                <button>VER</button>
           </div>
       </Div>
   )
}
 
export default Overlay