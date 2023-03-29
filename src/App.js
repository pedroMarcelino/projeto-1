import './App.css';

import { Component } from 'react';

import { loadPost } from './utils/load-post';
import { Posts } from './components/Posts';

class App extends Component {
  state = {
    posts: [

    ]
  };

  timeOutUpdate = null;

  componentDidMount() {
    this.loadPost();
  }

  loadPost = async () => {
    const postsAndPhotos = await loadPost();
    this.setState({ posts: postsAndPhotos });
  }

  render() {
    const { posts } = this.state;
    return (
      <section className='container'>
        <Posts posts={posts} />
      </section>
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
