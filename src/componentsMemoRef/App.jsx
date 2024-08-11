import { useCallback, useId, useMemo, useState } from "react";
import styles from "./App.module.css";
import { Button, Counter, PlanetsList, Player } from "./components";

const planets = ["Earth", "Mars", "Jupiter", "Venus"];

const App = () => {
  const [query, setQuery] = useState("");
  const [click, setClick] = useState(0);

  const filterId = useId();

  const handleChange = (e) => setQuery(e.target.value);

  const increaseCount = useCallback(
      () => setClick((prevState) => prevState + 1),
    []
  );

  const decreaseCount = useCallback(
    () => setClick((prevState) => prevState - 1),
    []
  );

  const filterPlanet = useMemo(
    () =>
      planets.filter((planet) =>
        planet.toLowerCase().includes(query.trim().toLowerCase())
      ),
    [ query]
  );
  return (
    <div className={styles.container}>
      <label htmlFor={filterId}>
        Add new planet
        <input
          id={filterId}
          type="text"
          onChange={handleChange}
          value={query}
          name="filter"
        />
      </label>
      <PlanetsList planets={filterPlanet} />
      <Counter counter={click} />
      <Button handleClick={increaseCount}>+</Button>
          <Button handleClick={decreaseCount}>-</Button>
      <Player source="http://media.w3.org/2010/05/sintel/trailer.mp4" />
    </div>
  );
};

export default App;
