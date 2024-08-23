import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

class End extends Component {
  render() {
    return (
      <footer className="text-light py-4 mt-auto fixed-bottom" style={{ backgroundColor: '#101010'}}>
         <div className="container">
          <div className="row justify-content-center mb-2">
            <div className="col col-6 text-center">
              <div className="row mb-1">
                <div className="col">
                  <i className="bi bi-facebook me-1"></i>
                  <i className="bi bi-instagram me-1"></i>
                  <i className="bi bi-twitter-x me-1"></i>
                  <i className="bi bi-youtube"></i>
                </div>
              </div>
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 text-center mb-1">
                <div className="col">
                  <p><button className="btn btn-link text-light btn-sm">Audio and Subtitles</button></p>
                  <p><button className="btn btn-link text-light btn-sm">Media Center</button></p>
                  <p><button className="btn btn-link text-light btn-sm">Privacy</button></p>
                  <p><button className="btn btn-link text-light btn-sm">Contact us</button></p>
                </div>
                <div className="col">
                  <p><button className="btn btn-link text-light btn-sm">Audio Description</button></p>
                  <p><button className="btn btn-link text-light btn-sm">Investor Relations</button></p>
                  <p><button className="btn btn-link text-light btn-sm">Legal Notices</button></p>
                </div>
                <div className="col">
                  <p><button className="btn btn-link text-light btn-sm">Help Center</button></p>
                  <p><button className="btn btn-link text-light btn-sm">Jobs</button></p>
                  <p><button className="btn btn-link text-light btn-sm">Cookie Preferences</button></p>
                </div>
                <div className="col">
                  <p><button className="btn btn-link text-light btn-sm">Gift Cards</button></p>
                  <p><button className="btn btn-link text-light btn-sm">Terms of Use</button></p>
                  <p><button className="btn btn-link text-light btn-sm">Corporate Information</button></p>
                </div>
              </div>
              <button type="button" className="btn btn-link text-light btn-sm mb-1">
                Service Code
              </button>
              <div className="text-center" style={{ fontSize: '0.75em' }}>
                © 1997-2023 Netflix, Inc.
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default End;