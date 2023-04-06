import { Routes, Route } from "react-router-dom";
import { Home, Movie, Popular } from "./pages";
import { Header } from "./component/domain";

function App() {
  return (
    <Header>    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Movie" element={<Movie />} />
        <Route path="/popular" element={<Popular />} />
      </Routes>
    </Header>

  );
}

export default App;
