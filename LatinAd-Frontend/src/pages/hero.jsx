import React from "react";
import { Container } from "@mui/material";
import { Link } from "react-router-dom";

function Hero() {
  return (
      <div className="hero">
        <div className="hero_container">
          <div className="hero_info">
            <h1>Front End Challenge Latin AD</h1>
            <h2>By Agustin Romero</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga
              molestiae exercitationem similique consequatur enim distinctio
              commodi impedit amet nisi reiciendis. Eius aperiam eaque quas
              fugit ut molestias voluptate iusto fuga.
            </p>
            <Link className="a" to = "/userLogin">
             Login
            </Link>
          </div>
        </div>
      </div>
  );
}

export default Hero;
