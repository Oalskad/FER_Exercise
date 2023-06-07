import logo from './logo.svg';
import './App.css';
import Navigarion from './components/Navigation';
import Player from './components/Players';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Navigarion/>
      <Player/>
      <Footer/>
    </div>
  );
}

export default App;
