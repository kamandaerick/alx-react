import logo from './logo.jpg';
import './App.css';
import { getFullYear, getFooterCopy } from './utils';



function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} alt="Holberton Logo" />
        <h1>School dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" />
        <button>OK</button>
      </div>
      <div className="App-footer">
        <p><i>Copyright {getFullYear()} - {getFooterCopy(true)}</i></p>
      </div>
    </div>
  );
}

export default App;
