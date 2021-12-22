import React, { useState, useEffect } from "react";
import styled from "styled-components";
import TextInput from "react-autocomplete-input";
import "react-autocomplete-input/dist/bundle.css";
export default function Navbar() {
  const [list, setList] = useState([]);
  const getMoviesList = async () => {
    let data = await fetch("http://127.0.0.1:5000/movielist");
    let datajson = await data.json();
    setList(datajson);
    console.log(data);
  };
  useEffect(() => {
    getMoviesList();
  }, []);
  return (
    <Container>
      <Title>ChillFlix</Title>
      <div>
        <TextInput
          style={{
            height: "40px",
            backgroundColor: "transparent",
            marginTop: "10px",
            marginBottom: "10px",
            border: "2px solid",
            borderTop: "none",
            borderLeft: "none",
            borderRight: "none",
            borderColor: "#fca311",
            width: "500px",
            padding: "10px",
            outline: "none",
            color: "#fca311",
          }}
          spacer=" "
          trigger={["", " "]}
          options={{
            "": list,
          }}
          matchAny={true}
          maxOptions="10"
          Component="input"
          placeHolder="Enter a movie name"
        />
        <Button type="submit">
          <Icon
            src="https://img.icons8.com/color/48/000000/search--v2.png"
            alt=""
          />
        </Button>
      </div>
    </Container>
  );
}
const Container = styled.div`
  min-height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #14213d;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
`;
const Title = styled.div`
  margin-left: 1em;
  font-size: 24px;
  color: #fca311;
`;

const Icon = styled.img`
  margin: auto;
`;
// h-10 bg-gray-200 my-2 p-2 rounded-4 outline-none border-none
const Button = styled.button`
  background: transparent;
  border: none;
`;
