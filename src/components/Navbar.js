import React from "react";
import styled from "styled-components";
export default function Navbar() {
  return (
    <Container>
      <Title>Pro Recommender</Title>
      <Search type="text" placeholder="Enter a movie Name" />
      <Button type="submit">
        <Icon
          src="https://img.icons8.com/ultraviolet/32/000000/search--v1.png"
          alt=""
        />
      </Button>
    </Container>
  );
}
const Container = styled.div`
  min-height: 60px;

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #212552;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
`;
const Title = styled.div`
  margin-left: 100px;
  flex: 0.25;
  font-weight: bold;
  font-size: 1.25em;
  color: black;
`;
const Search = styled.input`
  height: 40px;
  background-color: #030305;
  margin-top: 10px;
  border-radius: 50px;
  margin-bottom: 10px;
  border: 0;
  width: 200px;
  padding: 10px;
  flex: 0.5;
  outline: none;
`;
const Icon = styled.img`
  margin: auto;
`;
// h-10 bg-gray-200 my-2 p-2 rounded-4 outline-none border-none
const Button = styled.button`
  height: 40px;
  margin: 5px;
  width: 70px;
  border: none;
  border-radius: 20%;
  background-color: black;
  cursor: pointer;
`;
