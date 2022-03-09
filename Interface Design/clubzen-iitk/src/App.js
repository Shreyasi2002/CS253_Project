import React from 'react';
import { Route, Routes } from 'react-router';
import Councils from './pages/Councils';
import Forum from './pages/Forum';

import Home from './pages/Home';
import News from './pages/News';


function App() {
  return (
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/councils' element={<Councils />} />
          <Route path='/forum' element={<Forum />} />
          <Route path='/news' element={<News />} />
      </Routes>
  );
}

export default App;
