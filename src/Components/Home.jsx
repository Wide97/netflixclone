import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lotrMovies: [],
      starWarsMovies: [],
      harryPotterMovies: [],
      isLoading: true,
      error: null,
    };
  }

  componentDidMount() {
    this.fetchMovies('Lord of the Rings', 'lotrMovies');
    this.fetchMovies('Star Wars', 'starWarsMovies');
    this.fetchMovies('Harry Potter', 'harryPotterMovies');
  }

  fetchMovies = async (query, stateKey) => {
    const apiKey = 'bc051b73'; 
    const url = `http://www.omdbapi.com/?s=${encodeURIComponent(query)}&apikey=${apiKey}`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.Response === 'True') {
        this.setState({
          [stateKey]: data.Search,
          isLoading: false,
        });
      } else {
        this.setState({
          error: `No results found for ${query}`,
          isLoading: false,
        });
      }
    } catch (error) {
      this.setState({
        error: error.message,
        isLoading: false,
      });
    }
  };

  render() {
    const { lotrMovies, starWarsMovies, harryPotterMovies, isLoading, error } = this.state;

    if (isLoading) {
      return <p className="text-white">Loading...</p>;
    }

    if (error) {
      return <p className="text-white">Error: {error}</p>;
    }

    return (
      <div className="container-fluid px-4 py-4" style={{ backgroundColor: '#101010' }}>
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
            <i className="bi bi-grid me-2 text-white"></i>
            <i className="bi bi-grid-3x3 text-white"></i>
          </div>
        </div>

        <MovieCarousel title="The Lord of the Rings" movies={lotrMovies} />
        <MovieCarousel title="Star Wars" movies={starWarsMovies} />
        <MovieCarousel title="Harry Potter" movies={harryPotterMovies} />
      </div>
    );
  }
}

const MovieCarousel = ({ title, movies }) => {
  const carouselId = `carousel-${title.replace(/\s+/g, '-').toLowerCase()}`;
  const posterHeight = '400px'; 
  const itemsPerSlide = 6; 

  
  const generateCarouselItems = () => {
    const slideCount = Math.ceil(movies.length / itemsPerSlide);

    let carouselItems = [];
    for (let i = 0; i < slideCount; i++) {
      carouselItems.push(
        <div className={`carousel-item${i === 0 ? ' active' : ''}`} key={i}>
          <div className="d-flex" style={{ overflowX: 'auto' }}>
            {movies.slice(i * itemsPerSlide, (i + 1) * itemsPerSlide).map((movie) => (
              <div
                className="text-center px-1"
                key={movie.imdbID}
                style={{ flex: '0 0 auto', width: '16.666%' }}
              >
                <img
                  className="img-fluid"
                  src={movie.Poster}
                  alt={movie.Title}
                  title={movie.Title}
                  style={{ height: posterHeight, objectFit: 'cover' }} 
                />
                <p className="text-white mt-2">{movie.Title}</p>
              </div>
            ))}
          </div>
        </div>
      );
    }
    return carouselItems;
  };

  return (
    <div className="mb-4">
      <h4 className="text-white">{title}</h4>
      <div id={carouselId} className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {generateCarouselItems()}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target={`#${carouselId}`}
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target={`#${carouselId}`}
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Home;





