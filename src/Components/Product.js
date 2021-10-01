import React, {useState} from 'react'
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
    const [isOpen, setOpen] = useState(false)
    const handleOpen = () =>{
        setOpen(true)
        console.log(isOpen)
    }
    const handleClose = () =>{
        setOpen(false)
        console.log(isOpen)
    }

   return(
       <>
        <Div onClick={handleOpen}>
            {props.children}
        </Div>
        <Modal isOpen={isOpen} onClose={handleClose}>
            {props.children}
        </Modal>
    </>
   )
}
 
export default Product