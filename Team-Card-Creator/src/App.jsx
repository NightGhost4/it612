import { useState } from "react";
import "./styles.css";
import TeamCard from "./TeamCard";
import CardCreator from "./CardCreator";

export default function App() {
  const [cards, setCards] = useState([
    { name: "Alex Chen", role: "Team Lead", email: "alex@example.com", emoji: "🚀" },
    { name: "Jordan Smith", role: "Developer", email: "jordan@example.com", emoji: "💻" },
  ]);

  const addCard = (newCard) => {
    setCards([...cards, newCard]);
  };

  const clearAll = () => {
    setCards([]);
  };

  const removeCard = (index) => {
    setCards(cards.filter((_, i) => i !== index));
  };

  return (
    <div className="app">
      <h1>Team Card Creator</h1>
      <p>Total team members: {cards.length}</p>
      <CardCreator onAddCard={addCard} />
      {cards.length > 0 && (
        <button onClick={clearAll} style={{ marginBottom: "20px" }}>
          Clear All Cards
        </button>
      )}
      {cards.length === 0 ? (
        <p>No team members yet. Create one above!</p>
      ) : (
        <div className="card-grid">
          {cards.map((card, index) => (
            <TeamCard
              key={index}
              name={card.name}
              role={card.role}
              email={card.email}
              emoji={card.emoji}
              onRemove={() => removeCard(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
