import "./styles.css";
import React, { useReducer, useEffect } from "react";
import Products from "./components/Products";
import Cart from "./components/Cart";
import { cartReducer } from "./reducers/cartReducer";
export default function App() {
  const [state, dispatch] = useReducer(cartReducer, {
    products: [],
    cart: []
  });

  const fetchProducts = async () => {
    await fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.products);
        dispatch({
          type: "ADD_PRODUCTS",
          payload: data.products
        });
      });
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div
      style={{
        display: "flex"
      }}
    >
      <Products state={state} dispatch={dispatch} />
      <Cart state={state} dispatch={dispatch} />
    </div>
  );
}
