import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <h1 className="text-4xl font-extrabold mb-4">Bem vindo à Loja</h1>
      <div>
        <Link
          href="/produtos"
          passHref
          id="theme-toggle"
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
        >
          Conferir Produtos
        </Link>
      </div>
    </div>
  );
}