import {combineReducers} from "redux";
import {productReducer, selectedProductsReducer} from "./productReducer";

const rootReducer = combineReducers({
    allProducts: productReducer,
    product : selectedProductsReducer,
    
}    
);

export default rootReducer;