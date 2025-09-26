import React, { useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Componente Modal: Uma janela de diálogo reutilizável que sobrepõe a página.
 * @param {boolean} isOpen - Controla a visibilidade do modal.
 * @param {function} onClose - Função para fechar o modal.
 * @param {string} title - O título exibido no cabeçalho do modal.
 * @param {React.ReactNode} children - O conteúdo a ser exibido dentro do modal.
 */
export default function Modal({ isOpen, onClose, title, children }) {
  // Efeito para adicionar e remover um event listener para a tecla 'Escape'.
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        onClose(); // Fecha o modal se a tecla 'Esc' for pressionada.
      }
    };
    window.addEventListener('keydown', handleEsc);

    // Função de limpeza: remove o event listener quando o componente é desmontado.
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]); // O array de dependências garante que o efeito só seja recriado se a função onClose mudar.

  return (
    // AnimatePresence permite animar a entrada e saída de componentes.
    <AnimatePresence>
      {isOpen && (
        <motion.div
          // Animações de fade-in e fade-out para o fundo do modal.
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
          onClick={onClose} // Permite fechar o modal clicando no fundo.
          // Atributos de acessibilidade para leitores de tela.
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <motion.div
            // Animações de slide e fade para o conteúdo do modal.
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            className="bg-gray-800 text-white rounded-lg shadow-lg max-w-md w-full mx-4 p-6 relative"
            onClick={(e) => e.stopPropagation()} // Impede que o clique no conteúdo feche o modal.
          >
            <button 
              onClick={onClose} 
              className="absolute top-2 right-2 text-gray-400 hover:text-white text-2xl leading-none"
              aria-label="Fechar modal" // Acessibilidade: descreve a função do botão.
            >
              &times;
            </button>
            <h3 id="modal-title" className="text-xl font-bold mb-4">{title}</h3>
            <div>{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}