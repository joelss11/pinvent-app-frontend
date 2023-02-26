import axios from "axios"


export const BACKEND_URL = "http://localhost:5000";
const API_URL = `${BACKEND_URL}/api/products/`


//Create New Product
 const createProduct = async(formData) => {
    const response = await axios.post(API_URL, formData);
    return response.data;
}
//Get all products
const getProducts = async() => {
    const response = await axios.get(API_URL);
    return response.data;
}

//Delete Products
const deleteProducts = async(id) => {
    const response = await axios.delete(API_URL+id);
    return response.data;
}

//Get all products
const getProduct = async(id) => {
    const response = await axios.get(API_URL+id);
    return response.data;
}
//update product
const updateProduct = async(id, formData) => {
    const response = await axios.patch(`${API_URL}${id}`,formData);
    return response.data;
}

const productService = {
    createProduct,
    getProducts,
    getProduct,
    deleteProducts,
    updateProduct
}

export default productService