import { FunctionComponent } from "react";
import {
  ContactHeading,
  ContactLinks,
  ContactPageContainer,
  ContactLinksContainer,
  ContactLinkSubContainer,
  ContactLinksText,
  ContactLinkBreak,
} from "./styled";
import Link from "next/link";
import { usePersonalWebsiteStore } from "@/store/personalWebsiteStore";

const ContactPage: FunctionComponent = () => {
  const { isMenuOpen, setIsMenuOpen } = usePersonalWebsiteStore();

  return (
    <ContactPageContainer>
      <ContactHeading id="contact">Contact</ContactHeading>
      <ContactLinksContainer>
        <ContactLinkSubContainer>
          <ContactLinks>LinkedIn</ContactLinks>
          <Link
            style={{ textDecoration: "none" }}
            href="https://www.linkedin.com/in/iourivolkov/"
          >
            <ContactLinksText>connect</ContactLinksText>
          </Link>
        </ContactLinkSubContainer>
        <ContactLinkBreak isMenuOpen={isMenuOpen} />
        <ContactLinkSubContainer>
          <ContactLinks>Instagram</ContactLinks>
          <Link
            style={{ textDecoration: "none" }}
            href="https://www.instagram.com/ayureeeeee/"
          >
            <ContactLinksText>connect</ContactLinksText>
          </Link>
        </ContactLinkSubContainer>
        <ContactLinkBreak isMenuOpen={isMenuOpen} />
        <ContactLinkSubContainer>
          <ContactLinks>Email</ContactLinks>
          <Link style={{ textDecoration: "none" }} href="">
            <ContactLinksText>connect</ContactLinksText>
          </Link>
        </ContactLinkSubContainer>
      </ContactLinksContainer>
    </ContactPageContainer>
  );
};

export default ContactPage;
