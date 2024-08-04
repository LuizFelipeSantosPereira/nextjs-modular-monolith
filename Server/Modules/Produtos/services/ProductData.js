import fetch from 'node-fetch';
//? Importaria o model Produto se estivesse usando o banco de dados
//import Product from '../models/ProductModel.js';

const QueryListOfProducts = async () => {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        return await response.json();
    } catch (error) {
        console.error('Error fetching products:', error);
        //throw error;
        return false;
    } finally {
        //lógica de finalização
    }
};

const QueryProductById = async (id) => {
    try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        return await response.json();
    } catch (error) {
        console.error(`Error fetching product with ID ${id}:`, error);
        // throw error;
        return false;
    } finally {
        //lógica de finalização
    }
};


export default {
    QueryListOfProducts,
    QueryProductById,
};