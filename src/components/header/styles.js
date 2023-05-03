import styled from "styled-components";

export const HeaderSection = styled.header`
  width: 100vw;
  position: fixed;
  height: 90px;
  display: flex;
  justify-content: center;
  gap: 950px;
  align-items: center;
  background: whitesmoke;
  background-attachment: fixed;
  border-bottom: #0000001c 2px solid;
  @media (max-width: 580px) {
   
    display: flex;
    gap: 0px;
    justify-content: flex-start;
    padding-left:15px;
    background: color;
  }

  .profile {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
  h3 {
    font-family: open sans, sans-serif;
    font-size: 22px; color: black;
  }
  img {
    height: 55px;
    width: 55px;
    border-radius: 50px;
  }
  nav {
    display: flex;
    justify-content: space-between;
    width: 110px;
    @media (max-width: 580px) {
      display: flex;
      gap: 8px;
      justify-content: center;
      background: color;
    }
  }

  nav a {
    font-family: open sans, sans-serif;
    transition: padding 0.5s ease-in-out;
    color: #ffff;
  }
  a img {
    width: 30px;
    height: 30px;
  }
`;
