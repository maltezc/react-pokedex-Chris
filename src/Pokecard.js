import React from "react";
import "./Pokecard.css";
const IMAGE_BASE_URL =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

/** Pokecard: Single Pokemon card
 *
 * Props:
 * - name
 * - image
 * - type
 */

function Pokecard({ name, type, id }) {
  const image = `${IMAGE_BASE_URL}${id}.png`;

  return (
    <div className="Pokecard">
      <div className="Pokecard-name">{name}</div>
      <img className="Pokecard-image" src={image} alt={name} />
      <div className="Pokecard-type">Type: {type}</div>
    </div>
  );
}

export default Pokecard;
