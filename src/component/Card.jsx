import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Card = ()=> {
  
    const products = useSelector((state)=> state.allProducts.products);
    const renderList = products.map((product)=>{
        const{id,title,image,price,category} = product;
        return (
            <>
                <div className="col-md-3 col-10 mx-auto">
                <div className="four wide column"  >
                    <Link to={`/product/${id}`}>
                    <div className="ui link cards">
                        <div className="card">
                        <div className="image">
                            <img src={image} alt={title} />
                        </div>
                        <div className="content">
                            <div className="header">{title}</div>
                            <div className="meta price">$ {price}</div>
                            <div className="meta">{category}</div>
                        </div>
                        </div>
                    </div>
                    </Link>
                </div>
                <br/>
            </div>
            </>
        )
    });
    return (
    <>
      {renderList}
    </>
  );
}

export default Card;
