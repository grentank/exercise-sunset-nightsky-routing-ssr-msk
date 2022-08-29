import React from 'react';

export default function NavBar() {
  return (
    <div className="row">
      <div className="col-4">
        <a href="/" className="btn btn-lg btn-dark border-white fw-bold">Home</a>
      </div>
      <div className="col-4">
        <a href="/sunset" className="btn btn-lg btn-dark border-white fw-bold">Sunset</a>
      </div>
      <div className="col-4">
        <a href="/nightsky" className="btn btn-lg btn-dark border-white fw-bold">Night sky</a>
      </div>
    </div>
  );
}
