import React from 'react'
import "./Order.css"
import moment from "moment"
import CheckoutProduct from './CheckoutProduct'
import CurrencyFormat from 'react-currency-format'

const Order = ({order}) => {
    return (
        <div className="order">
            <h2>Order</h2>
            <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
            <p className="order_id">
                <small>{order.id}</small>
            </p>
            {order.data.basket?.map((item,index)=>(
                <CheckoutProduct
                key={index*6454}
                id={item.id}
                rating={item.rating}
                price={item.price}
                image={item.image}
                title={item.title}
                hideButton
              />
            ))}
            
        <CurrencyFormat
          renderText={(value) => (
            <h3 className="order_total">Order Total : {value}</h3>
          )}
          decimalScale={2}
          value={order.data.amount / 100}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
        />
            
        </div>
    )
}

export default Order
