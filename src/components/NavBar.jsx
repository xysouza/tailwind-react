import React, { useState } from 'react';
import { useScrollSpy } from '../hooks/useScrollSpy';

/**
 * Componente NavBar: A barra de navegação principal do site.
 * É fixa no topo e muda de acordo com a rolagem da página.
 */
export default function NavBar() {
  // Estado para controlar a abertura e fechamento do menu em dispositivos móveis.
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Hook customizado que "espia" a posição da rolagem e retorna o ID da seção ativa.
  const activeId = useScrollSpy(['#sobre', '#projetos', '#contato'], { offset: 100 });

  const navLinks = [
    { href: '#sobre', label: 'Sobre mim' },
    { href: '#projetos', label: 'Projetos' },
    { href: '#contato', label: 'Contato' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <a className="text-xl font-bold" href="#">Adriano Oliveira</a>
          <button 
            className="md:hidden p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            type="button" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            // Atributos de acessibilidade para indicar o estado do menu.
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <span className="sr-only">Abrir menu principal</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          {/* Menu para telas maiores (desktop) */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navLinks.map(link => (
              <a 
                key={link.href}
                // Aplica um estilo diferente para o link da seção ativa.
                className={`px-3 py-2 rounded-md text-sm font-medium ${activeId === link.href.substring(1) ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}
                href={link.href}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        {/* Menu para telas menores (mobile) */}
        {isMobileMenuOpen && (
          <div id="mobile-menu" className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map(link => (
                <a 
                  key={link.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${activeId === link.href.substring(1) ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}
                  href={link.href}
                  // Fecha o menu mobile ao clicar em um link.
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}