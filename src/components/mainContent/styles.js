import styled from "styled-components";

export const MainContent = styled.main`
  width: 100vw;
  height: 75vh;
  background: whitesmoke;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: linear-gradient(to bottom, #7a19f1, #332179);
  background-attachment: fixed;
  @media (max-width:580px){
width:380px ;
height:110vh ;
display:flex ;
flex-direction:column;
background:color ;
}
 
`;
export const DescriptionProfile = styled.div`
  width: 60vw;
  padding-top: 70px;
  height: 550px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  line-height: 30px;
  background: linear-gradient(to bottom, #7a19f1, #332179);
  background-attachment: fixed;
  h1 {
    font-family: open sans, sans-serif;
    font-size: calc(22px + 18 * ((100vw - 576px) / (1200)));
    color: black;
    font-weight: 700;
    text-transform: uppercase !important;
    margin-bottom: 30px;
    color: #ffff;
  }
  p {
    font-family: open sans, sans-serif;
    margin-bottom: 30px;
    line-height: 1.6;
    color: black;
    font-size: 20px;
    font-weight: 400;
    color: #ffff;
    max-width: 800px;
    margin-right: auto;
    margin-left: auto;
    display: block;
    text-align: start;
  }
  .btns {
    display: flex;
    gap: 60px;
    padding-top: 20px;
    @media (max-width:580px){
gap:15px;
display:flex ;
flex-direction:column;
background:color ;
}
  }
  button {
    font-family: open sans, sans-serif;
    height: 60px;
    width: 180px;
    background: #f2cf00;
    background: linear-gradient(180deg, #f2cf00 0%, #f2b200 100%);
    box-shadow: 0 2px 3px rgb(0 0 0 / 50%);
    border: none !important;
    color: rgba(0, 0, 0, 0.6);
    padding: 12px 30px;
    border-radius: 30px;
    display: inline-block;
    font-weight: 400;
    color: #212529;

    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
`;
