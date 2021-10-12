import React from "react";
import "./Home.css";
import Product from "./Product";

const Home = () => {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://m.media-amazon.com/images/I/61mCEE2ceUL._SX1500_.jpg"
          alt=""
        />

        <div className="home_row">
          <Product
            id="12321341"
            title="the lean startup"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={5}
          />
          <Product
            id="49538094"
            title="Amazon Basics L-Shape Computer Desk with Shelves for Storage, 54.3 Inch, Espresso with Black Frame"
            price={59.99}
            image="https://m.media-amazon.com/images/I/71fXDLIiSuL._AC_UL320_.jpg"
            rating={4}
          />
        </div>

        <div className="home_row">
          <Product
            id="4903850"
            title="Power Strip with 6 Feet, Yintar Surge Protector with 6 AC Outlets and 3 USB Ports, 6 Ft Extension Cord for for Home, Office, Dorm Essentials, 2100 Joules, ETL Listed, (Black)"
            price={14.97}
            image="https://m.media-amazon.com/images/I/71qE6chtx+L._AC_UL320_.jpg"
            rating={5}
          />
          <Product
            id="12321341"
            title="Amazon Basics Charging Station Dock for 4 Nintendo Switch Joy-con Controllers - 2.6 Foot Cable, Black"
            price={29.99}
            image="https://m.media-amazon.com/images/I/71SQSraI7rL._AC_UL320_.jpg"
            rating={5}
          />
          <Product
            id="23593044"
            title="Amazon Basics Reusable Silicone Baking Cups, Muffin Liners - Pack of 12, Multicolor"
            price={6.04}
            image="https://m.media-amazon.com/images/I/71kRlcrwKDL._AC_UL320_.jpg"
            rating={5}
          />
        </div>

        <div className="home_row">
          <Product
            id="548965237"
            title="Hbada Ergonomic Executive Office Chair, PU Leather High-Back Desk Chair with Big and Tall Backrest and Cushion, Swivel Rocking Chair with Flip-up Padded Armrest and Adjustable Height, Black"
            price={199.99}
            image="https://m.media-amazon.com/images/I/71Ozio87rRL._AC_UL320_.jpg"
            rating={3}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
