import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Movie from "./pages/MovieList";
import MovieList from "./pages/MovieList"
import MovieDetail from "./pages/MovieDetail";

export default function App() {
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