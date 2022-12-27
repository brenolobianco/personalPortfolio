import styled from "styled-components";

export const PortfolioSection = styled.section`
  background: whitesmoke;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h2 {
    font-family: open sans, sans-serif;
    color: black;
    font-size: 29px;
    font-weight: 700;
  }
  @media (max-width: 480px) {
  
    display: flex;
    flex-direction: column;
    background: color;
  }
`;
export const PortfolioDecription = styled.div`
  height: 500px;

  background: whitesmoke;
  display: flex;
  
  gap:220px;
  align-items: center;
  border-bottom: 1px solid #0000001c;
  @media (max-width: 480px) {
    height: 700px;
    gap:100px;
    display: flex;
    flex-direction: column;
    background: color;
  }
  @media (max-width: 1624px) {

    display: flex;
   
    background: color;
  }
  .left-side {
    width: 38%;
    @media (max-width: 480px) {
      width: 400px;
    }
  }
  img {
    width: 640px;
    height: 400px;
    border-radius: 10px;
    border: 2px solid #0000001c;
    @media (max-width: 580px) {
      width: 400px;
      padding-left: 15px;
      height: 200px;
      display: flex;
      flex-direction: column;
      background: color;
    }
  }
  .right-side {
    width: 450px;
    height: 400px;
    display: flex;
    flex-direction: column;
    gap: 40px;
    margin-bottom:60px;
    justify-content: center;
    align-items: flex-start;
    @media (max-width: 480px) {
      width: 300px;
    }
  }

  h2 {
    font-family: open sans, sans-serif;
    color: black;
    font-size: 35px;
    line-height: 1.6;
    font-weight: 700;
  }
  p {
    font-family: open sans, sans-serif;
    color: black;
    font-size: 17px;
    color: #808080;
  }
  .btns {
    display: flex;
    gap: 25px;
  }
  .right-side a {
    width: 130px;
    height: 55px;
    background-color: #5b43d6;
    border-color: #5b43d6;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
    color: rgba(0, 0, 0, 0.6);
    font-family: open sans, sans-serif;
    font-size: 16px;
    font-weight: 400;
    color: #fff;
    text-align: center;
  }
`;
