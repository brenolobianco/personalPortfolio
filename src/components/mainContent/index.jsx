import React from "react";
import { MainContent, DescriptionProfile } from "./styles";

function DescriptionPortfolio() {
  return (
    <MainContent>
      <div className="container">
        <DescriptionProfile>
          <h1> Desenvolvedor Full-Stack</h1>
          <p>
          Profissionwqddsadadal com experiência em projetos de desenvolvimento Web. sou um apaixonado por programação e em novas tecnologias do mercado.
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
