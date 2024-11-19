// src/components/CardList.js
import React, { useState } from 'react';
import VirtualizedTabs from './VirtualizedTabs';

const CardList = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const cards = [
    { id: 1, title: 'Card 1' },
    { id: 2, title: 'Card 2' },
    { id: 3, title: 'Card 3' },
  ];

  const handleCardClick = (cardId) => {
    setSelectedCard(cardId);
  };

  return (
    <div>
      <h2>Cards</h2>
      <div style={{ display: 'flex', gap: '10px' }}>
        {cards.map((card) => (
          <div
            key={card.id}
            style={{
              border: '1px solid #ccc',
              padding: '20px',
              cursor: 'pointer',
              backgroundColor: selectedCard === card.id ? '#e0f7fa' : '#fff',
            }}
            onClick={() => handleCardClick(card.id)}
          >
            {card.title}
          </div>
        ))}
      </div>

      {selectedCard && (
        <div>
          <h3>Tabs for {cards.find((card) => card.id === selectedCard)?.title}</h3>
          {/* Pass key prop to ensure tabs reset when switching cards */}
          <VirtualizedTabs key={selectedCard} />
        </div>
      )}
    </div>
  );
};

export default CardList;
