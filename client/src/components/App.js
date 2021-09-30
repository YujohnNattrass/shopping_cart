import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Header from "./Header";
import Main from "./Main";
import axios from "axios";
import { getAllCartItems } from "../lib/actions/cart";
import { getAllProducts } from "../lib/actions/products";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get("/api/products");
      const prods = response.data;
      dispatch(getAllProducts(prods));
    };
    fetchProducts();
  }, [dispatch]);

  useEffect(() => {
    const fetchCart = async () => {
      const response = await axios.get("/api/cart");
      const items = response.data;
      dispatch(getAllCartItems(items));
    };
    fetchCart();
  }, [dispatch]);

  return (
    <div id="app">
      <Header />
      <Main />
    </div>
  );
};

export default App;
