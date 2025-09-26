import React, { useState } from 'react';
import Modal from './Modal';
import ProjectCard from './ProjectCard';
// Importa os dados dos projetos de um arquivo separado para manter o componente limpo.
import { projects } from '../data/projects.jsx';

/**
 * Componente ProjectsSection: Exibe uma grade de projetos.
 * Gerencia a lógica para abrir e fechar o modal de detalhes de cada projeto.
 */
export default function ProjectsSection() {
  // Estado para armazenar qual projeto está selecionado para ser exibido no modal.
  // `null` significa que nenhum modal está aberto.
  const [selectedProject, setSelectedProject] = useState(null);

  // Funções para controlar a visibilidade do modal.
  const openModal = (project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  return (
    <section id="projetos" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center mb-20 text-4xl md:text-5xl font-bold">Meus Projetos <span className="text-yellow-500">🚀</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Mapeia o array de projetos para renderizar um componente ProjectCard para cada um. */}
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} onOpenModal={openModal} />
          ))}
        </div>
      </div>
      {/* 
        O Modal é renderizado aqui, mas só é visível quando `selectedProject` não é nulo.
        Passamos os dados do projeto selecionado e a função de fechar para o modal.
      */}
      <Modal 
        isOpen={!!selectedProject} 
        onClose={closeModal} 
        title={selectedProject?.title} 
      >
        {selectedProject?.modalContent}
      </Modal>
    </section>
  );
}