import React, {useState} from 'react'
import styled from 'styled-components'
import {useSelector} from "react-redux"
import { NavHashLink } from 'react-router-hash-link';

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
p{
    color: #cc0000;
    text-align: center;
}
a{
    display: block;
    color: #cc0000;
    text-align: center;
}

`
 
const Checkout = () => {
    const scrollWithOffset = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -50; 
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
    }

    const [form, setForm] = useState({
        Nombre:"",
        Apellido:"",
        Grado:"",
        Numero:0,
    })
    const state = useSelector(state => state.carrito)

    let total = 0
    let productos = ""
    
    const handleSubmit = e =>{
        e.preventDefault()
        if(state.length===0)console.log(state.length)
        else{
            state.forEach(items => {
                total += items.precio
                if(productos==="") productos += `${`${items.nombre} ${items.id===0? "de " + items.semilla:""}`} (${items.cantidad})`
                else productos += ` - ${`${items.nombre} ${items.id===0? "de " + items.semilla:""}`} (${items.cantidad})`
                
            })
            window.open(`https://api.whatsapp.com/send?&text=COMPRADOR: ${form.Nombre} ${form.Apellido}%0AGRADO: ${form.Grado} %0APEDIDO: ${productos} %0ATOTAL: $${total}`)
        }
    }
    const handleChange = (e, value) =>{
        console.log(form)
        setForm({...form,[e]:value})
    }

   return(
       <Div>
           <h2>Datos de contacto</h2>
           <form onSubmit={handleSubmit}>
                <div>
                    <label for="Nombre">Nombre</label>
                    <input required type="text" id="Nombre" placeholder="Nombre" onChange={(e)=>{handleChange("Nombre", e.target.value)}}/>
                </div>
                <div >
                    <label for="Apellido">Apellido</label>
                    <input required type="text" id="Apellido" placeholder="Apellido" onChange={(e)=>{handleChange("Apellido", e.target.value)}}/>
                </div>
                <div >
                    <label for="Grado">Grado y División</label>
                    <input required type="text" id="Grado" placeholder="ej: 1A-3A-5A" onChange={(e)=>{handleChange("Grado", e.target.value)}}/>
                </div>
                {state.length===0?<p>EL CARRITO SE ENCUENTRA VACIO! </p>:false}
                {state.length===0?<NavHashLink to="/#productos" scroll={el => scrollWithOffset(el)}>Ver productos</NavHashLink>:false}
                <button>ENVIAR</button>
            </form> 
       </Div>
   )
}
 
export default Checkout