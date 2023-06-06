import React from "react";
import Card from "./Card";

const Main = ({ cards, onCardClick, onLikeHover }) => {
  return (
    <main className="m-4">
      <ul className="flex flex-wrap gap-4">
        {cards.map((card) => {
          return (
            <Card card={card} onCardClick={onCardClick} key={card.id} onLikeHover={onLikeHover} />
          );
        })}
      </ul>
    </main>
  );
};

export default Main;
