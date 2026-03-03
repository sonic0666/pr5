import './GamesPage.css';
import React, { useEffect, useState } from 'react';
import './GamesPage.css';
import { api } from '../../api';
import GamesList from '../../components/GamesList';
import GameModal from '../../components/GameModal';

export default function GamesPage() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState('create');
  const [editingGame, setEditingGame] = useState(null);

  useEffect(() => {
    loadGames();
  }, []);

  const loadGames = async () => {
    try {
      setLoading(true);
      const data = await api.getGames();
      setGames(data);
    } catch (err) {
      console.error(err);
      alert('Ошибка загрузки товаров');
    } finally {
      setLoading(false);
    }
  };

  const openCreate = () => {
    setModalMode('create');
    setEditingGame(null);
    setModalOpen(true);
  };

  const openEdit = (game) => {
    setModalMode('edit');
    setEditingGame(game);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setEditingGame(null);
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Удалить товар?')) return;
    try {
      await api.deleteGame(id);
      setGames((prev) => prev.filter((g) => g.id !== id));
    } catch (err) {
      console.error(err);
      alert('Ошибка удаления');
    }
  };

  const handleSubmit = async (payload) => {
    try {
      if (modalMode === 'create') {
        const newGame = await api.createGame(payload);
        setGames((prev) => [...prev, newGame]);
      } else {
        const updated = await api.updateGame(payload.id, payload);
        setGames((prev) => prev.map((g) => (g.id === payload.id ? updated : g)));
      }
      closeModal();
    } catch (err) {
      console.error(err);
      alert('Ошибка сохранения');
    }
  };

  return (
    <div className="page">
      <header className="header">
        <div className="header__inner">
          <div className="brand">🎲 BoardGames Shop</div>
          <div className="header__right">React + Express</div>
        </div>
      </header>

      <main className="main">
        <div className="container">
          <div className="toolbar">
            <h1 className="title">Настольные игры</h1>
            <button className="btn btn--primary" onClick={openCreate}>
              + Добавить товар
            </button>
          </div>
          {loading ? (
            <div className="empty">Загрузка...</div>
          ) : (
            <GamesList games={games} onEdit={openEdit} onDelete={handleDelete} />
          )}
        </div>
      </main>

      <footer className="footer">
        <div className="footer__inner">© {new Date().getFullYear()} BoardGames Shop</div>
      </footer>

      <GameModal
        open={modalOpen}
        mode={modalMode}
        initialGame={editingGame}
        onClose={closeModal}
        onSubmit={handleSubmit}
      />
    </div>
  );
}
