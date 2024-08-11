import React from "react";

export const PlanetsList = React.memo(function PlanetsList({ planets }) {
  return (
    planets && (
      <ul>
        {planets.map((planet) => (
          <li key={planet}>
            <p>{planet}</p>
          </li>
        ))}
      </ul>
    )
  );
});
