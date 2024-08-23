import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Home extends Component {
  render() {
    return (
      <div className="container-fluid px-4" style={{ backgroundColor: '#101010' }}>
        <div className="d-flex justify-content-between">
          <div className="d-flex align-items-center">
            <h2 className="mb-4 text-white">TV Shows</h2>
            <div className="btn-group ms-4 mt-1">
              <button
                type="button"
                className="btn btn-secondary btn-sm dropdown-toggle rounded-0"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ backgroundColor: '#101010' }}
              >
                Genres
              </button>
              <ul className="dropdown-menu">
                <li><button className="dropdown-item text-white">Comedy</button></li>
                <li><button className="dropdown-item text-white">Drama</button></li>
                <li><button className="dropdown-item text-white">Thriller</button></li>
              </ul>
            </div>
          </div>
          <div>
            <i className="bi bi-grid me-2 text-white"></i>
            <i className="bi bi-grid-3x3 text-white"></i>
          </div>
        </div>

        <Section title="Il Signore Degli Anelli" images={[
          '1.png', '2.png', '3.png', '4.png', '5.png', '6.png'
        ]} />

        <Section title="Star Wars" images={[
          '7.png', '8.png', '9.png', '10.png', '11.png', '12.png'
        ]} />

        <Section title="Harry Potter" images={[
          '13.png', '14.png', '15.png', '16.png', '17.png', '18.png'
        ]} />
      </div>
    );
  }
}

const Section = ({ title, images }) => {
    return (
      <div>
        <h4 className="text-white">{title}</h4>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4">
          {images.map((image, index) => (
            <div className="col mb-2 text-center px-1" key={index}>
              <img className="img-fluid" src={`assets/${image}`} alt="movie picture" />
            </div>
          ))}
        </div>
      </div>
    );
  };
export default Home;