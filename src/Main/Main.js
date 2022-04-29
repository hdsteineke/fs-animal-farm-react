import React from 'react';
import backgroundImg from '../background.png';
import { animals } from '../data';
import AnimalList from '../AnimalList/AnimalList.js';
import './Main.css';


export default function Main() {
  return (
    <main style={{ backgroundImage: `url(${backgroundImg})` }}>
      <AnimalList animals={animals} />
    </main>);

}
