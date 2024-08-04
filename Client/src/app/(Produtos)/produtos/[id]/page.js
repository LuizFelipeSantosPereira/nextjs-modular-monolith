import { notFound } from 'next/navigation';

async function fetchProduct(id) {
    try {
        const res = await fetch(`http://localhost:8080/Loja/${id}`);
        if (!res.ok) {
            throw new Error('Failed to fetch');
        }
        return res.json();
    } catch (error) {
        console.error(error);
        return null;
    }
}

export default async function Produto({ params }) {
    const { id } = params;
    const product = await fetchProduct(id);

    if (!product) {
        return notFound(); // Mostra tela 404 se a pagina não for encontrada
    }

    return (
        <div className="container mx-auto p-8">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col sm:flex-row items-start p-6 border border-gray-200">
                <img
                    src={product.image}
                    alt={product.title}
                    className="w-full sm:w-48 h-48 object-cover rounded-md mb-4 sm:mb-0 sm:mr-6"
                />
                <div className="flex-1">
                    <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.title}</h1>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <p className="text-xl font-bold text-gray-900 mb-4">${product.price.toFixed(2)}</p>
                    <p className="text-sm text-gray-500 mb-2">
                        <strong>Categoria:</strong> {product.category}
                    </p>
                    <p className="text-sm text-gray-500">
                        <strong>Avaliação:</strong> {product.rating.rate} ({product.rating.count} reviews)
                    </p>
                </div>
            </div>
        </div>
    );
}
