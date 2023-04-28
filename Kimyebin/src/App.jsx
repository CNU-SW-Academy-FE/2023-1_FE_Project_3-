// 각각의 컴포넌트들의 경유지...
// 대부분이 거쳐감...

import { Route, BrowserRouter, Routes} from 'react-router-dom';
import Header from './Components/Header';
import Home from './pages/Home';
import MovieList from './pages/MovieList';
import MovieDetail from './pages/MovieDetail';
function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="movie/:id" element={<MovieDetail/>}/>
        <Route path="movies/:type" element={<MovieList/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App