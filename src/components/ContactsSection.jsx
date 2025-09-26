import React, { useState } from 'react';

/**
 * Componente ContactsSection: Renderiza o formulário de contato.
 * Utiliza o padrão de "componente controlado" do React para gerenciar os dados do formulário.
 */
export default function ContactsSection() {
  // Estado para armazenar os dados dos campos do formulário.
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: ''
  });
  // Estado para fornecer feedback ao usuário sobre o status do envio.
  const [status, setStatus] = useState('');

  // Atualiza o estado `formData` sempre que o usuário digita em um campo.
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Lida com o envio do formulário de forma assíncrona.
  const handleSubmit = async (e) => {
    e.preventDefault(); // Previne o comportamento padrão de recarregar a página.
    setStatus('Enviando...');
    try {
      // Envia os dados do formulário para o serviço Formspree.
      const response = await fetch('https://formspree.io/f/xgvlqykd', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        setStatus('Mensagem enviada com sucesso!');
        setFormData({ nome: '', email: '', mensagem: '' }); // Limpa o formulário.
      } else {
        setStatus('Ocorreu um erro ao enviar a mensagem.');
      }
    } catch (error) {
      console.error('Erro no envio do formulário:', error);
      setStatus('Ocorreu um erro ao enviar a mensagem.');
    }
  };

  return (
    <section id="contato" className="py-20 text-white">
      <h2 className="text-center mb-20 text-4xl md:text-5xl font-bold">Bora trocar uma ideia! <span className="text-blue-400">🤙</span></h2>
      <div className="flex justify-center">
        <div className="w-full max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="p-6 border border-gray-600 rounded-lg shadow-lg bg-gray-700">
            <div className="mb-4">
              <input 
                required 
                name="nome" 
                type="text" 
                className="w-full px-3 py-2 bg-gray-800 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Teu nome" 
                value={formData.nome} // O valor do campo é controlado pelo estado.
                onChange={handleChange} // A função de onChange atualiza o estado.
              />
            </div>
            <div className="mb-4">
              <input 
                required 
                name="email" 
                type="email" 
                className="w-full px-3 py-2 bg-gray-800 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Teu e-mail" 
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <textarea 
                required 
                name="mensagem" 
                rows="5" 
                className="w-full px-3 py-2 bg-gray-800 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Tua mensagem"
                value={formData.mensagem}
                onChange={handleChange}
              ></textarea>
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 mt-4">
              <i className="fas fa-paper-plane mr-2"></i>Enviar Mensagem
            </button>
            {/* Exibe a mensagem de status do envio do formulário. */}
            {status && <div className="mt-4 text-center text-white text-sm">{status}</div>}
          </form>
        </div>
      </div>
    </section>
  )
}