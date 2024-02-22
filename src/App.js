import { Component } from 'react';
import News from './views/News';
import './App.css';

// Main App component
class App extends Component {
  render() {
    return (
      <div className="App">
        <News />
        <footer>
          &copy; 2024 Steve S. Samson
        </footer>
      </div>
    );
  }
}

export default App;
