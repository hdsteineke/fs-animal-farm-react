import React from 'react';
import './Header.css';

export default function Header({ greeting }) {
  return (
    <header>
      <h1>{greeting}</h1>
    </header>
  );
}
