import React, { useEffect } from "react";
import {useDispatch } from "react-redux";
import Card from "./Card";
import { fetchProducts } from "../redux/action/productAction";

const Home = ()=> {
  
    const dispatch = useDispatch();

    useEffect(()=>{
       dispatch(fetchProducts());
    },[]);

    return (
    <>
      <div className="ui grid container">
          <Card/>
      </div>

    </>
  );
}

export default Home;
