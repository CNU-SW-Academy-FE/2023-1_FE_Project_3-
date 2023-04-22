// 각각의 컴포넌트들의 경유지...
// 대부분이 거쳐감...

import { Route, BrowserRouter, Routes} from 'react-router-dom';
import Header from './Components/Header';
import Home from './pages/Home';
import Movie from './pages/MovieList';
import MovieList from './pages/MovieList';
import MovieDetail from './pages/MovieDetail';
function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="" element={<MovieDetail/>}/>
        <Route path="" element={<MovieList/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App