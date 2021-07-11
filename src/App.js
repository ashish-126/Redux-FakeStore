import React from "react";
import './App.css';
import Header from "./component/Header";
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./component/Home";
import ProductDetails from "./component/ProductDetails";
import Category from "./component/Category";

const App = ()=> {
  return (
    <>
      <div className = "App">
         <Router>
         <Header/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/product/:productId" component={ProductDetails}/>
            <Route exact path="/category/:category" component={Category}/>
            <Route>404 Not Found</Route>
          </Switch>
         </Router> 

          
      </div>

      
    </>
  );
}

export default App;
