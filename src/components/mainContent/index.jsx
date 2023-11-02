import React from "react";
import { MainContent, DescriptionProfile } from "./styles";

function DescriptionPortfolio() {
  return (
    <MainContent>
      <div className="container">
        <DescriptionProfile>
          <h1>Desenvolvedor Web</h1>
          <p>
            Sou um apaixonado por programação. Me considero consistente em
            aprender uma nova linguagem e me adaptar à qualquer mudança. Gosto
            de desafios e de solucionar problemas. Tenho sólido conhecimento em
            Dokcer, Javascript e PHP e seus principais frameworks:, React.js,
            Vue.js, Node.js, Laravel. Atualmente trabalho com PHP/Laravel e
            React na Clickideia Plataforma Educacional.
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
