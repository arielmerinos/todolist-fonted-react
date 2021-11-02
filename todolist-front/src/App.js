import logo from './logo.svg';
import './App.css';

const todos = [
  {text: "Terminar curso de React.js", completed: false},
  {text: "Implementar Backend aquí", completed: false},
  {text: "Ver una peli con Jesús", completed: false}
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
