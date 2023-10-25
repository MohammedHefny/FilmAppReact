import { useEffect, useState } from "react";
import MovieCard from "../Shared/MovieCard/MovieCard";
import Searchbar from "../Searchbar/Searchbar";
import Loader from "../Shared/Loader/Loader";
import axios from "axios";
import { ChangeMediaType } from "../../redux/slices/MediaType";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const MediaTypeGlobalState = useSelector(
    (globalState) => globalState.MediaTypeReducer.MediaType
  );

  const [loading, setloading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [error, seterror] = useState("");
  const getProducts = async () => {
    setloading(true);
    try {
      const res = await axios.get(
        "https://api.themoviedb.org/3/trending/all/day?api_key=14bdd69ce887376edfafb09f23f78fe9"
      );
      setloading(false);
      console.log("res.data.results", res.data.results);
      //
      console.log("MediaTypeGlobalState from home", MediaTypeGlobalState);
      console.log("movies home", movies);
      // setMovies(res.data.results);

      if (MediaTypeGlobalState == "TV") {
        const updatedMovies = res.data.results.filter((movie) => {
          return movie.name;
        });
        setMovies(updatedMovies);
        console.log("updatedMovies from yes it is tv", updatedMovies);
      } else if (MediaTypeGlobalState == "Movie") {
        const updatedMovies = res.data.results.filter((movie) => {
          return movie.title;
        });
        setMovies(updatedMovies);

        console.log("updatedMovies from yes it is movie", updatedMovies);
      } else {
        console.log("yes it is al");
        setMovies(res.data.results);
      }
      //
    } catch (erro) {
      setloading(false);
      seterror("error From The Server Check The Site Later");
    }
  };
  useEffect(() => {
    getProducts();
  }, []);
  useEffect(() => {
    getProducts();
  }, [MediaTypeGlobalState]);
  if (loading) {
    return <Loader />;
  }
  return (
    <>
      <Searchbar />
      <div className="container">
        <div className="row">
          {movies.map((movie) => {
            return (
              <div key={movie.id} className="col-md-4 col-lg-3 mb-3">
                <MovieCard movieDetail={movie}></MovieCard>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Home;
