import React from 'react';

export default function GameItem({ game, onEdit, onDelete }) {
  return (
    <div className="gameCard">
        <img className='gameImg' src={game.image} alt={game.image} />
        <div className="gameCard__name">{game.name}</div>
        <span className="gameCard__category">{game.category}</span>
        <div className="gameCard__desc">{game.description}</div>
        <div className="gameCard__footer">
            <div className="gameCard__price">{game.price.toLocaleString('ru-RU')} ₽</div>
            <div className="gameCard__stock">На складе: {game.stock} шт.</div>
        </div>
        <div className="gameCard__actions">
            <button className="btn" onClick={() => onEdit(game)}>Редактировать</button>
            <button className="btn btn--danger" onClick={() => onDelete(game.id)}>Удалить</button>
        </div>
    </div>
  );
}
