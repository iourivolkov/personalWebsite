import { FunctionComponent } from "react";
import {
  FooterLogo,
  FooterText,
  FooterTextContainer,
  FooterContainer,
  FooterButton,
} from "./styled";

const Footer = () => {
  function scrollToTop() {
    window.scroll({ top: 0, behavior: "smooth" });
  }

  return (
    <FooterContainer>
      <FooterLogo>iourivolkov</FooterLogo>
      <FooterButton onClick={scrollToTop}>Top</FooterButton>
    </FooterContainer>
  );
};

export default Footer;
