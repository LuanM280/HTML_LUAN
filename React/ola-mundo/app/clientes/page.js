"use client";
import React, { useState, useEffect } from 'react';
import './Clientes.css';

export default function ClientesPage() {
  const [theme, setTheme] = useState("light");
  const [clientes, setClientes] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ id: null, nome: '', email: '' });

  useEffect(() => {
    const savedTheme = localStorage.getItem("app-theme") || "light";
    setTheme(savedTheme);
    fetchClientes();
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("app-theme", newTheme);
  };

  const fetchClientes = async (searchQuery = "") => {
    setLoading(true);
    try {
      const res = await fetch(`/api/clientes?search=${encodeURIComponent(searchQuery)}`);
      const payload = await res.json();
      if (payload.success) {
        setClientes(payload.data);
      } else {
        alert("Erro no servidor: " + payload.error);
      }
    } catch (error) {
      console.error(error);
      alert("Falha ao buscar clientes. Certifique-se que o banco XAMPP está rodando.");
    }
    setLoading(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchClientes(search);
  };

  const openModal = (cliente = null) => {
    if (cliente) {
      setIsEditing(true);
      setFormData(cliente);
    } else {
      setIsEditing(false);
      setFormData({ id: null, nome: '', email: '' });
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setFormData({ id: null, nome: '', email: '' });
  };

  const handleSave = async (e) => {
    e.preventDefault();
    if (!formData.nome.trim()) return alert("O nome é obrigatório.");

    try {
      const method = isEditing ? 'PUT' : 'POST';
      const res = await fetch('/api/clientes', {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();

      if (data.success) {
        closeModal();
        fetchClientes(search); // recarrega a tabela atualizada
      } else {
        alert("Erro: " + data.error);
      }
    } catch (error) {
       console.error("Save error:", error);
       alert("Ocorreu um erro ao salvar o cliente.");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Certeza que deseja remover este cliente permanentemente?")) return;
    
    try {
       const res = await fetch(`/api/clientes?id=${id}`, { method: 'DELETE' });
       const data = await res.json();
       if (data.success) {
         fetchClientes(search); // atualiza a tela
       } else {
         alert("Erro ao excluir: " + data.error);
       }
    } catch (error) {
       console.error("Delete error", error);
       alert("Erro de comunicação ao excluir.");
    }
  };

  return (
    <div className="theme-wrapper" data-theme={theme}>
      <div className="header-container">
        <h1 className="title">Gestão de Clientes</h1>
        <button className="theme-toggle" onClick={toggleTheme}>
           {theme === 'light' ? '🌙 Modo Escuro' : '☀️ Modo Claro'}
        </button>
      </div>

      <div className="crud-container">
        {/* Filtros e Ações */}
        <form className="filters" onSubmit={handleSearch}>
          <input 
            type="text" 
            className="input-field" 
            placeholder="Buscar por nome ou e-mail..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit" className="btn">Pesquisar</button>
          <button type="button" className="btn" onClick={() => openModal()} style={{ marginLeft: 'auto' }}>
            + Novo Cliente
          </button>
        </form>

        {/* Tabela de Dados */}
        {loading ? (
          <div className="empty-state">Carregando dados do banco...</div>
        ) : (
          <div style={{ overflowX: 'auto' }}>
            {clientes.length > 0 ? (
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nome do Cliente</th>
                  <th>E-mail</th>
                  <th>Data de Cadastro</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {clientes.map(cliente => (
                  <tr key={cliente.id}>
                    <td>{cliente.id}</td>
                    <td><strong>{cliente.nome}</strong></td>
                    <td>{cliente.email || '-'}</td>
                    <td>{new Date(cliente.criado_em).toLocaleDateString('pt-BR')}</td>
                    <td className="action-buttons">
                      <button className="btn" style={{ padding: '0.4rem 0.8rem', fontSize: '0.85rem' }} onClick={() => openModal(cliente)}>Editar</button>
                      <button className="btn btn-danger" style={{ padding: '0.4rem 0.8rem', fontSize: '0.85rem' }} onClick={() => handleDelete(cliente.id)}>Remover</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            ) : (
              <div className="empty-state">Nenhum registro encontrado no banco de dados. Tente adicionar um novo cliente!</div>
            )}
          </div>
        )}
      </div>

      {/* Modal Criar/Editar */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>{isEditing ? 'Editar Cliente' : 'Adicionar Novo Cliente'}</h3>
            <form onSubmit={handleSave}>
              <div className="form-group">
                <label>Nome Completo*</label>
                <input 
                  type="text" 
                  className="input-field" 
                  value={formData.nome} 
                  onChange={(e) => setFormData({...formData, nome: e.target.value})} 
                  placeholder="Ex: João da Silva"
                  required
                />
              </div>
              <div className="form-group">
                <label>E-mail</label>
                <input 
                  type="email" 
                  className="input-field" 
                  value={formData.email} 
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="Ex: joao@email.com"
                />
              </div>
              <div className="modal-actions">
                <button type="button" className="btn btn-secondary" onClick={closeModal}>Cancelar</button>
                <button type="submit" className="btn">{isEditing ? 'Salvar Alterações' : 'Criar Cliente'}</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
