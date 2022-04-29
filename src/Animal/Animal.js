import React from 'react';

export default function Animal({ animal: { name, type, says } }) {
  return (
    <div className="animal">
      <p>{name}</p>
      <p>{type}</p>
      <p>{says}</p>
      <img src={`/images/${type}.svg`} />
    </div>
  );
}
