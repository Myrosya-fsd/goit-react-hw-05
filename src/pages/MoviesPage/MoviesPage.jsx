import React, { useState, useEffect } from "react";
import { Field, Form, Formik } from "formik";
import { useSearchParams } from "react-router-dom";
import { searchMovies } from "../../services/api";
import styles from "./MoviesPage.module.css";
import MovieList from "../../components/MovieList/MovieList";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") || "";

  useEffect(() => {
    if (!query) return;

    const fetchMovies = async () => {
      try {
        const data = await searchMovies(query);
        if (data.length === 0) {
          setError("Movie not found");
        } else {
          setError(""); // Очистити помилку, якщо фільми знайдено
        }
        setMovies(data);
      } catch (error) {
        console.error("Error fetching movies:", error);
        setError("An error occurred while loading movies");
      }
    };

    fetchMovies();
  }, [query]);

  return (
    <div className={styles.container}>
      <Formik
        initialValues={{ query }}
        enableReinitialize
        onSubmit={(values) => {
          if (values.query.trim()) {
            setSearchParams({ query: values.query.trim() });
          }
        }}
      >
        <Form className={styles.searchForm}>
          <Field
            type="text"
            name="query"
            className={styles.field}
            placeholder="Search..."
          />
          <button className={styles.btn} type="submit">
            Search
          </button>
        </Form>
      </Formik>

      {error && <p className={styles.error}>{error}</p>}

      {movies.length > 0 && <MovieList movies={movies} />}
    </div>
  );
};

export default MoviesPage;
