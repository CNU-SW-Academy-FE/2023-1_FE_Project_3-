import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Movie from "./pages/Movie"
import Header from "./Components/Header"


function App() {
  return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Home/>} />
          <Route path="movie" element={<Movie />} />
        </Routes>
      </BrowserRouter>
    )
}

export default App