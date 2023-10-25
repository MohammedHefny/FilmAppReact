import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import "./MovieDetails.css";
const MovieDetailsUI = ({ film }) => {
  const searchPlay = <FontAwesomeIcon icon={faCirclePlay} />;
  const PlusIcon = <FontAwesomeIcon icon={faPlus} />;
  const HeartIcon = <FontAwesomeIcon icon={faHeart} />;

  console.log("film");
  console.log(film);
  console.log("film");

  return (
    <>
      <div className="position-relative">
        <div className="col-12 posterImage ">
          <div className="overlay"></div>
          <img
            className="img-fliud"
            src={
              "https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/" +
              film.poster_path
            }
            alt={film.title}
          />
        </div>
        <div className="container  ">
          <div className="row filmHolder">
            <div className="col-md-4 z-2 ">
              <img
                style={{ width: "100%", height: "300px" }}
                className="img-fliud"
                src={
                  "https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/" +
                  film.backdrop_path
                }
                alt={film.title}
              />
            </div>
            <div className="col-8 z-2 ">
              <div className="col-md-12 ">
                <h6 className="text-white">
                  {film?.release_date?.slice(0, 4)}
                </h6>
                <h2 className="text-white">{film.title}</h2>
                <p className="text-white-50">{film.overview}</p>
                <div className="d-flex align-content-center  gap-2 ">
                  <span className="play text-white">{searchPlay}</span>
                  <p className="text-white trailer">Watch The Trailer</p>
                  <div className="text-white-50">
                    2h 36min . {film.release_date} . {film.tagline}
                  </div>
                </div>
              </div>
              <div className="col-md-12 mt-5 ">
                <div className="row">
                  <div className="col-6 d-flex align-items-center  gap-3">
                    <div className=" d-flex  align-items-center  gap-2 ">
                      <h1>{film.vote_average?.toFixed(1)}</h1>
                      <h6 className="trailer">IMDB</h6>
                    </div>
                    <div>
                      <h6 className="text-black-50">Status</h6>
                      <h5>Released</h5>
                    </div>
                  </div>
                  <div className="col-6">
                    <span className="pluss text-white">{PlusIcon}</span>
                    <span className="heartt">{HeartIcon}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default MovieDetailsUI;
