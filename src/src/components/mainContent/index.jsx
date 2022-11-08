import React from "react";
import { MainContent, DescriptionProfile } from "./styles";

function DescriptionPortfolio() {
  return (
    <MainContent>
      <div className="container">
        <DescriptionProfile>
          <h1>Desenvolvedor Front-End </h1>
          <p>
          Desenvolvedor Front-end, tenho experiência em projetos pessoais. sou um apaixonado por programação e em novas tecnologias do mercado.

Me considero consistente em aprender uma nova linguagem e me adaptar à qualquer mudança. Gosto de desafios e de solucionar problemas. 
          </p>
          <div className="btns">
            <button
              onClick={() => {
                window.scrollTo(0, 1000);
              }}
            >
              Portfólio
            </button>
            <button
              onClick={() => {
                window.scrollTo(0, 50000);
              }}
            >
              Contato
            </button>
          </div>
        </DescriptionProfile>
      </div>
    </MainContent>
  );
}

export default DescriptionPortfolio;
