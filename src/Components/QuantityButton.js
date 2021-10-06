import React, {useState} from 'react'
import styled from 'styled-components'
 
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

const [amount, setAmount] = useState(1)

const handleIncrement = () => {
    if(amount === 99) setAmount(1)
    else setAmount(amount+1)
    props.onChange(amount)
} 
const handleDecrement = () => {
    if(amount === 1) setAmount(99)
    else setAmount(amount-1)
    props.onChange(amount)
}

return(
        <Div>
            <button className="Amount__button" onClick={handleDecrement}>-</button>
            <input value={amount} type="number" className="Modal__Amount"/>
            <button className="Amount__button" onClick={handleIncrement}>+</button>
        </Div>
   )
}
 
export default QuantityButton