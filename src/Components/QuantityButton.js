import React from 'react'
import styled from 'styled-components'
import {useDispatch, useSelector} from "react-redux"
import { quantityCart} from "../actions"
 
const Div = styled.div`
 .Amount__button{
    margin: 10px 0;
      color: white;
      background-color: black;
      border: 1px solid #222;
      outline: none;
      width: 30px;
      height: 30px;
      font-size: 1.5em;
  }
  .Modal__Amount{
      height: 30px;
      width: 60px;
      border: 1px solid #222;
      font-size: 1.5em;
      outline: none;
      text-align: center;
  }
`
 
const QuantityButton = props => {

const state = useSelector(state => state.productos[props.id])

const dispatch = useDispatch()

const handleIncrement = () => {
    if(props.quantity === 99) dispatch(quantityCart({...state, cantidad:1}))
    else dispatch(quantityCart({...state, cantidad:props.quantity+1}))
} 
const handleDecrement = () => {
    if(props.quantity === 1) dispatch(quantityCart({...state, cantidad:99}))
    else dispatch(quantityCart({...state, cantidad:props.quantity-1}))
}

return(
        <Div>
            <button className="Amount__button" onClick={handleDecrement}>-</button>
            <input value={props.quantity} type="number" className="Modal__Amount"/>
            <button className="Amount__button" onClick={handleIncrement}>+</button>
        </Div>
   )
}
 
export default QuantityButton