import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from './Components/Header'
import Home from "./Pages/Home"
import MovieList from "./Pages/MovieList"
import MovieDetail from "./Pages/MovieDetail"

function App() {
  return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Home />}/>
          <Route path="movie/:id" element={<MovieDetail />}/>
          <Route path="movies/:type" element={<MovieList />}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App
