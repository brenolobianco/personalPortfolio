import styled from "styled-components";

export const MainContent = styled.main`
 
  height: 70vh;
  background: whitesmoke;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: linear-gradient(to bottom, #7a19f1, #332179);
  background-attachment: fixed;
  @media (max-width:480px){
height:100vh ;
display:flex ;
flex-direction:column;
background:color ;
padding-left:10px;
}
 
`;
export const DescriptionProfile = styled.div`
  padding-top: 70px;


  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  line-height: 40px;

  h1 {
    font-family: open sans, sans-serif;
    font-size: calc(22px + 18 * ((100vw - 576px) / (1200)));
    color: black;
    font-weight: 800;
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
    @media (max-width:480px){
gap:20px;
display:flex ;
flex-direction:column;
background:color ;
}
  }
  button {
    font-family: open sans, sans-serif;
    height: 60px;
    width: 180px;
    background: linear-gradient(180deg, #f2cf00 0%, #f2b200 100%);
    box-shadow: 0 2px 3px rgb(0 0 0 / 50%);
    border: none !important;
    color: rgba(0, 0, 0, 0.6);
    padding: 12px 30px;
    border-radius: 30px;
    display: inline-block;
    font-size:22px;
    font-weight: 400;
    color: #212529;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
  button:hover{
   
    background: linear-gradient(90deg, #f2cf00 0%, #f2b200 100%);
    box-shadow: 0 2px 3px rgb(0 0 0 / 50%);
    border: none!important;
    color: rgba(0,0,0,.6);
  }
`;
