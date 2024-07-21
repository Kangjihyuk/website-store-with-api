import axios from "axios";

export const getAllCategory = () => {
    axios.get("https://fakestoreapi.com/products/categories").then((res) => {
        console.log(res)
    }).catch((res) => {
        console.log(res)
    })
}