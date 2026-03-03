import React from 'react';
import GameItem from './GameItem';

export default function GamesList({ games, onEdit, onDelete }) {
  if (!games.length) {
    return <div className="empty">Товаров пока нет</div>;
  }
  return (
    <div className="gameGrid">
      {games.map((g) => (
        <GameItem key={g.id} game={g} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </div>
  );
}
