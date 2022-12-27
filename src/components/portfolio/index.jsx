import React from "react";
import Hamburguer from "../../assets/hamburguer-kenzie.png";
import KenzieHub from "../../assets/kenzie-hub.png";
import NuKenzie from "../../assets/nu-kenzie.png";
import Shop from "../../assets/shop.png";
import CrudTests from "../../assets/tests.jpg"
import { PortfolioSection, PortfolioDecription } from "./styles";

function Portfolio() {
  return (
    <PortfolioSection>
      <h2> Portfólio</h2>
      <PortfolioDecription>
        <div className="left-side">
          <img src={Hamburguer} alt="img projeto" srcset="" />
        </div>

        <div className="right-side">
          <h2>Hamburguer</h2>

          <p>
           Hamburgueria, com carrinho de compras. consumindo API
          </p>
          <div className="btns">
            <a href="https://hamburguer-kenzie-aj75.vercel.app/">Visite</a>
            <a href="https://github.com/brenolobianco/hamburguer">
              Repositório
            </a>
          </div>
        </div>
      </PortfolioDecription>
      <PortfolioDecription>
        <div className="left-side">
          <img src={NuKenzie} alt="img projeto" srcset="" />
        </div>

        <div className="right-side">
          <h2>Nu-Kenzie</h2>

          <p>
            Plataforma de controle de finanças pessoais. Controle de entrada e saida de despesas.
          </p>
          <div className="btns">
            <a href="https://atividade-kenzie-9voy.vercel.app/">Visite</a>
            <a href="https://github.com/brenolobianco/hamburguer">
              Repositório
            </a>
          </div>
        </div>
      </PortfolioDecription>

      <PortfolioDecription>
        <div className="left-side">
          <img src={Shop} alt="img projeto"  />
        </div>

        <div className="right-side">
          <h2>Mercado </h2>
          <p>
         Mercado de compras online. 
          </p>
          <div className="btns">
            <a href="https://curly-doodle-77c96492.pages.github.io/">
              Visite
            </a>
            <a href="
https://github.com/Kenzie-Academy-Brasil-Developers/entrega-lista-produtos-m2-sprint-1b-brenolobianco">
              Repositório
            </a>
          </div>
        </div>
      </PortfolioDecription>
      <PortfolioDecription>
        <div className="left-side">
          <img src={KenzieHub} alt="img projeto" srcset="" />
        </div>

        <div className="right-side">
          <h2>Kenzie Hub</h2>
          <p>
          Rede Social feita para Desenvolvedores. Cadastro de tecnologias e Skils
          </p>
          <div className="btns">
            <a href="https://kenzie-hub-breno-bzi73dtu0-kenziehamburguer.vercel.app/login">
              Visite
            </a>
            <a href="https://github.com/brenolobianco/kenzie-hub-breno">
              Repositório
            </a>
          </div>
        </div>
      </PortfolioDecription>
      <PortfolioDecription>
        <div className="left-side">
          <img src={CrudTests} alt="img projeto"  />
        </div>

        <div className="right-side">
          <h2>Crud de Usuario</h2>
          <p>
          Projeto Back-end, Crud de usuario utilizando Node Express, typeOrm, typescript e Postgree.
          </p>
          <div className="btns">
            
            <a href="https://github.com/brenolobianco/crud_user_typeOrm">
              Repositório
            </a>
          </div>
        </div>
      </PortfolioDecription>
    </PortfolioSection>
  );
}

export default Portfolio;
