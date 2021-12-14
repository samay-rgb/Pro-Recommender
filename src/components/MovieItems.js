import React from "react";
import styled from "styled-components";
export default function MovieItems({ movieitem }) {
  console.log(movieitem);
  let rating = 5.5;
  let poster = "/gPQM1zqqsm6Lw1tHF41BwbmOkya.jpg";
  let title = "Movie Name";
  if (
    typeof movieitem.poster_path !== "undefined" &&
    movieitem.poster_path !== null
  )
    poster = movieitem.poster_path;
  if (typeof movieitem.title !== "undefined" && movieitem.title !== null)
    title = movieitem.title;
  if (
    typeof movieitem.original_title !== "undefined" &&
    movieitem.original_title !== null
  )
    title = movieitem.original_title;
  if (
    typeof movieitem.original_name !== "undefined" &&
    movieitem.original_name !== null
  )
    title = movieitem.original_name;
  if (
    typeof movieitem.vote_average !== "undefined" &&
    movieitem.vote_average !== null
  )
    rating = movieitem.vote_average;
  //   const item = {
  //     backdrop_path: "/gFZriCkpJYsApPZEF3jhxL4yLzG.jpg",
  //     first_air_date: "2017-05-02",
  //     genre_ids: [80, 18],
  //     original_language: "es",
  //     original_name: "La Casa de Papel",
  //     origin_country: ["ES"],
  //     vote_average: 8.3,
  //     id: 71446,
  //     vote_count: 15529,
  //     poster_path: "/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg",
  //     overview:
  //       "To carry out the biggest heist in history, a mysterious man called The Professor recruits a band of eight robbers who have a single characteristic: none of them has anything to lose. Five months of seclusion - memorizing every step, every detail, every probability - culminate in eleven days locked up in the National Coinage and Stamp Factory of Spain, surrounded by police forces and with dozens of hostages in their power, to find out whether their suicide wager will lead to everything or nothing.",
  //     name: "Money Heist",
  //     popularity: 1680.79,
  //     media_type: "tv",
  //   };
  return (
    <Container>
      <Image src={`https://image.tmdb.org/t/p/w500/${poster}`} alt="" />
      <div>
        <p>{title}</p>
        <p>Rating: {rating}</p>
      </div>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-content: flex-start;
  padding: 20px;
  width: 20%;
  border: 2px solid black;
  padding: 5px;
  margin: 5px;
  border-radius: 15px;
  background-color: #0b0b0b;
  align-items: center;
  color: whitesmoke;
`;
const Image = styled.img`
  height: 200px;
`;