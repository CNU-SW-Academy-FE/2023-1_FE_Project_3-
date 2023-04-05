import { Routes, Route } from "react-router-dom";
import { Home, Movie } from "./pages";
import { Header } from "./component/domain";
import Card from "./component/base/Card";
function App() {
  return (
    <Header>    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Movie" element={<Movie />} />
      </Routes>
    </Header>

  );
}

export default App;
