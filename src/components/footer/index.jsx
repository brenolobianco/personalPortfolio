import React from "react";
import { FooterBox } from "./styles";

function Footer() {
  return (
    <FooterBox>

      <h2>Contatos</h2>
<ul>
    <li><a href="https://www.linkedin.com/in/breno-lobianco/">Linkedin</a></li>
    <li><a href="https://wa.me/5516996225832">Fale comigo no Whatsapp</a></li>
    <li><a href="https://github.com/brenolobianco">GitHub</a></li>
</ul>
<button onClick={() => { window.scrollTo(0,0)}} >^</button>
    </FooterBox>
  );
}
export default Footer;
