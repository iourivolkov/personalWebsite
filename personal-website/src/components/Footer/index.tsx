import { FunctionComponent } from "react";
import {
  FooterLogo,
  FooterText,
  FooterTextContainer,
  FooterContainer,
  FooterButton,
  FooterHeading,
  FooterContactContainer,
  FooterSocialsContainer,
  FooterSocialsHeading,
  FooterSocialLink,
  FooterInfoContainer,
  FooterInfoLink,
  FooterInfoHeading,
  FooterNavContainer,
} from "./styled";
import Link from "next/link";

const Footer = () => {
  function scrollToTop() {
    window.scroll({ top: 0, behavior: "smooth" });
  }

  return (
    <>
      {/* <FooterContactContainer>
        <FooterHeading>contact</FooterHeading>
        <FooterNavContainer>
          <FooterSocialsContainer>
            <FooterSocialsHeading>socials</FooterSocialsHeading>
            <Link
              href="https://www.linkedin.com/in/iourivolkov/"
              style={{ textDecoration: "none", color: "#000" }}
            >
              <FooterSocialLink>linkedin</FooterSocialLink>
            </Link>
            <Link
              href="https://www.linkedin.com/in/iourivolkov/"
              style={{ textDecoration: "none", color: "#000" }}
            >
              <FooterSocialLink>email</FooterSocialLink>
            </Link>
            <Link
              href="https://www.linkedin.com/in/iourivolkov/"
              style={{ textDecoration: "none", color: "#000" }}
            >
              <FooterSocialLink>instagram</FooterSocialLink>
            </Link>
          </FooterSocialsContainer>
          <FooterInfoContainer>
            <FooterInfoHeading>Info</FooterInfoHeading>
            <FooterInfoLink>home</FooterInfoLink>
            <FooterInfoLink>projects</FooterInfoLink>
            <FooterInfoLink>about</FooterInfoLink>
            <FooterInfoLink>contact</FooterInfoLink>
          </FooterInfoContainer>
        </FooterNavContainer>
      </FooterContactContainer> */}
      <FooterContainer>
        <FooterLogo>iourivolkov</FooterLogo>
        {/* <FooterButton onClick={scrollToTop}>Top</FooterButton>
         */}
        <FooterLogo> &#169; 2024 iourivolkov all rights reserved.</FooterLogo>
      </FooterContainer>
    </>
  );
};

export default Footer;
