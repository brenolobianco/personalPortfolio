import React from "react";
import { MainContent, DescriptionProfile } from "./styles";

function DescriptionPortfolio() {
  return (
    <MainContent>
      <div className="container">
        <DescriptionProfile>
          <h1>Desenvolvedor Web</h1>
          <p>
          Tenho experiência em projetos Front-end e Back-end. Sou um apaixonado por programação e em novas tecnologias do mercado.
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
                window.scrollTo(0, 500);
              }}
            >
              Tecnologias
            </button>
          </div>
        </DescriptionProfile>
      </div>
    </MainContent>
  );
}

export default DescriptionPortfolio;
