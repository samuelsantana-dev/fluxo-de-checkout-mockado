import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24 flex flex-col items-center text-center">
      <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white mb-6">
        Bem-vindo ao <span className="text-blue-600">Checkout Mockado</span>
      </h1>

      <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10">
        Sistema desenvolvido para simular um fluxo completo de compra — do catálogo ao pagamento. 
        Explore os produtos disponíveis, adicione ao carrinho e finalize seu pedido com Pix, Cartão ou Boleto.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 w-full max-w-5xl">
        <Link href="/catalog" className="block">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow h-full">
            <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 4h18M3 10h18M3 16h18M3 22h18"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              Catálogo de Produtos
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Explore a lista de produtos disponíveis e veja detalhes antes de adicionar ao carrinho.
            </p>
          </div>
        </Link>

        {/* Carrinho */}
        <Link href="/cart" className="block">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow h-full">
            <div className="w-14 h-14 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.5 6H19m0 0a2 2 0 11-4 0m4 0a2 2 0 11-4 0"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              Carrinho de Compras
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Veja os produtos adicionados, atualize quantidades e prossiga para o checkout.
            </p>
          </div>
        </Link>

        <Link href="/checkout" className="block">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow h-full">
            <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-purple-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 14l2-2m0 0l2-2m-2 2v6m0-6V4m-6 8h12"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              Checkout e Pagamento
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Finalize sua compra escolhendo o método de pagamento preferido — Pix, Cartão ou Boleto.
            </p>
          </div>
        </Link>
      </div>

      <div className="mt-16 flex flex-col sm:flex-row gap-4">
        <Link
          href="/catalog"
          className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-blue-700 transition-colors"
        >
          Começar Agora
        </Link>
      </div>
    </section>
  );
}
