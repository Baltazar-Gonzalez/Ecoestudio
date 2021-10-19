import React from 'react'
import styled from 'styled-components'
const Div = styled.div`
    margin-top: 50px;
    width: 100%;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;

h2{
    padding: 1em;
}
div{
    display: grid;
    margin:  0;
    line-height: 1.25;
    padding: 1em;
}
input{
    font-size: 1em;
    height: 40px;
    padding: .7em;
    line-height: 1.5;
    color: #212529;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    -webkit-appearance: none;
    appearance: none;
    border-radius: .25rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}
button{
    background-color: #212529;
    color: #ced4da;
    border: none;
    height: 60px;
    width: 70%;
    margin: 25px 15%;
}

`
 
const Checkout = () => {
   return(
       <Div>
           <h2>Datos de contacto</h2>
           <form>
                <div>
                    <label for="floatingInput">Nombre</label>
                    <input required type="text" id="floatingInput" placeholder="Nombre"/>
                </div>
                <div >
                    <label for="floatingPassword">Apellido</label>
                    <input required type="text" id="floatingPassword" placeholder="Apellido"/>
                </div>
                <div >
                    <label for="floatingPassword">Grado y División</label>
                    <input required type="text" id="floatingPassword" placeholder="(1A-3A-6A-etc)"/>
                </div>
                <div>
                    <label for="floatingPassword">Numero de telefono</label>
                    <input required type="number" id="floatingPassword" placeholder="ej: +54 9 11 12341234"/>
                </div>
                <button type="submit">ENVIAR</button>
            </form> 
       </Div>
   )
}
 
export default Checkout