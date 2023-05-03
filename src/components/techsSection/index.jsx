import React from "react";
import { TechsSection } from "./styles";
import LogoPHP from "../../assets/php.png";
import LogoReact from "../../assets/logo-react.svg";
import LogoLaravel from "../../assets/laravel.png";
import LogoJs from "../../assets/js.png";
import LogoTs from "../../assets/ts.png";
import LogoPostGree from "../../assets/postgree.png";
import LogoNode from "../../assets/node.png"


function Techs() {
  return (
    <TechsSection>
      <h2>Tecnologias que domino</h2>
      <div className="techs">
        <img src={LogoPHP} alt="php" />
        <img src={LogoReact} alt="react" />
        <img src={LogoLaravel} alt="laravel" />
        <img src={LogoJs} alt="js" />
        <img src={LogoTs} alt="ts" />
        <img src={LogoNode} alt="node" />
        <img src={LogoPostGree} alt="postgree" />  
      </div>
    </TechsSection>
  );
}

export default Techs;
