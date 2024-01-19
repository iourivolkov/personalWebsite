import { FunctionComponent } from "react";
import {
  FooterLogo,
  FooterText,
  FooterTextContainer,
  FooterContainer,
  FooterButton,
} from "./styled";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLogo>iourivolkov</FooterLogo>
      <FooterButton>Top</FooterButton>
      {/* <FooterTextContainer>
        <FooterText>Back to top</FooterText>
      </FooterTextContainer> */}
    </FooterContainer>
  );
};

export default Footer;
