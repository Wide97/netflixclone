import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lotrMovies: [],
      starWarsMovies: [],
      harryPotterMovies: [],
      isLoading: true,
      error: null
    };
  }

  componentDidMount() {
    this.fetchMovies('Lord of the Rings', 'lotrMovies');
    this.fetchMovies('Star Wars', 'starWarsMovies');
    this.fetchMovies('Harry Potter', 'harryPotterMovies');
  }

  fetchMovies = async (query, stateKey) => {
    const apiKey = 'bc051b73'; // La tua chiave API
    const url = `http://www.omdbapi.com/?s=${encodeURIComponent(query)}&apikey=${apiKey}`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.Response === 'True') {
        this.setState({
          [stateKey]: data.Search,
          isLoading: false
        });
      } else {
        this.setState({
          error: `No results found for ${query}`,
          isLoading: false
        });
      }
    } catch (error) {
      this.setState({
        error: error.message,
        isLoading: false
      });
    }
  };

  render() {
    const { lotrMovies, starWarsMovies, harryPotterMovies, isLoading, error } = this.state;

    if (isLoading) {
      return <p>Loading...</p>;
    }

    if (error) {
      return <p>Error: {error}</p>;
    }

    return (
      <div className="container-fluid px-4">
        <div className="d-flex justify-content-between">
          <div className="d-flex align-items-center">
            <h2 className="mb-4 text-white">TV Shows</h2>
            <div className="btn-group ms-4 mt-1">
              <button
                type="button"
                className="btn btn-secondary btn-sm dropdown-toggle rounded-0"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ backgroundColor: '#221f1f' }}
              >
                Genres
              </button>
              <ul className="dropdown-menu">
                <li><button className="dropdown-item">Comedy</button></li>
                <li><button className="dropdown-item">Drama</button></li>
                <li><button className="dropdown-item">Thriller</button></li>
              </ul>
            </div>
          </div>
          <div>
            <i className="bi bi-grid me-2"></i>
            <i className="bi bi-grid-3x3"></i>
          </div>
        </div>

        <Section title="The Lord of the Rings" movies={lotrMovies} />
        <Section title="Star Wars" movies={starWarsMovies} />
        <Section title="Harry Potter" movies={harryPotterMovies} />
      </div>
    );
  }
}

// Componente per le sezioni di immagini
const Section = ({ title, movies }) => {
  return (
    <div>
      <h4 className="text-white">{title}</h4>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4">
        {movies.map((movie) => (
          <div className="col mb-2 text-center px-1" key={movie.imdbID}>
            <img
              className="img-fluid"
              src={movie.Poster}
              alt={movie.Title}
              title={movie.Title}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;