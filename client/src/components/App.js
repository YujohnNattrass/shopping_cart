import React from "react";
import {useState, useEffect } from "react"
import Header from "./header"
import Main from "./main"
import data from "../lib/data"
const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(data)
  }, [])

  return (
    <div id="app">
      <Header />
      <Main products={products} />
    </div>
  );
};

export default App;
