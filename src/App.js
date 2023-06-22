import logo from './logo.svg';
import './App.css';
import LeftNav from './componentJavaScript/LeftNav'
import backimg from './picture/background1.jpg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={backimg} className="App-logo" alt="logo" />
      
      </header>
      <LeftNav/>
    </div>
  );
}

export default App;
