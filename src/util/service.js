import products from "../data/data.json"
import api from './api.js';
import axios from 'axios';

//funciuon encargada de obtener todos los productos
export async function fetchAllProducts(){
    return products;
}

export async function fetchProduct(path) {
    console.log("Renderizando el path desde el service: ", path);
    const product = products.catalogue.children.find((prod) => prod.path === path);
    return product;
}

export const listaProductos = async () => {
    const response = await api.get('/productos');
    return response.data;
}

export async function fetchProductById(id) {
    const response = await axios.get(`http://localhost:8000/api/productos/${id}`);
    return response.data;
  }