import Link from 'next/link';
async function fetchProducts() {
  try {
    const res = await fetch('http://localhost:8080/Loja/');
    if (!res.ok) {
      throw new Error('Falha na busca');
    }
    return res.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}
export default async function Produtos() {
  const products = await fetchProducts();

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-extrabold text-cyan-800 mb-8">Produtos</h1>
      <ul className="space-y-6">
        {products.map((product) => (
          <li key={product.id} className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col sm:flex-row items-start p-6 border border-gray-200">
            <img
              src={product.image}
              alt={product.title}
              className="w-full sm:w-48 h-48 object-cover rounded-md mb-4 sm:mb-0 sm:mr-6"
            />
            <div className="flex-1">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">{product.title}</h2>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <div className="flex justify-between items-center">
                <p className="text-lg font-bold text-gray-900">${product.price.toFixed(2)}</p>
                <p className="text-sm text-gray-500">
                  <strong>Categoria:</strong> {product.category}
                </p>
              </div>
              <p className="text-sm text-gray-500 mt-2">
                <strong>Avaliação:</strong> {product.rating.rate} ({product.rating.count} reviews)
              </p>
              <Link href={`/produtos/${product.id}`} className="text-blue-500 hover:underline mt-4 block">View Details</Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
