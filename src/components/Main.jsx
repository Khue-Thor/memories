import React from "react";
import Card from "./Card";

const Main = ({ card, onCardClick }) => {
  return (
    <main className="m-4">
      <ul className="flex flex-wrap gap-4">
        <Card card={card} onCardClick={onCardClick} key={card} />
      </ul>
    </main>
  );
};

export default Main;
