import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieDetailsUI from "../Shared/MovieDetailsUI/MovieDetailsUI";
import Loader from "../Shared/Loader/Loader";
const MovieDetails = () => {
  const params = useParams();
  console.log(params, "param");
  const [film, setFilm] = useState({});
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState("");

  const getSingleFilm = async () => {
    setloading(true);
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/${params.type}/${params.id}?api_key=14bdd69ce887376edfafb09f23f78fe9`
      );
      setloading(false);
      setFilm(res.data);
    } catch (erro) {
      setloading(false);
      seterror("error From The Server Check The Site Later");
    }
  };
  useEffect(() => {
    getSingleFilm();
  }, []);
  if (loading) {
    return <Loader />;
  }
  return (
    <>
      <MovieDetailsUI film={film} />
    </>
  );
};
export default MovieDetails;
