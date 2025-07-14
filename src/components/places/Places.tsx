import React from "react";
import Card from "../card/Card";
import type { Items } from "../types/types";

interface PlacesProps {
  items: Items[];
}

const Places: React.FC<PlacesProps> = ({ items }) => {
  return (
    <section className="places page__section">
      <ul className="places__list">
        {items.map((element) => {
          return (
            <Card
              name={element.name}
              counter={element.likes}
              image={element.link}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Places;
