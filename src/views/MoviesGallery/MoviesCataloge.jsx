import { useDispatch, useSelector } from 'react-redux'
import styles from './MoviesGallery.module.css'
import MovieCard from './components/MovieCard'
import { setLoader } from '../../redux/loader.reducer'

const MoviesCataloge = () => {
  const allMovies = useSelector(state => state.movies)

  const movies = allMovies.filter(movie =>
    movie.country.includes('Ecuador'),
  )

  if (movies.length === 0) {
    return (
      <p>No hay películas disponibles en este momento.</p>
    )
  }

  return (
    <div className={styles.gallery}>
      <h2>Catálogo de Películas</h2>
      <div className={styles.movies__container}>
        {movies.map((movie, i) => (
          <MovieCard key={i} movie={movie} />
        ))}
      </div>
    </div>
  )
}

export default MoviesCataloge
