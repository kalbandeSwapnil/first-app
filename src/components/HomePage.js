import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="jumbotron">
      <h1> Home Page </h1>
      <p>Creating the First componenet for the react page </p>
      <Link to="about" className="btn btn-primary">
        {" "}
        About Page{" "}
      </Link>
    </div>
  );
}

export default HomePage;
