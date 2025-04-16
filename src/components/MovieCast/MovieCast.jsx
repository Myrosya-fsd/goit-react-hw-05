import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieCredits } from "../../services/api";
import styles from "./MovieCast.module.css";

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const data = await getMovieCredits(movieId);
        setCast(data.cast);
      } catch (error) {
        console.error("Failed to fetch cast:", error);
      }
    };

    fetchCast();
  }, [movieId]);

  return (
    <ul className={styles.list}>
      {cast
        .filter((actor) => actor.profile_path) // фільтрація: лише актори з фото
        .map((actor) => (
          <li key={actor.cast_id} className={styles.item}>
            <img
              className={styles.image}
              src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
              alt={actor.name}
            />
            <p className={styles.name}>{actor.name}</p>
            <p className={styles.character}>Character: {actor.character}</p>
          </li>
        ))}
    </ul>
  );
};

export default MovieCast;
