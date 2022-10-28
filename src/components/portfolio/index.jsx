import React from "react";
import Hamburguer from "../../assets/hamburguer-kenzie.png";
import KenzieHub from "../../assets/kenzie-hub.png";
import NuKenzie from "../../assets/nu-kenzie.png";
import { PortfolioSection, PortfolioDecription } from "./styles";

function Portfolio() {
  return (
    <PortfolioSection>
      <h2> Portfolio</h2>
      <PortfolioDecription>
        <div className="left-side">
          <img src={Hamburguer} alt="img projeto" srcset="" />
        </div>

        <div className="right-side">
          <h2>Hamburguer</h2>

          <p>
            A platform for automating data collection and reporting throughout
            teams, operations and supply chains.
          </p>
          <div className="btns">
            <a href="https://hamburguer-kenzie-aj75.vercel.app/">Visite</a>
            <a href="https://github.com/brenolobianco/hamburguer">
              Repositorio
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
            A platform for automating data collection and reporting throughout
            teams, operations and supply chains.
          </p>
          <div className="btns">
            <a href="https://atividade-kenzie-9voy.vercel.app/">Visite</a>
            <a href="https://github.com/brenolobianco/hamburguer">
              Repositorio
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
            A web app that lets users view who is tweeting nearby. Using geocode
            data, each tweet is pinned on a map where it originated.
          </p>
          <div className="btns">
            <a href="https://kenzie-hub-breno-bzi73dtu0-kenziehamburguer.vercel.app/login">
              Visite
            </a>
            <a href="https://github.com/brenolobianco/kenzie-hub-breno">
              Repositorio
            </a>
          </div>
        </div>
      </PortfolioDecription>
    </PortfolioSection>
  );
}

export default Portfolio;
