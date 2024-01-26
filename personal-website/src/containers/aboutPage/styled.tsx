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

  @media screen and (max-width: 768px) {
    font-size: 48px;
    max-width: 20ch;
  }
`;

export const AboutText = styled.p`
  font-family: inter-regular;
  font-size: 38px;
  max-width: 30ch;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`;

export const AboutImageContainer = styled.div`
  max-height: 650px;
  max-width: 850px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
