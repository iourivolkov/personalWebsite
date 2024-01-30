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
      <ContactHeading id="contact">Let's connect</ContactHeading>
      <ContactLinksContainer>
        <ContactLinkSubContainer>
          <Link
            style={{ textDecoration: "none" }}
            href="https://www.linkedin.com/in/iourivolkov/"
          >
            <ContactLinks>LinkedIn</ContactLinks>
          </Link>
        </ContactLinkSubContainer>

        <ContactLinkSubContainer>
          <Link
            style={{ textDecoration: "none" }}
            href="https://www.instagram.com/ayureeeeee/"
          >
            <ContactLinks>Instagram</ContactLinks>
          </Link>
        </ContactLinkSubContainer>
        {/* <ContactLinkBreak isMenuOpen={isMenuOpen} /> */}
        <ContactLinkSubContainer>
          <Link style={{ textDecoration: "none" }} href="">
            <ContactLinks>Email</ContactLinks>
          </Link>
        </ContactLinkSubContainer>
      </ContactLinksContainer>
    </ContactPageContainer>
  );
};

export default ContactPage;
