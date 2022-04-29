import backgroundImg from '../background.png';
import './Main.css';

import React from 'react';

export default function Main() {
  return <main style={{ backgroundImage: `url(${backgroundImg})` }}></main>;
}
