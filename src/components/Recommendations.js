import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MovieItems from "./MovieItems";
export default function Recommendations() {
  const [movies, setMovies] = useState([]);
  const getRecommendations = async () => {
    let data = await fetch("http://127.0.0.1:5000/similarity/tt1270797");
    let datajson = await data.json();
    let temp = [];
    for (let i = 0; i < datajson.length; i++) {
      temp.push(datajson[i].movie_details);
    }
    setMovies(temp);
  };
  useEffect(() => {
    getRecommendations();
    // console.log(movies);
  }, []);
  // console.log(movies[2]);

  return (
    <>
      <H>Recommended Movies</H>
      <Container>
        {movies.map((item, idx) => {
          return <MovieItems movieitem={item} key={idx} />;
        })}
      </Container>
    </>
  );
}
const Container = styled.div`
  height: 80vh;
  margin-top: 3em;
  display: flex;
  flex-wrap: wrap;
  margin-left: 45px;
  background-color: #14213d;
`;

const H = styled.h1`
  color: white;
  margin-top: 2%;
  margin-left: 2.2%;
`;
