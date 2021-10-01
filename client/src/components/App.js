import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Header from "./Header";
import Main from "./Main";
import { getAllCartItems } from "../lib/actions/cart";
import { getAllProducts } from "../lib/actions/products";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts())
  }, [dispatch]);

  useEffect(() => {
    dispatch(getAllCartItems())
  }, [dispatch]);

  return (
    <div id="app">
      <Header />
      <Main />
    </div>
  );
};

export default App;
