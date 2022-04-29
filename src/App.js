import Header from './Header/Header.js';
import Footer from './Footer/Footer.js';
import Main from './Main/Main.js';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header text="Welcome to Life on the Farm" />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
