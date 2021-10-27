import React from 'react';
import {useSelector} from "react-redux"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import styled from 'styled-components'

const Div = styled.div`
margin-top: 50px;
font-family: 'Yaldevi', sans-serif;
img{
    width: 100%;
    height: 250px;
}   
.Carousel__content{
    position: absolute;
    height:175px;
    bottom: 0;
    left: 0;
    right: 0;
    top: 75px;
    text-align: center;
h1{
    font-size: 3em;
    color: white;
    font-weight: 500;
}
button{
    width: 200px;
    height: 30px;
    color: white;
    background-color: rgb(5, 50, 50);
    border: none;
    outline: none;
}
}
@media screen and (min-width: 1024px){
    img{
        height: 320px;
    }
.Carousel__content{
    top: 100px;
}    
`

const DemoCarousel = () =>{
const state = useSelector(state => state.carousel)
        return (
          <Div >       
            <Carousel showThumbs={false} showStatus={false} infiniteLoop={true}>
                {state.map(seccion => { 
                return(
                   <div>
                       <img alt={seccion.id} src={seccion.img}/>
                       <div className="Carousel__content">
                          <h1>{seccion.titulo}</h1>
                        </div>
                        </div>   
                        )
                    })}
            </Carousel>
          </Div>
        );
    };

export default DemoCarousel
