import React from 'react';
// import logo from './logo.svg';
import './App.css';

import Error from './pages/Error';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Home />
      <Rooms />
      <SingleRoom />
      <Error />
    </div>
  );
}

export default App;
