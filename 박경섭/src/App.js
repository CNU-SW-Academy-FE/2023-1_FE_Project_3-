import { Routes, Route } from "react-router-dom";
import { Home, Movie, Popular, TopRated, Upcoming } from "./pages";
import { Header } from "./component/domain";

function App() {
  return (
    <Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Movie />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/toprated" element={<TopRated />} />
        <Route path="/upcoming" element={<Upcoming />} />
      </Routes>
    </Header>
  );
}

export default App;
