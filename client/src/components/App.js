import React from "react";
import {useState, useEffect } from "react"
import Header from "./header"
import Main from "./main"
import axios from "axios"

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const products = await axios.get('http://localhost:5000/api/products')
      setProducts(products.data)
    }
    getData();
  }, [])

  return (
    <div id="app">
      <Header />
      <Main products={products} setProducts={setProducts} />
    </div>
  );
};

export default App;
