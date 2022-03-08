import React from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
      <Routes>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route>
            404 Error
          </Route>
      </Routes>
  );
}

export default App;
