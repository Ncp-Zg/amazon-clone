import React from "react";
import "./Product.css";
import { useStatevalue } from "./StateProvider";

const Product = ({id,title,image,price,rating}) => {

    const [state,dispatch] = useStatevalue();
    // console.log(state.basket)
    const addtoBasket = ()=>{
        // dispatch the item into the data layer
        dispatch({
            type: "ADD_TO_BASKET",
            item : {
                id: id,
                title: title,
                image: image,
                price:price,
                rating:rating
            }
        })
    }
  return (
    <div className="product">
      <div className="product_info">
        <p>{title.slice(0,50)}...</p>
        <p className="product_price">
        
            <small>$</small>
            <strong>{price}</strong>
        </p>

        <div className="product_rating">
            {Array(rating).fill().map((_,i)=>(
                <p key={i}>&#11088;</p>
            ))}
        </div>
      </div>
        <img
            src={image}
            alt=""
        />

        <button onClick={addtoBasket}>Add to Basket</button>
    </div>
  );
};

export default Product;
