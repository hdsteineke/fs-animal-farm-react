import React from 'react';
import './Animal.css';

export default function Animal({ animal: { name, type, says } }) {
  return (
    <div className="animal">
      <h2>{name}</h2>
      <h3>{type}</h3>
      <h4>{says}</h4>
      <img src={`/images/${type}.svg`} />
    </div>
  );
}
