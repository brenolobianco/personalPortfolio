import React from "react";
import { MainContent, DescriptionProfile } from "./styles";

function DescriptionPortfolio() {
  return (
    <MainContent>
      <div className="container">
        <DescriptionProfile>
          <h1>Desenvolvedor Front-End </h1>
          <p>
            Desenvolvedor Front End, me reconheço como um apaixonado por
            programação e em novas tecnologias do mercado. Possuo foco em
            desenvolvimento com Html, Css, Javascript,React JS,API Rest. Me
            considero ágil e consistente em aprender uma nova linguagem e me
            adaptar à qualquer mudança, pronto para superar qualquer desafio!
          </p>
          <div className="btns">
            <button
              onClick={() => {
                window.scrollTo(0, 1000);
              }}
            >
              Portfolio
            </button>
            <button
              onClick={() => {
                window.scrollTo(0, 2000);
              }}
            >
              Contatos
            </button>
          </div>
        </DescriptionProfile>
      </div>
    </MainContent>
  );
}

export default DescriptionPortfolio;
