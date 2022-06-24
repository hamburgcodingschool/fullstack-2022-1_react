import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <section className="App" data-testid='app-header'>
      <header className="App-header" role="block">
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
          Learn Reacts

          Trying test
        </a>
      </header>
      <button 
          className='btn-clear'
          onClick={() => console.log('Clear Items')}
          data-testid="clear"
          role='button'
        >
          Clear items
        </button>
    </section>
  );
}

export default App;
