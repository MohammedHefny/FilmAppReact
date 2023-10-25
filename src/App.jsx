import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./FilmStructure/Navbar.jsx/Header";
import Blog from "./FilmStructure/Blog/Blog";
import Celebs from "./FilmStructure/Celebs/Celebs";
import Home from "./FilmStructure/Home/Home";
import Moives from "./FilmStructure/Movies/Movies";
import Pages from "./FilmStructure/Pages/Pages";
import TVShows from "./FilmStructure/TVShows/TVShows";
import MovieDetails from "./FilmStructure/MovieDetails/MovieDetails";
import MovieCard from "./FilmStructure/Shared/MovieCard/MovieCard";
import "bootstrap/dist/css/bootstrap.min.css";
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Pages" element={<Pages />} />
        <Route path="/Moives" element={<Moives />} />
        <Route path="/TVShows" element={<TVShows />} />
        <Route path="/Celebs" element={<Celebs />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/MovieDetails/:type/:id" element={<MovieDetails />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
