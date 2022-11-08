import styled from "styled-components";

export const FooterBox = styled.footer`
  height: 200px;
  width: 100vw;
  background: #ffff;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  @media (max-width: 480px) {
  
 
    
  }
  h2 {
    font-size: 25px;
    font-family: open sans, sans-serif;
  }
  ul {
    display: flex;
    gap: 20px;
    list-style: none;
  }
  ul li a {
    color: gray;
    font-size: 20px;
    font-family: open sans, sans-serif;
  }
  button {
    width: 10px;
    height: 30px;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
