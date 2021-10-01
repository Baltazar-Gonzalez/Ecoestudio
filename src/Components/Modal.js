import React, {useState} from 'react'
import ReactDOM from "react-dom"
import styled from 'styled-components'


const Div = styled.div`
 .Modal {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .Modal__container {
    text-align: center;
    position: relative;
    top: 15%;
    border-radius: 10px;
    background-color: #ffffff;
    padding: 1rem;
    width: 90%;
    height: 550px;
    max-height: 80%;
    overflow: scroll;
  }
  
  .Modal__close-button {
    position: absolute;
    border-radius: 0 10px 0 0;
    top: 0;
    right: 0;
    border: 0;
    background-color: #F5F5F5;
    padding: 0.5rem 1rem;
  }
  .Modal__buy-button{
    font-family: 'Yaldevi', sans-serif;
    width: 200px;
    height: 30px;
    color: white;
    background-color: rgb(5, 50, 50);
    border: none;
    outline: none;
  }
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
  img{
      width: 80%;
      height: 220px;
  }
  p{
      text-align: start;
  }
`

 
const Component = props => {
const [amount, setAmount] = useState(0)

const handleIncrement = () => {
    if(amount === 99) setAmount(0)
    else setAmount(amount+1)
} 
const handleDecrement = () => {
    if(amount === 0) setAmount(99)
    else setAmount(amount-1)
}

    if(!props.isOpen){
        return null
    }
    return (
        ReactDOM.createPortal(
        <Div>
            <div className="Modal">
                <div className="Modal__container">
                    <button onClick={props.onClose} className="Modal__close-button">X</button>
                    {props.children}
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidata"</p>
                    <div>
                        <button className="Amount__button" onClick={handleDecrement}>-</button>
                        <input value={amount} type="number" className="Modal__Amount"/>
                        <button className="Amount__button" onClick={handleIncrement}>+</button>
                    </div>
                    <button className="Modal__buy-button">Agregar al carrito</button>
                </div>
            </div>
        </Div>,
        document.getElementById("modal")
        )

    )
}
 
export default Component