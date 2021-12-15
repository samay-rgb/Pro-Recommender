import React from "react";
import styled from "styled-components";
export default function Navbar() {
  return (
    <Container>
      <Title>ChillFlix</Title>
      <div>
      <Search type="text" placeholder="Enter a movie Name" />
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
  background-color: #14213D;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
`;
const Title = styled.div`
  margin-left: 1em;
  font-size: 24px;
  color: #FCA311;
`;
const Search = styled.input`
  height: 40px;
  background-color: transparent;
  margin-top: 10px;
  margin-bottom: 10px;
  border: 2px solid;
  border-top:none;
  border-left:none;
  border-right:none;
  border-color:#FCA311;
  width: 500px;
  padding: 10px;
  outline: none;
  color:#FCA311;
`;
const Icon = styled.img`
  margin: auto;
`;
// h-10 bg-gray-200 my-2 p-2 rounded-4 outline-none border-none
const Button = styled.button`
  background:transparent;
  border:none;
`;
