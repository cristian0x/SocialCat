import React, { useState, useEffect } from "react";
import "../styles/profile.css";
import NavBar from "../components/navbar";
import Posts from "../components/posts";
import { useParams } from "react-router-dom";

export const Profile = () => {
  const [username, setUsername] = useState("");
  const [about, setAbout] = useState("");
  const [lastName, setLastName] = useState("");

  const { id } = useParams();
  const urlPosts = "http://localhost:5000/profile/" + id;

  async function fetchProfile() {
    const token = JSON.parse(localStorage.getItem("auth"));
    const responseProfile = await fetch(
      urlPosts,
      {
        method: "get",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "http://localhost:3000",
          "Access-Control-Allow-Credentials": "true",
          Authorization: "Bearer " + token.user.access_token,
        },
      },
      {
        credentials: "include",
      }
    );
    const dataProfile = await responseProfile.json();
    console.log(dataProfile.user_profile);
    setUsername(dataProfile.user_profile.first_name);
    setAbout(dataProfile.user_profile.about);
    setLastName(dataProfile.user_profile.last_name);
  }

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <>
      <NavBar />
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <img
            src="/assets/profilePicture.png"
            alt=""
            className="profileImage"
          />
          <h1 className="display-4">
            {username} {lastName}
          </h1>
          <p className="lead">{about}</p>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col" id="leftCol"></div>
          <div className="col middle">
            <Posts />
          </div>
          <div className="col"></div>
        </div>
      </div>
    </>
  );
};
