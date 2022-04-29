import Header from './Header/Header.js';
import Footer from './Footer/Footer.js';
import Main from './Main/Main.js';
import { animals } from './data.js';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header text="Welcome to Life on the Farm :)" />
      <Main animals={animals} />

      <Footer email="Contact us: happy@thefarm.com" />
    </div>
  );
}

export default App;
