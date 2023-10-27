import { BrowserRouter , Route , Routes } from "react-router-dom"
import Home from '../Pages/Home'
import Headers from "./Components/Header"
import MovieList from '../Pages/MovieList'
import MovieDetail from "./Components/MovieDetail"

function App() {

  return (
    <>
      <BrowserRouter>
      <Headers/> 
      <Routes>
        <Route index element ={<Home /> } />
        <Route path ="movie/:id" element ={<MovieDetail/>}/>
        <Route path ="movies/:type" element ={<MovieList /> } />
        <Route path = "/" element = {<h1>Error Page</h1>} /> 
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
