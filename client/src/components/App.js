import React from "react";
import {useState, useEffect } from "react"
import Header from "./Header"
import Main from "./Main"
import axios from "axios"

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async() => {
      const response = await axios.get("/api/products")

      setProducts(response.data)
    }
    fetchProducts()
  }, [])

  const onSubmitNewProduct = async (product, callback) => {
    try {
      const response = await axios.post("/api/products", product)
      console.log(response)
      setProducts(products.concat(response.data))
      if (callback) {
        callback()
      }
    } catch (e) {
      console.log(e)
    }
  }

  const onDeleteProduct = async (productID) => {
    try {
      const response = await axios.delete(`/api/products/${productID}`)
      console.log(response)
      setProducts(products.filter(product => product._id !== productID))
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div id="app">
      <Header />
      <Main products={products} onSubmit={onSubmitNewProduct} onDelete={onDeleteProduct}/>
    </div>
  );
};

export default App;
