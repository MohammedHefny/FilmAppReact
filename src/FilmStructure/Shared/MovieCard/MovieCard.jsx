import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "./MovieCard.css";
import { Link } from "react-router-dom";
const MovieCard = ({ movieDetail }) => {
  return (
    <Card style={{ position: "relative" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={"https://image.tmdb.org/t/p/w500/" + movieDetail?.poster_path}
          alt="green iguana"
          style={{ height: "300px" }}
        />
        <CardContent>
          {movieDetail?.name ? (
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              className="text-center"
              style={{ height: "70px" }}
            >
              <Link
                to={`/MovieDetails/${movieDetail.media_type}/${movieDetail.id}`}
              >
                {movieDetail?.name}
              </Link>
            </Typography>
          ) : (
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              className="text-center"
              style={{ height: "70px" }}
            >
              <Link
                to={`/MovieDetails/${movieDetail.media_type}/${movieDetail.id}`}
              >
                {movieDetail?.title}
              </Link>
            </Typography>
          )}
        </CardContent>
      </CardActionArea>
      <span className="rating">{movieDetail.vote_average.toFixed(1)}</span>
    </Card>
  );
};
export default MovieCard;
