import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 border-t border-gray-200 dark:border-gray-700 mt-16 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg"></div>
              <span className="text-lg font-bold text-gray-800 dark:text-white">Samuel Desenvolvedor Web</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 max-w-md">
              Sistema desenvolvido como parte de comprovar conhecimentos. Explore todas as funcionalidades disponíveis.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-800 dark:text-white mb-4">Navegação</h4>
            <ul className="space-y-2">
              <li><Link href="/catalog" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Dashboard</Link></li>
              <li><Link href="/catalog" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Relatórios</Link></li>
              <li><Link href="/login" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Login</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-800 dark:text-white mb-4">Contato</h4>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li>samuelsantanadasilva8@gmail.com</li>
              <li>+55 (61) 99107-6831</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-200 dark:border-gray-700 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Samuel Desenvolvedor Web - Sistema de Demonstração. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
