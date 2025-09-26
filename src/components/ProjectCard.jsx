import React from 'react';

/**
 * Componente ProjectCard: Um card individual para exibir um resumo do projeto.
 * @param {object} project - O objeto contendo todos os dados do projeto.
 * @param {function} onOpenModal - Função para ser chamada quando o botão "Ver mais" é clicado.
 */
export default function ProjectCard({ project, onOpenModal }) {
  // Função utilitária para determinar a cor da tag com base no seu conteúdo.
  // Isso permite uma estilização dinâmica e centralizada.
  const getTagColor = (tag) => {
    switch (tag) {
      case 'React Native':
      case 'PHP':
      case 'JavaScript':
        return 'bg-blue-500 text-white';
      case 'Expo':
      case 'Python':
        return 'bg-green-500 text-white';
      case 'AsyncStorage':
      case 'CSS':
        return 'bg-blue-600 text-white';
      default:
        return 'bg-gray-200 text-gray-800';
    }
  };

  return (
    <div className="bg-gray-700 text-white rounded-lg shadow-lg overflow-hidden h-full flex flex-col">
      <img className="w-full h-48 object-cover" src={project.image} alt={project.alt} />
      <div className="p-6 flex flex-col flex-grow">
        <h5 className="text-xl font-bold mb-2">{project.title}</h5>
        <div className="mb-4">
          {project.tags.map((tag, index) => (
            <span key={index} className={`inline-block px-2 py-1 rounded text-sm mr-2 ${getTagColor(tag)}`}>
              {tag}
            </span>
          ))}
        </div>
        <p className="text-gray-300 flex-grow">{project.description}</p>
        {/* O botão chama a função `onOpenModal`, passando os dados do projeto atual. */}
        <button onClick={() => onOpenModal(project)} className="inline-block bg-transparent border border-white text-white hover:bg-white hover:text-gray-900 px-4 py-2 rounded mt-auto">
          <i className="fas fa-eye mr-2"></i>Ver mais
        </button>
      </div>
    </div>
  );
}
