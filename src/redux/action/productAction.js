import fakeStoreApi from "../../Apis/fakeStoreApi";
import { ActionTypes } from "../constant/actionTypes"

export const setProducts = (products)=>{
    return{
        type : ActionTypes.SET_PRODUCTS,
        payload : products
    };
}

export const selectedProduct = (product)=>{
    return{
        type : ActionTypes.SELECTED_PRODUCT,
        payload : product
    };
}

export const removeProduct = ()=>{
    return{
        type : ActionTypes.REMOVE_SELECTED_PRODUCT
    };
}


export const fetchProducts = ()=> async(dispatch)=> {
    const response = await fakeStoreApi.get("/products");
    dispatch({type : ActionTypes.SET_PRODUCTS, payload : response.data})
};

export const fetchProduct = (productId)=> async(dispatch)=> {
    const response = await fakeStoreApi.get(`/products/${productId}`)
    dispatch({type : ActionTypes.SELECTED_PRODUCT, payload : response.data})
};

export const fetchCategoryProducts = (category)=> async(dispatch)=> {
    const response = await fakeStoreApi.get(`/products/category/${category}`);
    console.log(response.data);
    dispatch({type : ActionTypes.SET_PRODUCTS, payload : response.data})
};
