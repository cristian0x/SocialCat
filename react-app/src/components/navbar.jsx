import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/navbar.css";
import { Search } from "@material-ui/icons";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
        <div className="container-fluid" id="mainContainer">
          <a href="/home">
            <img src="/assets/catLogo.png" alt="" className="catLogo" />
          </a>
          <a className="navbar-brand" href="/home">
            SocialCat
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/home">
                  Wall
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="/profile">
                  Homepage <span className="sr-only">(current)</span>
                </a>
              </li>
            </ul>
            <a href="/profile">
              <img
                src="/assets/profilePicture.png"
                alt=""
                className="profilePicture"
              />
            </a>
          </div>
          <form className="form-inline my-2 my-lg-0 fixed-top" id="search">
            <Search className="searchIcon" />
            <div className="searchContainer">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search for friends"
                aria-label="Search"
                id="searchBar"
              />
            </div>
          </form>
        </div>
      </nav>
    );
  }
}

export default NavBar;
