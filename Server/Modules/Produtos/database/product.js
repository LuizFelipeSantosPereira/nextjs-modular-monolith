//exemplo de como seria a implementação de select para o produto

import { getConnection } from 'oracledb';
import dbConfig from '../configs/dbConnections';
import Product from '../models/ProductModel';

async function getProductById(productId) {
    let connection;

    try {
        connection = await getConnection(dbConfig);

        const result = await connection.execute(
            `SELECT id, title, price, description, category, image, rating_rate, rating_count 
                FROM products 
                WHERE id = :id`,
            [productId]
        );

        if (result.rows.length === 0) {
            throw new Error('Product not found');
        }

        const row = result.rows[0];
        return new Product(
            row[0],
            row[1],
            row[2],
            row[3],
            row[4],
            row[5],
            { rate: row[6], count: row[7] }
        );
    } catch (err) {
        console.error(err);
    } finally {
        await connection.close();
    }
}

export default {
    getProductById
};
