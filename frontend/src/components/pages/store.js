import React from "react";
import "./store.css";
import { BiShoppingBag } from "react-icons/bi";
import { Link } from "react-router-dom";

export function Store({ products, category, addToCart }) {
  return (
    <div>
      <h1 className="view-heading">{category} Items</h1>
      <div className="product-box">
        {products.map((item) => (
          <div className="product-card" key={item._id}>
            <Link to={`/product${item._id}`} className="product-link">
              <img src={item.image} alt="" className="product-img" />
              <div className="product-text-padding">
                <h2>{item.name}</h2>
                <label className="span-box">
                  <span className="product-price">${item.price}</span>
                </label>
                <Link to="/my/cart">
                  <button
                    className="product-btn"
                    onClick={() =>
                      addToCart({
                        name: item.name,
                        category: item.category,
                        image: item.image,
                        price: item.price,
                        description: item.description,
                      })
                    }
                  >
                    Add to Cart
                    <BiShoppingBag />
                  </button>
                </Link>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
