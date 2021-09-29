import React from "react";
import { useState, useEffect } from "react";
import Header from "./Header";
import Main from "./Main";
import axios from "axios";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get("/api/products");

      setProducts(response.data);
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    const fetchCart = async () => {
      const response = await axios.get("/api/cart");

      setCart(response.data);
    };
    fetchCart();
  }, []);

  const onSubmitNewProduct = async (product, callback) => {
    try {
      const response = await axios.post("/api/products", product);
      setProducts(products.concat(response.data));
      if (callback) {
        callback();
      }
    } catch (e) {
      console.log(e);
    }
  };

  const onDeleteProduct = async (productID) => {
    try {
      await axios.delete(`/api/products/${productID}`);
      setProducts(products.filter((product) => product._id !== productID));
    } catch (e) {
      console.log(e);
    }
  };

  const onAddToCart = async (product) => {
    const body = {
      productId: product._id,
      title: product.title,
      price: product.price,
      quantity: product.quantity - 1,
    };
    if (product.quantity <= 0) return;
    try {
      const response = await axios.post(`/api/cart`, body);
      let newCart = [];
      let same = true;
      for (let i = 0; i < cart.length; i++) {
        if (cart[i]._id === response.data._id) {
          newCart[i] = { ...cart[i], quantity: cart[i].quantity + 1 };
          same = false;
        } else {
          newCart[i] = cart[i];
        }
      }
      if (same) {
        newCart = newCart.concat(response.data);
      }
      setCart(newCart);
      onEditProduct(product._id, body);
    } catch (e) {
      console.error(e);
    }
  };

  const onEditProduct = async (id, newInfo) => {
    try {
      const res = await axios.put(`/api/products/${id}`, newInfo);
      setProducts(
        products.map((p) => {
          if (p._id === id) {
            return { id: id, ...res.data };
          }
          return p;
        })
      );
    } catch (e) {
      console.error(e);
    }
  };

  const handleCheckout = async () => {
    try {
      await axios.post("/api/cart/checkout");
      setCart([]);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div id="app">
      <Header cart={cart} handleCheckout={handleCheckout} />
      <Main
        onAddToCart={onAddToCart}
        onEditProduct={onEditProduct}
        setProducts={setProducts}
        products={products}
        onSubmit={onSubmitNewProduct}
        onDelete={onDeleteProduct}
      />
    </div>
  );
};

export default App;
