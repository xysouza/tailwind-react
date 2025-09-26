import React from "react";

/**
 * Arquivo de dados para os projetos.
 * Centralizar os dados aqui facilita a manutenção e evita poluir os componentes.
 * A extensão do arquivo é .jsx porque o campo `modalContent` contém JSX, que precisa ser processado pelo Vite.
 */
export const projects = [
  {
    id: 'meuCorre',
    title: 'App Meu Corre',
    image: './src/assets/image/projeto3.png',
    alt: 'Imagem do App Meu Corre',
    tags: ['React Native', 'Expo', 'AsyncStorage'],
    description: 'App em React Native e Expo para autônomos gerenciarem suas finanças diárias.',
    modalContent: (
      <div>
        <p>Detalhes completos sobre o App Meu Corre. Inclua links para repositório, demo, etc.</p>
        <a href="#" className="text-blue-500">Ver no GitHub</a>
      </div>
    )
  },
  {
    id: 'delivery',
    title: 'Delivery - ODS 12',
    image: './src/assets/image/projeto1.png',
    alt: 'Imagem do Delivery - ODS 12',
    tags: ['PHP', 'Python', 'JavaScript'],
    description: 'Painel admin responsivo (HTML, CSS, JS, PHP) com bot de WhatsApp em Python.',
    modalContent: (
      <div>
        <p>Detalhes completos sobre o Delivery - ODS 12. Inclua links para repositório, demo, etc.</p>
        <a href="#" className="text-blue-500">Ver no GitHub</a>
      </div>
    )
  },
  {
    id: 'sus',
    title: 'Agendamento de Consultas SUS',
    image: './src/assets/image/projeto2.png',
    alt: 'Imagem do Agendamento de Consultas SUS',
    tags: ['JavaScript', 'PHP', 'CSS'],
    description: 'Site responsivo para otimizar consultas e reduzir filas nos postos de saúde (ODS 3).',
    modalContent: (
      <div>
        <p>Detalhes completos sobre o Agendamento de Consultas SUS. Inclua links para repositório, demo, etc.</p>
        <a href="#" className="text-blue-500">Ver no GitHub</a>
      </div>
    )
  }
];
