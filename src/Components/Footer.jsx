import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

class footer extends component {
  render() {
    return (
      <div className="card">
        <div className="card-body">
          <blockquote className="blockquote mb-0">
            <p> @ Write here footer line...........</p>
            <footer className="blockquote-footer">
              Grosory @ your home <cite title="Source Title">Gzb</cite>
            </footer>
          </blockquote>
        </div>
      </div>
    );
  }
}
export default footer;
