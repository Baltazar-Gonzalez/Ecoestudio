import React, {useState} from 'react'
import {useSelector} from "react-redux"
import Modal from "./Modal"
import styled from 'styled-components'

const Div = styled.div`
    width: 100%;
    height: 200px;
    display: flex;
    align-items: center;
    background-color: #111;
    border-top: 1px solid #444;
    color: #eee;
div{
}
img{
    width: 75%;
    max-width: 250px;
    height: 80%;
    padding: 12px;
}

@media screen and (min-width: 800px){
    font-size: 1.5em;
    border: 1px solid #444;
    flex-direction: column;
    height: 400px;
    width: 500px;
    text-align: center;
}
`

const Product = props => {
    const state = useSelector(state => state.productos[props.id])

    const [isOpen, setOpen] = useState(false)
    const handleOpen = () =>{
        setOpen(true)
    }
    const handleClose = () =>{
        setOpen(false)
    }

   return(
       <>
        <Div onClick={handleOpen}>
            <img alt={state.nombre} src={state.img}/>
            <div>
                <h2>{state.nombre}</h2>
                <span>${state.precio}</span>
            </div>
        </Div>
        <Modal id={props.id} isOpen={isOpen} onClose={handleClose}/>
    </>
   )
}
 
export default Product