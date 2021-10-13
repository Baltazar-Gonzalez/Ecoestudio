import React from "react"
import {BrowserRouter, Route, Switch} from "react-router-dom"

import Layout from "../Components/Layout"
import Main from "../pages/Main"
import Info from "../pages/Info"
import Checkout from "../pages/Checkout"

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Main}/>
          <Route exact path="/info" component={Info}/>
          <Route exact path="/checkout" component={Checkout}/>
        </Switch>
      </Layout>
    </BrowserRouter>
    
  );
}

export default App;
