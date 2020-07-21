import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
const MovieList = props => {
  return (
    <div className="movie-list">
      {props.movies.map(movie => (
        <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

function MovieDetails({ movie }) {
  const { title, director, metascore } = movie;
  return (
    <div className="movie-card">
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
      <Link to={{
        pathname:'/movies',
        state: {
          // id
        }
      }}></Link>
    </div>
  );
}

export default MovieList;
