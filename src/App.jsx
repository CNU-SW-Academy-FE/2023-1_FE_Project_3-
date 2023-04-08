import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Movie from "./pages/Movie";

export default function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route index element={<Home />}/>
        <Route path="movie" element={<Movie />}/>
      </Routes>
    </BrowserRouter>
  )
}