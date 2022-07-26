import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Welcome } from "./components/pages/welcome";
import { Login } from "./components/forms/login";
import { SignUp } from "./components/forms/signUp";
import NotFound from "./components/pages/NotFound";
import { Store } from "./components/pages/store";
import axios from "axios";
import { ProductContext } from "./components/context-hook/productContext";
import { CartContext } from "./components/context-hook/cartContext";
import { View } from "./components/pages/view";
import { Navbar } from "./components/navbar";
import { Cart } from "./components/pages/cart";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [token, setToken] = useState("");

  //setting token if logged In
  function giveToken(data){
    setToken(data);
  }

  //fetch products
  useEffect(() => {
    axios.get("http://localhost:8080/products").then(function (res) {
      setProducts(res.data);
    });
    refreshCart();
  }, []);

  //fetch cart data
  function refreshCart() {
    axios.get("http://localhost:8080/cart/get").then(function (res) {
      setCart(res.data);
    });
  }

  //add to cart function
  const addToCart = async (item) => {
    if (cart.some((x) => x.name === item.name)) {
      alert("This product is already in cart");
    } else {
      axios.post("http://localhost:8080/cart/post", item).then(function (res) {
        console.log(res.data);
        refreshCart();
      });
    }
  };

  //remove from cart function
  function remove(_id) {
    axios.delete("http://localhost:8080/cart/delete", _id).then(function (res) {
      console.log(res.data);
      refreshCart();
    });
  }

  console.log(products);
  console.log(cart);
  return (
    <div>
      <BrowserRouter>
        <ProductContext.Provider value={products}>
          <CartContext.Provider value={cart}>
            <Navbar token={token} />
            <Routes>
              <Route exact path="/" element={<Welcome />} />
              <Route
                exact
                path="/login"
                element={<Login giveToken={giveToken}/>}
              />
              <Route exact path="/signUp" element={<SignUp />} />
              <Route
                exact
                path="/store"
                element={
                  <div>
                    {
                      <Store
                        products={products.filter(
                          (x) => x.category === "vegetable"
                        )}
                        category={"Vegetable"}
                        addToCart={addToCart}
                      />
                    }
                    {
                      <Store
                        products={products.filter(
                          (x) => x.category === "fruit"
                        )}
                        category={"fruits"}
                        addToCart={addToCart}
                      />
                    }
                    {
                      <Store
                        products={products.filter(
                          (x) => x.category === "snack"
                        )}
                        category={"Snacks"}
                        addToCart={addToCart}
                      />
                    }
                    {
                      <Store
                        products={products.filter(
                          (x) => x.category === "dairy"
                        )}
                        category={"Dairy"}
                        addToCart={addToCart}
                      />
                    }
                    {
                      <Store
                        products={products.filter(
                          (x) => x.category === "bread"
                        )}
                        category={"Bread"}
                        addToCart={addToCart}
                      />
                    }
                  </div>
                }
              />
              <Route
                exact
                path="/product:_id"
                element={<View addToCart={addToCart} />}
              />
              <Route exact path="/my/cart" element={<Cart remove={remove} />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </CartContext.Provider>
        </ProductContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
