import React from 'react';
import { FaRocket } from 'react-icons/fa';
import minhaFoto from '../assets/image/minhaFoto.jpg';

/**
 * Componente HeaderSection: A seção principal de "boas-vindas" do portfólio.
 * Exibe a foto de perfil, um título, uma breve descrição e um botão de call-to-action.
 */
export default function HeaderSection() {
  return (
    // O `id="sobre"` é usado como âncora para a navegação.
    <header className="min-h-screen flex flex-col justify-center items-center text-center text-white py-20 bg-black" id="sobre">
      <div className="max-w-7xl mx-auto px-4">
        {/* A imagem é importada diretamente para que o Vite a processe e otimize. */}
        <img 
          src={minhaFoto} 
          alt="Minha foto" 
          className="w-48 h-48 object-cover mb-6 rounded-full shadow-lg mx-auto"
        />
        <h1 className="text-4xl md:text-5xl font-bold">Salve! Sou Adriano Oliveira <span className="text-blue-500">👨‍💻</span></h1>
        <p className="text-xl mt-2">Desenvolvedor focado em criar soluções <strong>simples, bonitas e funcionais.</strong></p>
        <a 
          className="inline-flex items-center bg-transparent border border-white text-white hover:bg-white hover:text-gray-900 px-6 py-3 rounded-lg text-lg mt-6 transition-colors duration-300"
          href="#projetos" 
          role="button"
        >
          {/* Ícone do React-Icons, uma forma moderna de usar ícones em SVG no React. */}
          <FaRocket className="mr-2" />
          Ver projetos
        </a>
      </div>
    </header>
  )
}
