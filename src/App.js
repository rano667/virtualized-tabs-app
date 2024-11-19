import React, { useState } from 'react';
import VirtualizedTabs from './components/VirtualizedTabs';

const App = () => {
  const [selectedCard, setSelectedCard] = useState(1);

  const cards = [
    { id: 1, title: 'Card 1' },
    { id: 2, title: 'Card 2' },
    { id: 3, title: 'Card 3' },
  ];

  return (
    <div className="App" style={{ padding: '20px' }}>
      <h1>Virtualized Tabs with Card Switching</h1>

      {/* Render cards */}
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        {cards.map((card) => (
          <div
            key={card.id}
            style={{
              padding: '20px',
              border: '1px solid #ccc',
              cursor: 'pointer',
              backgroundColor: card.id === selectedCard ? '#007bff' : '#f8f9fa',
              color: card.id === selectedCard ? '#fff' : '#000',
            }}
            onClick={() => setSelectedCard(card.id)}
          >
            {card.title}
          </div>
        ))}
      </div>

      {/* Render VirtualizedTabs for the selected card */}
      <VirtualizedTabs key={selectedCard} />
    </div>
  );
};

export default App;
