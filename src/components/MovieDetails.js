import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CastMember from "./CastMember";
import { useParams } from "react-router-dom";
import Recommendations from "./Recommendations";
export default function MovieDetails() {
  const [cast, setCast] = useState([]);
  const [movie, setMovie] = useState([]);
  let param = useParams();
  const getCast = async () => {
    let data1 = await fetch(
      `https://api.themoviedb.org/3/movie/${param.id}?api_key=bc9494ce80d96b4eefaffdeea5679261&language=en-US`
    );
    let data = await fetch(
      `https://api.themoviedb.org/3/movie/${param.id}/credits?api_key=bc9494ce80d96b4eefaffdeea5679261&language=en-US`
    );
    let datajson = await data.json();
    let datajson1 = await data1.json();
    let m = datajson.cast;
    let m1 = datajson1;
    if (m) setCast(m.slice(0, 10));
    setMovie(m1);
    console.log(param.id);
  };
  useEffect(() => {
    getCast();
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      <Container>
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt=""
        />
        <div className="over-view">
          <h2>{movie.original_title}</h2>

          <p>{movie.adult ? "18+" : "U/A"}</p>
          <h3>Overview:</h3>
          <p>{movie.overview}</p>
          <p>Release : {movie.release_date}</p>
          <p>Rating : {movie.vote_average}/10</p>
        </div>
      </Container>
      <H>Cast</H>
      <CastContainer>
        {cast.map((member, idx) => {
          if (member.profile_path) {
            return <CastMember member={member} key={idx} />;
          }
        })}
      </CastContainer>
      <Recommendations />
    </div>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1em;
  background: rgba(0, 0, 0, 0.5);
  & img {
    width: 300px;
    border-radius: 10px;
  }
  backdrop-filter: blur(10px);
`;
const CastContainer = styled.div`
  width: 100%;
  height: auto;
  padding: 1em;
  display: flex;
  overflow-x: scroll;
  color: white;
  ::-webkit-scrollbar {
    display: none;
  }
`;
const H = styled.h1`
  color: white;
  margin-top: 2%;
  margin-left: 2.2%;
`;
