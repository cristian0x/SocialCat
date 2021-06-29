import React, { useState, useEffect } from "react";
import "../styles/search.css";
import NavBar from "../components/navbar";
import { useParams } from "react-router-dom";

export const Search = () => {
  const [searchResults, setSearchResults] = useState([]);

  const { user } = useParams();
  const urlPosts = "http://localhost:5000/search";

  let opts = {
    search_data: user,
  };

  async function fetchSearch() {
    const token = JSON.parse(localStorage.getItem("auth"));
    const responseProfile = await fetch(
      urlPosts,
      {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "http://localhost:3000",
          "Access-Control-Allow-Credentials": "true",
          Authorization: "Bearer " + token.user.access_token,
        },
        body: JSON.stringify(opts),
      },
      {
        credentials: "include",
      }
    );
    const dataSearch = await responseProfile.json();
    console.log(dataSearch);
    setSearchResults(dataSearch.users.users);
    console.log(searchResults);
  }

  useEffect(() => {
    fetchSearch();
  }, []);

  return (
    <>
      <NavBar />
      <div>Search resutls</div>
    </>
  );
};
