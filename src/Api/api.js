import axios from "axios";

export const getAllCategory = (callback) => {
  axios
    .get("https://fakestoreapi.com/products/categories")
    .then((res) => {
      callback(res.data);
    })
    .catch((res) => {
      console.log(res);
    });
};

export const getAllProduct = (callback) => {
  axios
    .get(`https://fakestoreapi.com/products/`)
    .then((res) => {
      callback(res.data);
    })
    .catch((res) => {
      console.log(res);
    });
};

export const getNewCart = (callback) => {
  axios
    .get(`https://fakestoreapi.com/products`)
    .then((res) => {
      callback(res.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getJewelery = (callback) => {
  axios
    .get(`https://fakestoreapi.com/products/category/jewelery`)
    .then((res) => {
      callback(res.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getElectronics = (callback) => {
  axios
    .get(`https://fakestoreapi.com/products/category/electronics`)
    .then((res) => {
      callback(res.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getMensClothing = (callback) => {
  axios
    .get(`https://fakestoreapi.com/products/category/men's clothing`)
    .then((res) => {
      callback(res.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getWomenClothing = (callback) => {
  axios
    .get(`https://fakestoreapi.com/products/category/women's clothing`)
    .then((res) => {
      callback(res.data);
    })
    .catch((error) => {
      console.log(error);
    });
};