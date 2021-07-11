import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import Card from "./Card";
import { fetchCategoryProducts } from "../redux/action/productAction";

const Category = ()=> {
  
    const {category} = useParams();
    const dispatch = useDispatch();

    console.log(category);
    useEffect(()=>{
        if(category && category!=="") dispatch(fetchCategoryProducts(category));
    },[category]);

    return (
    <>
      <div className="ui grid container">
          <Card/>
      </div>

    </>
  );
}

export default Category;
