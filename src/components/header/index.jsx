import React from "react";

import { HeaderSection } from "./styles";
import Breno from "../../assets/breno.jpg";
import lkn from "../../assets/linkedin.png";
import Whatsapp from "../../assets/whats.png";
import Git from "../../assets/git.png";

function Header() {
  return (
    <HeaderSection>
      <div className="profile">
        <img src={Breno} alt="" srcset="" />
        <h3>Breno Lobianco</h3>
      </div>

      <nav>
        <a href="https://www.linkedin.com/in/breno-lobianco/">
          <img src={lkn} alt="" />
        </a>
        <a href="https://github.com/brenolobianco">
          <img src={Whatsapp} alt="" />
        </a>
        <a href="https://wa.me/5516996225832">
          <img src={Git} alt="" />
        </a>
      </nav>
    </HeaderSection>
  );
}

export default Header;
