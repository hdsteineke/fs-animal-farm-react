import React from 'react';
import Animal from '..//Animal/Animal';

export default function AnimalList({ animals }) {
  return (
    <main>
      {animals.map((animal) => 
        (<Animal
          key={animal}
          animal={animal} />
        ))}
    </main>
  );
}
