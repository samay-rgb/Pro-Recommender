import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
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
    <div className="movie-item">
        <Link to={`/movies/${movieitem.id}`} params={{ id: movieitem.id,type:movieitem.media_type }}>
      <Image src={`https://image.tmdb.org/t/p/w500/${poster}`} alt=""/>
      <div className="overlay" onClick={()=>{console.log(movieitem.id);}}>
        <div className="text"> 
              {title}
          </div>
      </div>
        </Link>
    </div>
    
  );
}

const Image = styled.img`
  display:block;
  height:300px;
  border-radius:15px;
`;
