import React from "react";
import { TechsSection } from "./styles";
import LogoHtml from "../../assets/html.png";
import LogoReact from "../../assets/logo-react.svg";
import LogoCss from "../../assets/css-4.svg";
import LogoJs from "../../assets/js.png";
import LogoTs from "../../assets/ts.png";
import LogoPostGree from "../../assets/postgree.png";
import LogoNode from "../../assets/node.png"


function Techs() {
  return (
    <TechsSection>
      <h2>Tecnologias que domino</h2>
      <div className="techs">
        <img src={LogoHtml} alt="Html" />
        <img src={LogoReact} alt="react" />
        <img src={LogoCss} alt="css" />
        <img src={LogoJs} alt="js" />
        <img src={LogoTs} alt="ts" />
        <img src={LogoNode} alt="node" />
        <img src={LogoPostGree} alt="postgree" />

      </div>
    </TechsSection>
  );
}

export default Techs;
