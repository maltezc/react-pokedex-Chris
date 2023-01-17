import React from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css";
import Pokelist from "./Pokelist";

/** Pokedex: Display of all cards
 *
 * Props:
 * - pokemon: array of cards
 */

function Pokedex({ pokemon=Pokelist }) {
  return (
    <div className="Pokedex">
      <h1 className="Pokedex-title">Pokedex</h1>
      <div className="Pokedex-cards">
        {pokemon.map((p) => (
          <Pokecard id={p.id} name={p.name} type={p.type} />
        ))}
      </div>
    </div>
  );
}
// react bootstrap
export default Pokedex;
