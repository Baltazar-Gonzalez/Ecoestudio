import React, {useState} from 'react'
import {useSelector} from "react-redux"
import Modal from "./Modal"
import styled from 'styled-components'

const Div = styled.div`
    height: 200px;
    display: flex;
    align-items: center;
    background-color: #111;
    border-top: 1px solid #444;
    color: #eee;
img{
    width: 45%;
    height: 60%;
    padding: 12px;
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
                <div >
                    <h2>{state.nombre}</h2>
                    <span>${state.precio}</span>
                </div>
        </Div>
        <Modal id={props.id} isOpen={isOpen} onClose={handleClose}/>
    </>
   )
}
 
export default Product