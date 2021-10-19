import React from 'react'
import styled from 'styled-components'
 
const Div = styled.div`
    margin-top: 50px;
    padding: 2.5%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: rgb(245,245,245);
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
`
const List = styled.ul`
    list-style: none;
    background-color: rgb(255,255,255);
    padding: 20px 2.5%;
    h2{
        margin: 10px 0;
    }
    li{
        margin: 10px 0;
    }
    h4{
        border-top:  1px solid rgb(225,225,225);
        padding: 15px 0;
    }
    p{
        font-family: 'Times New Roman', Times, serif;
    }
`
 
const Info = () => {
   return(
       <Div>
           <List id="ayuda">
                <h2>¿NECESITA AYUDA?</h2>
                <li id="compras">
                    <h4>COMPRAS</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                 </li>
                 <li id="envios">
                    <h4>ENVIOS</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                 </li>
                 <li id="pagos">
                    <h4>METODOS DE PAGO</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                 </li>
           </List>
           <List id="empresa">
                <h2>EMPRESA</h2> 
                <li id="nosotros">
                    <h4>NOSOTROS</h4>
                    <p>Somos una empresa que se dedica a la venta de productos de librería amigables con el medio ambiente con el fin de reducir, reciclar y reutilizar cumpliendo con las leyes basicas para la conservación del medio ambiente. Nuestro proyecto surgió a traves del proyecto empresa en el aula, somos de 5°A del colegio José Manuel Estrada y creemos que el reciclaje es necesario en este mundo que está tan insdustrializado para reducir la contaminación.</p>
                 </li>
                 <li id="metas">
                    <h4>METAS</h4>
                    <p>Ecoestudio se encarga de satisfacer las necesidades de nuestros clientes ofreciendo productos de libreria amigables con el medio ambiente para construir un mundo mas ecofriendly.</p>
                 </li>
                 <li id="personal">
                    <h4>VISIÓN</h4>
                    <p>Ser líder a nivel local ofreciendo los productos ecológicos de mejor calidad complementando el cuidado del medio-ambiente mediante la tecnología.</p>
                 </li>
           </List>
           <List id="contactos">
                <h2>CONTACTOS</h2>
                <div id="gmail">
                    <li >
                        <h4>GMAIL</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </li>
                </div>
                 <li id="whatsapp">
                    <h4>WHATSAPP</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                 </li>
                 <li id="direccion">
                    <h4>DIRECCIÓN</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                 </li>
           </List>
       </Div>
   )
}
 
export default Info