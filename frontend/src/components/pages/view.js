import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { ProductContext } from "../context-hook/productContext";
import "./view.css";
import { BiShoppingBag } from "react-icons/bi";

export function View({ addToCart }) {
  const _id = useParams();
  const products = useContext(ProductContext);
  const view = products.find((x) => x._id === _id._id);
  return (
    <div>
      <h1 className="view-heading">--Product Details</h1>
      <div className="view-container" key={view._id}>
        <div className="view-image">
          <img src={view.image} alt="" />
        </div>
        <div className="view-description">
          <p>
            {view.category}--{view.name}
          </p>
          <h1>{view.name}</h1>
          <span className="product-price">${view.price}</span>
          <p>{view.description}</p>
          <Link to="/my/cart">
            <button
              className="product-btn"
              onClick={() =>
                addToCart({
                  name: view.name,
                  category: view.category,
                  image: view.image,
                  price: view.price,
                  description: view.description,
                })
              }
            >
              Add to Cart
              <BiShoppingBag />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
