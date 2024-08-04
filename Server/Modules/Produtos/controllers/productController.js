import ProductData from "../services/ProductData.js";
const { QueryListOfProducts, QueryProductById } = ProductData;

const GetAllProducts = async (req, res) => {
    const ProductList = await QueryListOfProducts();

    // Implemente a lógica de negócios e retorne o resultado

    return res.json(ProductList);
};

const GetProduct = async (req, res) => {
    const ProductId = req.params.id;
    const Product = await QueryProductById(ProductId);

    // Implemente a lógica de negócios e retorne o resultado 

    return res.json(Product);
};

export default {
    GetAllProducts,
    GetProduct,
};