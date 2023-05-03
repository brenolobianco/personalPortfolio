import styled from "styled-components";

export const TechsSection = styled.section`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: whitesmoke;
  padding-bottom: 15px;
  height: 400px;
  background: #f1f3f5;
  .techs {
    @media (max-width: 480px) {
      width: 400px;
      height: 200px;
      overflow-x: auto;
    }
  }
  h2 {
    color: black;
    padding-bottom: 100px;
    font-size: 29px;
    font-family: open sans, sans-serif;
  }
  img {
    height: 110px;
  }
  div {
    display: flex;
    justify-content: space-between;
    width: 70%;
  }
`;
