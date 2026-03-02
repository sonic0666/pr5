import React, { useEffect, useState } from 'react';

const empty = { name: '', category: '', description: '', price: '', stock: '' };

export default function GameModal({ open, mode, initialGame, onClose, onSubmit }) {
  const [form, setForm] = useState(empty);

  useEffect(() => {
    if (!open) return;
    if (initialGame) {
      setForm({
        name: initialGame.name,
        category: initialGame.category,
        description: initialGame.description,
        price: String(initialGame.price),
        stock: String(initialGame.stock),
      });
    } else {
      setForm(empty);
    }
  }, [open, initialGame]);

  if (!open) return null;

  const set = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = form.name.trim();
    const category = form.category.trim();
    const description = form.description.trim();
    const price = Number(form.price);
    const stock = Number(form.stock);

    if (!name || !category || !description) return alert('Заполните все текстовые поля');
    if (!Number.isFinite(price) || price < 0) return alert('Введите корректную цену');
    if (!Number.isFinite(stock) || stock < 0) return alert('Введите корректное количество');

    onSubmit({ id: initialGame?.id, name, category, description, price, stock });
  };

  return (
    <div className="backdrop" onMouseDown={onClose}>
      <div className="modal" onMouseDown={(e) => e.stopPropagation()} role="dialog" aria-modal="true">
        <div className="modal__header">
          <div className="modal__title">
            {mode === 'edit' ? 'Редактировать товар' : 'Добавить товар'}
          </div>
          <button className="iconBtn" onClick={onClose} aria-label="Закрыть">✕</button>
        </div>
        <form className="form" onSubmit={handleSubmit}>
          <label className="label">
            Название
            <input className="input" value={form.name} onChange={set('name')} placeholder="Например, Каркассон" autoFocus />
          </label>
          <label className="label">
            Категория
            <input className="input" value={form.category} onChange={set('category')} placeholder="Например, Стратегия" />
          </label>
          <label className="label">
            Описание
            <textarea className="textarea" value={form.description} onChange={set('description')} placeholder="Краткое описание игры" />
          </label>
          <div className="formRow">
            <label className="label">
              Цена (₽)
              <input className="input" value={form.price} onChange={set('price')} placeholder="2500" inputMode="numeric" />
            </label>
            <label className="label">
              На складе (шт.)
              <input className="input" value={form.stock} onChange={set('stock')} placeholder="10" inputMode="numeric" />
            </label>
          </div>
          <div className="modal__footer">
            <button type="button" className="btn" onClick={onClose}>Отмена</button>
            <button type="submit" className="btn btn--primary">
              {mode === 'edit' ? 'Сохранить' : 'Добавить'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
