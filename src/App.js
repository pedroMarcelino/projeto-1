import './App.css';
import { Component } from 'react';

class App extends Component {
  state = {
    name: 'Pedro Marcelino',
    counter: 0
  };

  render() {
    const { name, counter } = this.state
    return (
      < div className="App" >

      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
