import logo from './logo.svg';
import './App.css';

import PostList from './components/PostList';
import Nav from './components/Nav';
import UserList from './components/UserList';
import Gallery from './components/Gallery';
function App() {
  return (
    <div className="App">
      <Nav />
      <div className='container pt-4'>

        <div className='row'>
          <div className='col-md-12'>
            {/* <PostList /> */}
            {/* <UserList /> */}
            <Gallery />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
