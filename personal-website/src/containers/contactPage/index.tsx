import { FunctionComponent } from "react";
import {
  ContactHeading,
  ContactLinks,
  ContactPageContainer,
  ContactLinksContainer,
  ContactLinkSubContainer,
  ContactLinksText,
} from "./styled";

const ContactPage = () => {
  return (
    <ContactPageContainer>
      <ContactHeading>Let's get in touch.</ContactHeading>
      <ContactLinksContainer>
        <ContactLinkSubContainer>
          <ContactLinks>Telegram</ContactLinks>
          <ContactLinksText>@someguyyyy</ContactLinksText>
        </ContactLinkSubContainer>

        <ContactLinkSubContainer>
          <ContactLinks>LinkedIn</ContactLinks>
          <ContactLinksText>/in/iourivolkov/</ContactLinksText>
        </ContactLinkSubContainer>

        <ContactLinkSubContainer>
          <ContactLinks>Instagram</ContactLinks>
          <ContactLinksText>@iveeeeeth</ContactLinksText>
        </ContactLinkSubContainer>

        <ContactLinkSubContainer>
          <ContactLinks>Email</ContactLinks>
          <ContactLinksText>volk.iouri@gmail.com</ContactLinksText>
        </ContactLinkSubContainer>
      </ContactLinksContainer>
    </ContactPageContainer>
  );
};

export default ContactPage;
