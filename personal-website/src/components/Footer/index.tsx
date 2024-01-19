import { FunctionComponent } from "react";
import {
  FooterLogo,
  FooterText,
  FooterTextContainer,
  FooterContainer,
} from "./styled";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLogo>iourivolkov</FooterLogo>
      <FooterTextContainer>
        <FooterText>Back to top</FooterText>
      </FooterTextContainer>
    </FooterContainer>
  );
};

export default Footer;
