import React from "react";
import { Link } from "react-router-dom";

function Navbar(){
    return(
        <nav class="navbar navbar-expand-lg bg-danger">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">NANDHINI</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item mx-2">
                  <Link to="/">Skill</Link>
                </li>
                <li class="nav-item  mx-2">
                  <Link to="/about">About</Link>
                </li>
                <li class="nav-item  mx-2">
                  <Link to="/projects">Projects</Link>
                </li>
                <li class="nav-item mx-2">
                  <Link to="/contact">Contact</Link>
                </li>
                <li class="nav-item mx-2">
                  <Link to="/resume">Resume</Link>
                </li>
              </ul>
            </div>
          </div>
</nav>
    );
}
export default Navbar;
