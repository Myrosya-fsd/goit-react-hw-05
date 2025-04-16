import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./MovieList.module.css";

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul className={styles.list}>
      {movies.map((movie) => (
        <li key={movie.id} className={styles.item}>
          <Link
            to={`/movies/${movie.id}`}
            state={{ from: location }}
            className={styles.link}
          >
            {/* Додаємо картинку */}
            {movie.poster_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                alt={movie.title || movie.name}
                className={styles.poster}
              />
            ) : (
              <div className={styles.noPoster}>No image</div>
            )}
            {/* Назва */}
            <p className={styles.title}>{movie.title || movie.name}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
