import React from 'react'
import Header from "./Header"
import styled from 'styled-components'
import Footer from "../Components/Footer"

const Div = styled.div`

`

const Layout = ({children}) => {
   return(
        <Div>
            <Header/>
            {children}
            <Footer/>
        </Div> 
   )
}
 
export default Layout