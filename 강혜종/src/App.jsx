import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from './Header'
import Home from "./Pages/Home"
import Movie from "./Pages/Movie"

function App() {
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

export default App
