import axios from "axios";

const apiClient = {
  fetchProducts(callback) {
    axios.get("/api/products")
    .then(response => {
      return response.data;
    }).then(products => {
      callback(products)
    }).catch(e => {
      console.log(e);
    })
  },
  deleteProduct(id, callback) {
    axios.delete(`/api/products/${id}`)
    .then(() => {
      callback(id)
    })
    .catch(e => {
      console.log(e);
    })
  },
  editProduct(id, info, callback) {
    axios.put(`/api/products/${id}`, info)
    .then(response => {
      return response.data
    }).then((item) => {
      callback(id, item)
    }).catch(e => {
      console.log(e);
    })
  },
  addProduct(product, callback) {
    axios.post("/api/products", product)
    .then(response => {
      return response.data;
    }).then(product => {
      callback(product);
    }).catch(e => {
      console.log(e);
    });
  },
  fetchCart(callback) {
    axios.get('/api/cart')
    .then(response => {
      return response.data
    }).then(items => {
      callback(items);
    }).catch(e => {
      console.log(e);
    })
  },
  addToCart(item, callback) {
    axios.post(`/api/cart`, item)
    .then(response => {
      return response.data
    }).then(item => {
      callback(item);
    }).catch(e => {
      console.log(e);
    })
  },
  checkout(callback) {
    axios.post("/api/cart/checkout")
    .then(() => {
      callback();
    })
  }
}

export default apiClient;