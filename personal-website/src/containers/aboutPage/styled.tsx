import { styled } from "styled-components";

export const AboutTextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AboutPageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 100px 40px 100px 40px;
  gap: 10rem;
`;

export const AboutHeading = styled.h1`
  font-family: inter-black;
  font-size: 96px;
  margin-bottom: 50px;
  max-width: 8ch;
`;

export const AboutText = styled.p`
  font-family: inter-regular;
  font-size: 38px;
  max-width: 25ch;
`;

export const AboutImageContainer = styled.div`
  max-height: 650px;
  max-width: 850px;
`;
