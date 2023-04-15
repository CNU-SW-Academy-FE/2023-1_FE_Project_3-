import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { Movie } from './pages/Movie';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movie/:type" element={<Movie />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;