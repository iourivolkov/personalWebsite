import { styled } from "styled-components";

export const ContactLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContactPageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 100px 40px 100px 40px;
`;

export const ContactHeading = styled.h1`
  font-size: 96px;
  font-family: inter-black;
  max-width: 10ch;
`;

export const ContactLinks = styled.h2`
  font-size: 38px;
  font-family: inter-regular;
  text-decoration: underline;
`;

export const ContactLinkSubContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10rem;
`;

export const ContactLinksText = styled.p`
  font-size: 30px;
  font-family: inter-thin;
  cursor: pointer;
`;
