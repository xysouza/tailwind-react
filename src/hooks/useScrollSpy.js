import { useState, useEffect } from 'react';

/**
 * Hook customizado (useScrollSpy) para "espiar" a posição de rolagem da página.
 * @param {string[]} selectors - Um array de seletores de CSS para as seções que devem ser monitoradas.
 * @param {object} options - Opções de configuração, como o `offset`.
 * @returns {string} O ID do seletor que está atualmente ativo na tela.
 */
export function useScrollSpy(selectors, options) {
  // Estado para armazenar o ID da seção ativa.
  const [activeId, setActiveId] = useState();

  // Efeito que executa a lógica de scroll.
  useEffect(() => {
    const onScroll = () => {
      const scrollPosition = window.scrollY;
      // Mapeia os seletores para os elementos DOM correspondentes.
      const elements = selectors.map(selector => document.querySelector(selector));
      
      // Encontra o primeiro elemento que está na posição de scroll atual.
      const activeElement = elements.find(el => {
        if (!el) return false;
        const { offsetTop, offsetHeight } = el;
        // A lógica considera um `offset` para ajustar quando o link se torna ativo.
        return scrollPosition >= offsetTop - options.offset && scrollPosition < offsetTop + offsetHeight - options.offset;
      });

      if (activeElement) {
        setActiveId(activeElement.id);
      }
    };

    // Adiciona o listener de scroll e o remove quando o componente é desmontado.
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [selectors, options]); // O efeito é re-executado se os seletores ou opções mudarem.

  return activeId;
}
