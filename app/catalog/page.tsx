"use client";
import { ProductGrid } from "@/components/ui/ProductGrid";

export default function CatalogPage() {
  const products = [
    {
      id: 1,
      name: "Fone Bluetooth",
      price: 199.9,
      image: "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 2,
      name: "Teclado Mecânico RGB",
      price: 349.9,
      image: "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 3,
      name: "Mouse Gamer",
      price: 159.9,
      image: "https://images.unsplash.com/photo-1610394210780-870d5e30cc02?auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 4,
      name: "Monitor 27” Full HD",
      price: 899.9,
      image: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=500&q=60",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-3">
          Catálogo de Produtos
        </h1>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Explore nossa seleção de produtos e adicione ao carrinho para prosseguir ao checkout.
        </p>
      </div>

      <ProductGrid products={products} />
    </section>
  );
}
