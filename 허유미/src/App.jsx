import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Header from "./Components/Header"
import MovieDetail from "./pages/MovieDetail"
import MovieList from "./pages/MovieList"


function App() {
  return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Home/>} />
          <Route path="movie/:id" element={<MovieDetail/>} />
          <Route path="movies/:type" element={<MovieList/>} />
        </Routes>
      </BrowserRouter>
    )
}

export default App