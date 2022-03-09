import React from 'react';
import { Route, Routes } from 'react-router';
import { ThemeProvider } from 'styled-components';
import Councils from './pages/Councils';
import Fests from './pages/Fests';
import Forum from './pages/Forum';

import Home from './pages/Home';
import News from './pages/News';

const theme = {
    mainColors: {
        black: '#000000',
        white: '#FFFFFF',
        dark: '#999999',
    },
};

function App() {
    return (
      <ThemeProvider theme={theme}>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/councils' element={<Councils />} />
            <Route path='/forum' element={<Forum />} />
            <Route path='/news' element={<News />} />
            <Route path='/fests' element={<Fests />} />   
            </Routes>
      </ThemeProvider>
  );
}

export default App;
