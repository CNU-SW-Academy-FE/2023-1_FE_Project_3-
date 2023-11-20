import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import MovieDetail from './pages/MovieDetail';
import MovieList from './pages/MovieList';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="/movie/:id" element={<MovieDetail />}></Route>
        <Route path="/movies/:type" element={<MovieList />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;