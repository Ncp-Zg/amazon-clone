import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStatevalue } from "./StateProvider";
import Subtotal from "./Subtotal";

const Checkout = () => {
  const [{ basket,user }, dispatch] = useStatevalue();

  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />

        <div>
          <h3>Hello, {user?.email}</h3>
          <h2 className="checkout_title">Your shopping Basket</h2>

          {basket.map((item, index) => (
            <CheckoutProduct
            key={index} 
            id={item.id} 
            rating={item.rating}
            price={item.price}
            image={item.image}
            title={item.title}
             />
          ))}

          {/* CheckoutProducts */}
          {/* CheckoutProducts */}
          {/* CheckoutProducts */}
        </div>
      </div>

      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
